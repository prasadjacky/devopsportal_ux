import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDirectory } from './user_directories'
import { AppService } from '../../../../../services/app.service';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'userDirectories',
    templateUrl: 'user_directories.component.html',
    styleUrls: ['./user_directories.component.css']
})

export class UserDirectoriesComponent implements OnInit{
     
    @ViewChild('userDirectoriesForm') userDirectoriesForm;

    constructor(private appService: AppService, private http:Http){}

    public userDirectory:UserDirectory = {
        userDirectory_name:'',
        userDirectory_type:'',
        userDirectory_url:'',
        userDirectory_search_base:'',
        userDirectory_auth:{
            auth_bindDN:'',
            auth_bindPassword:''
        }
    };

    public userDirectoryObj:UserDirectory;
    public editObj:UserDirectory = {
        userDirectory_name:'',
        userDirectory_type:'',
        userDirectory_url:'',
        userDirectory_search_base:'',
        userDirectory_auth:{
            auth_bindDN:'',
            auth_bindPassword:''
        }
    };
    public showValidations:boolean = false;
    public index:number; 
    public valid:boolean = false;
    public userDirectoryArray: UserDirectory[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vbud').show();
            $('#sbud').hide();
        });
    }

    // OU=general,Ou=Dom Users,DC=nmumarl,DC=lntinfotech,DC=com

    onValidate(event) {
        this.showValidations = true;
        if (!this.userDirectoriesForm.valid) {
            return;
        }
        this.showValidations = false;
        this.userDirectoryObj = {
            userDirectory_name:this.userDirectory.userDirectory_name,
            userDirectory_type:this.userDirectory.userDirectory_type,
            userDirectory_url:this.userDirectory.userDirectory_url,
            userDirectory_search_base:this.userDirectory.userDirectory_search_base,
            userDirectory_auth:{
                auth_bindDN:this.userDirectory.userDirectory_auth.auth_bindDN,
                auth_bindPassword:this.userDirectory.userDirectory_auth.auth_bindPassword
            }
        }
        this.postValidateUserDir();
    }

    onSave() {  
        this.postUserDir();
        this.getUserDir();
        this.onCancel();
        event.preventDefault();
    }

    onDelete(userDir:any){ 
        this.deleteUserDir(userDir)
    }

    onEdit(userDirectory: any,index: number){
        this.index = index;
        this.editObj = userDirectory;
    }

    onEditSave(editUserDirectoriesForm: any){
        this.editObj = {
            userDirectory_name:editUserDirectoriesForm.userDirectory_name,
            userDirectory_type:editUserDirectoriesForm.userDirectory_type,
            userDirectory_url:editUserDirectoriesForm.userDirectory_url,
            userDirectory_search_base:editUserDirectoriesForm.userDirectory_search_base,
            userDirectory_auth:{
                auth_bindDN:editUserDirectoriesForm.auth_bindDN,
                auth_bindPassword:editUserDirectoriesForm.auth_bindPassword
            }
        }   
       
        this.userDirectoryArray.splice(this.index,1,this.editObj);
    }

    onCancel(){
        this.userDirectory.userDirectory_name = '';
        this.userDirectory.userDirectory_type = '';
        this.userDirectory.userDirectory_url = '';
        this.userDirectory.userDirectory_search_base = '';
        this.userDirectory.userDirectory_auth.auth_bindDN = '';
        this.userDirectory.userDirectory_auth.auth_bindPassword = '';
        this.showValidations = false;
    }

    ngOnInit(){
        this.getUserDir();
    }



//----------------------------------------------------------------------------------------------------------

    getUserDir(){
        this.http.get(`${this.appService.URL}/api/user_directory`).subscribe(
           res => {
               this.userDirectoryArray = JSON.parse(res['_body']);
               this.appService.userDirectoryNames.push(this.userDirectoryArray[0].userDirectory_name);
               if(res.status == 200){
                   console.log('successfully populated user-directories')
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

    postValidateUserDir(){
        console.log(this.userDirectoryObj)
       
        this.http.post(`${this.appService.URL}/api/validation/user_directory`,this.userDirectoryObj).subscribe(
           res => {
               if(res.status == 200){
        console.log('inside success '+this.userDirectoryObj)
                   this.valid = true;
                   $('document').ready(function(){
                        $('#sbud').show();
                        $('#vbud').hide();
                   })
                   console.log('successfully validated user directory')
               }
               else{
                   this.valid = false;
                   console.log('failure')
               }    
            },
          error =>{
              console.log(error);
            }
       ); 
    }

    postUserDir(){
        this.http.post(`${this.appService.URL}/api/user_directory`,this.userDirectoryObj).subscribe(
           res => {
               if(res.status == 200){
                   this.getUserDir();
                   console.log('successfully posted user directory')
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

    deleteUserDir(userDir){
        this.http.delete(`${this.appService.URL}/api/user_directory/${userDir._id}`).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully deleted user directory '+userDir.userDirectory_name);
                   this.getUserDir();
               }
               else{
                   console.log('failure');
               }    
            },
          error =>{
              console.log(error);
            }
       );
    }

}