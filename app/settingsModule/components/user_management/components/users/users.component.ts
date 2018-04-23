import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../../services/app.service';
import { Users } from './users';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

    @ViewChild ('userForm') userForm;
    constructor(private appService: AppService, private http:Http) {}
    public usersDb:any[] = [];  
    public directoryNamesArray:string[]=[];
    public showValidations: boolean = false;
    public flag:boolean;
    public addErr1:boolean = false;
    public addErr2:boolean = false;
    public Search:any = {
        searchBy:'',
        searchText:''
    }
    public tempArray:Users[]=[];
    public userArray:Users[]=[];
    public index:number;

    public user:Users={
        user_directory_name:'',
        user_full_name:'',
        user_id:'',
        email_id:''
    }

     public userObj:Users;
     public viewObj:Users={
        user_directory_name:'',
        user_full_name:'',
        user_id:'',
        email_id:''
    }

   
    onSearch(userForm: any) {
        this.showValidations = true;
        this.addErr1 = false;
        this.addErr2 = false;
        if (!this.userForm.valid) {
            return;
        }
        this.showValidations = false;
         this.http.get(`${this.appService.URL}/api/population/directory_users?userDirName=DemoUserDirectory&searchType=${this.Search.searchBy}&searchValue=${this.Search.searchText}`).subscribe(
           res => {
               
               if(res['_body'] == null){
                   this.flag = false;
                   $('.err').show();
               }
               else{
                   this.flag = true;
                    this.usersDb = JSON.parse(res['_body']).userResults;
                    if(res.status == 200){
                        $('.err').hide();
                        console.log('successful search results')
                    }
                    else{
                        console.log('failure')
                    }
               }    
            },
          error =>{
              console.log(error);
            }
       ); 
    }

    pushUser(index, user:any){
        this.addErr1 = false;
        this.addErr2 = false;
        this.userObj = user
        for(var i=0;i<this.userArray.length;i++){
            if(this.userObj.user_id == this.userArray[i]['user_id']){
                this.addErr1 = true
                return;
            }
        }
        if(this.tempArray.length > 0){
            this.addErr2=false;
            for(var j=0;j<this.tempArray.length;j++){
                if(this.userObj.user_id == this.tempArray[j]['user_id']){
                    this.addErr2 = true
                    return;
                }
            }
        }
        this.tempArray.push(this.userObj);
    }

    popUser(index,user){
        this.tempArray.splice(index,1);
    }

    onSave(event){
        this.showValidations = true;
        if (!this.userForm.valid || (this.tempArray.length == 0)) {
            return;
        }
        this.showValidations = false;
        (<any>$('#myUsersModal')).modal('hide');
        this.postUsersApi();
        this.onCancel();
    }

    onView(user:any){
        this.viewObj=user;
    }

    confirmDelete(user:any){
        this.viewObj = user;
    }

    onDelete(user:any){ 
         this.deleteUser(user);
    }

    onCancel(){
        this.user.user_directory_name = '';
        this.Search.searchBy = '';
        this.Search.searchText = '';
        this.tempArray = [];
        this.usersDb = [];
        this.showValidations = false;
        this.flag = false;
    }
    

    ngOnInit(){
        $('document').ready(function(){
            $('.err').hide();
        });
        this.directoryNamesArray = this.appService.userDirectoryNames;
        this.getUsersApi();
    }

   

//----------------------api calling functions------------------------------------------------------------------------

   getUsersApi(){
       this.http.get(`${this.appService.URL}/api/user`).subscribe(
           res => {
            
               this.userArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated users')
               }
               else{
                   console.log('failure')
               }    
            },
          error =>{
              console.log(error);
            }
       );
   } 

   postUsersApi(){
       this.http.post(`${this.appService.URL}/api/user`,this.tempArray).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted users')
                   this.getUsersApi();
               }
               else{
                   console.log('failure')
               }    
            },
          error =>{
              console.log(error);
            }
       );
   }

   deleteUser(user:any){
       this.http.delete(`${this.appService.URL}/api/user/${user._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getUsersApi();
                   console.log('successfulyl deleted user '+ user.user_full_name)
               }
               else{
                   console.log('failure')
               }    
            },
          error =>{
              console.log(error);
            }
       );
   }
}