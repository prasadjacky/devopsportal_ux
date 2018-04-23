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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_service_1 = require("../../../../../services/app.service");
var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.UserManagement = {
            user_full_name: '',
            email_id: '',
            user_id: '',
            password: '',
            role_id: '',
        };
        this.userObj = {
            user_full_name: '',
            email_id: '',
            user_id: '',
            password: '',
            role_id: '',
        };
        this.Users = [];
        this.usersAvailable = [];
    }
    UserManagementComponent.prototype.pushUser = function (user, index) {
        this.addErr = false;
        for (var i = 0; i < this.Users.length; i++) {
            if (user.user_id == this.Users[i]['user_id']) {
                this.addErr = true;
                return;
            }
        }
        this.UserManagement = user;
    };
    UserManagementComponent.prototype.onSave = function (event) {
        if (!this.userManagementForm.valid) {
            this.showValidations = true;
            return;
        }
        this.showValidations = false;
        this.Users.push(this.UserManagement);
        $('#addUserModal').modal('hide');
        this.onCancel();
    };
    UserManagementComponent.prototype.confirmDelete = function (index, user) {
        this.index = index;
        this.userObj = user;
    };
    UserManagementComponent.prototype.onDelete = function () {
        this.Users.splice(this.index, 1);
    };
    UserManagementComponent.prototype.onCancel = function () {
        this.UserManagement = {
            user_full_name: '',
            email_id: '',
            user_id: '',
            password: '',
            role_id: '',
        };
    };
    UserManagementComponent.prototype.ngOnInit = function () {
        this.key = this.appService.selectedProjectKey;
        this.getUsersApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    UserManagementComponent.prototype.getUsersApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/project_users?project_key=" + this.key).subscribe(function (res) {
            if (res['_body'] != null) {
                _this.Users = JSON.parse(res['_body']);
            }
            if (res.status == 200) {
                console.log('successfully populated project users');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('userManagementForm'),
        __metadata("design:type", Object)
    ], UserManagementComponent.prototype, "userManagementForm", void 0);
    UserManagementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user_management',
            templateUrl: 'user_management.component.html',
            styleUrls: ['./user_management.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;
