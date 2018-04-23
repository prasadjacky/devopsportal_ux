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
var app_service_1 = require("../../../../../services/app.service");
var http_1 = require("@angular/http");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.usersDb = [];
        this.directoryNamesArray = [];
        this.showValidations = false;
        this.addErr1 = false;
        this.addErr2 = false;
        this.Search = {
            searchBy: '',
            searchText: ''
        };
        this.tempArray = [];
        this.userArray = [];
        this.user = {
            user_directory_name: '',
            user_full_name: '',
            user_id: '',
            email_id: ''
        };
        this.viewObj = {
            user_directory_name: '',
            user_full_name: '',
            user_id: '',
            email_id: ''
        };
    }
    UsersComponent.prototype.onSearch = function (userForm) {
        var _this = this;
        this.showValidations = true;
        this.addErr1 = false;
        this.addErr2 = false;
        if (!this.userForm.valid) {
            return;
        }
        this.showValidations = false;
        this.http.get(this.appService.URL + "/api/population/directory_users?userDirName=DemoUserDirectory&searchType=" + this.Search.searchBy + "&searchValue=" + this.Search.searchText).subscribe(function (res) {
            if (res['_body'] == null) {
                _this.flag = false;
                $('.err').show();
            }
            else {
                _this.flag = true;
                _this.usersDb = JSON.parse(res['_body']).userResults;
                if (res.status == 200) {
                    $('.err').hide();
                    console.log('successful search results');
                }
                else {
                    console.log('failure');
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    UsersComponent.prototype.pushUser = function (index, user) {
        this.addErr1 = false;
        this.addErr2 = false;
        this.userObj = user;
        for (var i = 0; i < this.userArray.length; i++) {
            if (this.userObj.user_id == this.userArray[i]['user_id']) {
                this.addErr1 = true;
                return;
            }
        }
        if (this.tempArray.length > 0) {
            this.addErr2 = false;
            for (var j = 0; j < this.tempArray.length; j++) {
                if (this.userObj.user_id == this.tempArray[j]['user_id']) {
                    this.addErr2 = true;
                    return;
                }
            }
        }
        this.tempArray.push(this.userObj);
    };
    UsersComponent.prototype.popUser = function (index, user) {
        this.tempArray.splice(index, 1);
    };
    UsersComponent.prototype.onSave = function (event) {
        this.showValidations = true;
        if (!this.userForm.valid || (this.tempArray.length == 0)) {
            return;
        }
        this.showValidations = false;
        $('#myUsersModal').modal('hide');
        this.postUsersApi();
        this.onCancel();
    };
    UsersComponent.prototype.onView = function (user) {
        this.viewObj = user;
    };
    UsersComponent.prototype.confirmDelete = function (user) {
        this.viewObj = user;
    };
    UsersComponent.prototype.onDelete = function (user) {
        this.deleteUser(user);
    };
    UsersComponent.prototype.onCancel = function () {
        this.user.user_directory_name = '';
        this.Search.searchBy = '';
        this.Search.searchText = '';
        this.tempArray = [];
        this.usersDb = [];
        this.showValidations = false;
        this.flag = false;
    };
    UsersComponent.prototype.ngOnInit = function () {
        $('document').ready(function () {
            $('.err').hide();
        });
        this.directoryNamesArray = this.appService.userDirectoryNames;
        this.getUsersApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    UsersComponent.prototype.getUsersApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/user").subscribe(function (res) {
            _this.userArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated users');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    UsersComponent.prototype.postUsersApi = function () {
        var _this = this;
        this.http.post(this.appService.URL + "/api/user", this.tempArray).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted users');
                _this.getUsersApi();
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/user/" + user._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getUsersApi();
                console.log('successfulyl deleted user ' + user.user_full_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('userForm'),
        __metadata("design:type", Object)
    ], UsersComponent.prototype, "userForm", void 0);
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            templateUrl: 'users.component.html',
            styleUrls: ['./users.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
