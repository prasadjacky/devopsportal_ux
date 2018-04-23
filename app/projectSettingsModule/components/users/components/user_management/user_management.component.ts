import { Component, ViewChild } from '@angular/core';
import { User } from './user'
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'user_management',
    templateUrl: 'user_management.component.html',
    styleUrls: ['./user_management.component.css']
})

export class UserManagementComponent {

    constructor(private appService: AppService, private http:Http){}

    @ViewChild ('userManagementForm') userManagementForm
    public UserManagement:User = {
        user_full_name: '',
        email_id: '',
        user_id: '',
        password: '',
        role_id: '',
    };
    public userObj:User = {
        user_full_name: '',
        email_id: '',
        user_id: '',
        password: '',
        role_id: '',
    };
    public index:number;
    public addErr:boolean;
    public showValidations:boolean;
    public Users: User[] = [];
    public usersAvailable = [];
    public key;

    pushUser(user,index){
        this.addErr = false;
        for(var i=0;i<this.Users.length;i++){
            if(user.user_id == this.Users[i]['user_id']){
                this.addErr = true
                return;
            }
        }
        this.UserManagement = user;
    }

    onSave(event){
        if(!this.userManagementForm.valid){
            this.showValidations=true;
            return;
        }
        this.showValidations=false;
        this.Users.push(this.UserManagement);
        (<any>$('#addUserModal')).modal('hide');
        this.onCancel();
        
    }

    confirmDelete(index,user){
        this.index = index;
        this.userObj = user;
    }

    onDelete(){
        this.Users.splice(this.index,1);
    }

    onCancel(){
        this.UserManagement = {
            user_full_name: '',
            email_id: '',
            user_id: '',
            password: '',
            role_id: '',
        }

    }

    ngOnInit(){
        this.key = this.appService.selectedProjectKey
        this.getUsersApi();
    }

    
//----------------------api calling functions------------------------------------------------------------------------

   getUsersApi(){
       this.http.get(`${this.appService.URL}/api/population/project_users?project_key=${this.key}`).subscribe(
           res => {
            
               if(res['_body'] != null){
                    this.Users = JSON.parse(res['_body']);
               }
               if(res.status == 200){
                   console.log('successfully populated project users')
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


