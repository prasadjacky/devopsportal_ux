"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_service_1 = require("../../../services/app.service");
var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showValidations = false;
        this.UserManagement = {
            user_full_name: '',
            email_id: '',
            user_id: '',
            _id: '',
            role_id: '',
        };
        this.editObj = {
            user_full_name: '',
            email_id: '',
            user_id: '',
            _id: '',
            role_id: '',
        };
        this.Users = [];
        this.usersAvailable = [];
        this.userAlreadyAdded = false;
        this.adminAvailable = false;
        this.memberAvailable = false;
        this.A_M_validator = false;
    }
    UserManagementComponent.prototype.onValidate = function () {
        this.adminAvailable = false;
        this.memberAvailable = false;
        for (var i = 0; i < this.Users.length; i++) {
            if (!this.adminAvailable) {
                var role = this.Users[i].role_id;
                var one = "1";
                if (role === one) {
                    this.adminAvailable = true;
                }
            }
            if (!this.memberAvailable) {
                var role = this.Users[i].role_id;
                var two = "2";
                if (role === two) {
                    this.memberAvailable = true;
                }
            }
        }
        this.A_M_validator = true;
        return this.adminAvailable && this.memberAvailable;
    };
    UserManagementComponent.prototype.pushUser = function (user, i) {
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
    };
    UserManagementComponent.prototype.onSave = function (event) {
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
        };
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
            $('#addUserModal').modal('hide');
        }
    };
    UserManagementComponent.prototype.onCancel = function () {
        this.showValidations = false;
        this.UserManagement.user_full_name = '';
        this.UserManagement.email_id = '';
        this.UserManagement.user_id = '';
        this.UserManagement._id = '';
        this.UserManagement.role_id = '';
    };
    // onEdit(user: any,index: number){
    //     this.index = index;
    //     this.editObj = user;
    //     console.log(this.editObj,this.index);
    // }
    UserManagementComponent.prototype.confirmDelete = function (index, user) {
        this.index = index;
        this.editObj = user;
    };
    UserManagementComponent.prototype.onDelete = function () {
        var doubleInstance = false;
        for (var j = 0; j < this.usersAvailable.length; j++) {
            if (this.Users[this.index].user_id === this.usersAvailable[j].user_id) {
                var doubleInstance = true;
            }
        }
        if (doubleInstance === false) {
            this.usersAvailable.push(this.Users[this.index]);
            console.log(this.Users);
        }
        this.Users.splice(this.index, 1);
        if (this.A_M_validator) {
            this.onValidate();
        }
    };
    UserManagementComponent.prototype.onEditSave = function (event) {
        // this.editObj = {
        //     user_full_name:edit_userManagementForm.user_full_name,
        //     user_id:edit_userManagementForm.user_id ,
        //     email_id:edit_userManagementForm.email_id ,
        //     password:edit_userManagementForm.password ,
        //     role_id:edit_userManagementForm.role_id ,
        // }  
        this.Users.splice(this.index, 1, this.editObj);
        console.log(this.Users);
    };
    UserManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Users = this.appService.users;
        this.http.get(this.appService.URL + "/api/user")
            .subscribe(function (users) {
            _this.usersAvailable = users.json();
        });
    };
    __decorate([
        core_1.ViewChild('userManagementForm'),
        __metadata("design:type", Object)
    ], UserManagementComponent.prototype, "userManagementForm", void 0);
    __decorate([
        core_1.ViewChild('edit_userManagementForm'),
        __metadata("design:type", Object)
    ], UserManagementComponent.prototype, "edit_userManagementForm", void 0);
    UserManagementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userManagement',
            templateUrl: 'user_management.component.html',
            styleUrls: ['./user_management.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;
