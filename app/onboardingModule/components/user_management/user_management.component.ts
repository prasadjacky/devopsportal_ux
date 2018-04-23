import { Http } from '@angular/http';
import { Component, ViewChild } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { User } from './user'

@Component({
    moduleId: module.id,
    selector: 'userManagement',
    templateUrl: 'user_management.component.html',
    styleUrls: ['./user_management.component.css']
})

export class UserManagementComponent {
    @ViewChild('userManagementForm') userManagementForm;
    @ViewChild('edit_userManagementForm') edit_userManagementForm;
    constructor(private appService: AppService, private http: Http) { }
    public showValidations = false;
    public UserManagement: User = {
        user_full_name: '',
        email_id: '',
        user_id: '',
        _id: '',
        role_id: '',
    };
    public userObj: User;
    public editObj: User = {
        user_full_name: '',
        email_id: '',
        user_id: '',
        _id: '',
        role_id: '',
    };
    public Users: User[] = [];
    public index: number;
    public usersAvailable = [];
    userAlreadyAdded = false;
    adminAvailable = false;
    memberAvailable = false;
    A_M_validator = false;
    onValidate() {
        this.adminAvailable = false;
        this.memberAvailable = false;
        for (var i = 0; i < this.Users.length; i++) {
            if (!this.adminAvailable) {
                var role = this.Users[i].role_id
                var one = "1"
                if (role === one) {
                    this.adminAvailable = true;
                }
            }
            if (!this.memberAvailable) {
                var role = this.Users[i].role_id
                var two = "2"
                if (role === two) {
                    this.memberAvailable = true;
                }
            }
        }
        this.A_M_validator = true;
        return this.adminAvailable && this.memberAvailable;
    }
    pushUser(user, i) {
        for (var j = 0; j < this.Users.length; j++) {
            if (user.user_id === this.Users[j].user_id) {
                this.userAlreadyAdded = true;
                this.showValidations = false;
                this.UserManagement.user_full_name = "";
                return;
            }
        }
        this.userAlreadyAdded = false;
        this.UserManagement.user_full_name = user.user_full_name;
        this.UserManagement.user_id = user.user_id;
        this.UserManagement._id = user._id;
        this.UserManagement.email_id = user.email_id;
        this.index = i;
        
    }
    onSave(event) {

        this.showValidations = true;
        if (!this.userManagementForm.valid) {
            return;
        }
        this.showValidations = false;
        // $('#addUserModal').modal('hide');

        this.userObj = {
            user_full_name: this.UserManagement.user_full_name,
            email_id: this.UserManagement.email_id,
            user_id: this.UserManagement.user_id,
            _id: this.UserManagement._id,
            role_id: this.UserManagement.role_id
        }


        this.Users.push(this.userObj);
        console.log(this.Users);
        this.usersAvailable.splice(this.index, 1);

        this.appService.users = this.Users;

        this.UserManagement.user_full_name = '';
        this.UserManagement.email_id = '';
        this.UserManagement.user_id = '';
        this.UserManagement._id = '';
        this.UserManagement.role_id = '';

        if (this.A_M_validator) {
            this.onValidate();
        }
if (this.usersAvailable.length === 0) {
            (<any>$('#addUserModal')).modal('hide');
        }

    }
    onCancel() {
        this.showValidations = false;
        this.UserManagement.user_full_name = '';
        this.UserManagement.email_id = '';
        this.UserManagement.user_id = '';
        this.UserManagement._id = '';
        this.UserManagement.role_id = '';
    }
    // onEdit(user: any,index: number){
    //     this.index = index;
    //     this.editObj = user;
    //     console.log(this.editObj,this.index);
    // }

    confirmDelete(index: number, user: any) {
        this.index = index;
        this.editObj = user;
    }

    onDelete() {
        var doubleInstance = false;
        for (var j = 0; j < this.usersAvailable.length; j++) {
            if (this.Users[this.index].user_id === this.usersAvailable[j].user_id) {
                var doubleInstance = true;
            }
        }
        if (doubleInstance === false) {
            this.usersAvailable.push(this.Users[this.index])
            console.log(this.Users);
        }
        this.Users.splice(this.index, 1)
        if (this.A_M_validator) {
            this.onValidate();
        }
    }
    onEditSave(event) {

        // this.editObj = {
        //     user_full_name:edit_userManagementForm.user_full_name,
        //     user_id:edit_userManagementForm.user_id ,
        //     email_id:edit_userManagementForm.email_id ,
        //     password:edit_userManagementForm.password ,
        //     role_id:edit_userManagementForm.role_id ,
        // }  

        this.Users.splice(this.index, 1, this.editObj);
        console.log(this.Users)
    }
    ngOnInit() {
        this.Users = this.appService.users;
        this.http.get(`${this.appService.URL}/api/user`)
            .subscribe(users => {
                this.usersAvailable = users.json()
            })
    }
}