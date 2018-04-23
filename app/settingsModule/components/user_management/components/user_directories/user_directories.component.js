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
var UserDirectoriesComponent = /** @class */ (function () {
    function UserDirectoriesComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.userDirectory = {
            userDirectory_name: '',
            userDirectory_type: '',
            userDirectory_url: '',
            userDirectory_search_base: '',
            userDirectory_auth: {
                auth_bindDN: '',
                auth_bindPassword: ''
            }
        };
        this.editObj = {
            userDirectory_name: '',
            userDirectory_type: '',
            userDirectory_url: '',
            userDirectory_search_base: '',
            userDirectory_auth: {
                auth_bindDN: '',
                auth_bindPassword: ''
            }
        };
        this.showValidations = false;
        this.valid = false;
        this.userDirectoryArray = [];
    }
    UserDirectoriesComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vbud').show();
            $('#sbud').hide();
        });
    };
    // OU=general,Ou=Dom Users,DC=nmumarl,DC=lntinfotech,DC=com
    UserDirectoriesComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.userDirectoriesForm.valid) {
            return;
        }
        this.showValidations = false;
        this.userDirectoryObj = {
            userDirectory_name: this.userDirectory.userDirectory_name,
            userDirectory_type: this.userDirectory.userDirectory_type,
            userDirectory_url: this.userDirectory.userDirectory_url,
            userDirectory_search_base: this.userDirectory.userDirectory_search_base,
            userDirectory_auth: {
                auth_bindDN: this.userDirectory.userDirectory_auth.auth_bindDN,
                auth_bindPassword: this.userDirectory.userDirectory_auth.auth_bindPassword
            }
        };
        this.postValidateUserDir();
    };
    UserDirectoriesComponent.prototype.onSave = function () {
        this.postUserDir();
        this.getUserDir();
        this.onCancel();
        event.preventDefault();
    };
    UserDirectoriesComponent.prototype.onDelete = function (userDir) {
        this.deleteUserDir(userDir);
    };
    UserDirectoriesComponent.prototype.onEdit = function (userDirectory, index) {
        this.index = index;
        this.editObj = userDirectory;
    };
    UserDirectoriesComponent.prototype.onEditSave = function (editUserDirectoriesForm) {
        this.editObj = {
            userDirectory_name: editUserDirectoriesForm.userDirectory_name,
            userDirectory_type: editUserDirectoriesForm.userDirectory_type,
            userDirectory_url: editUserDirectoriesForm.userDirectory_url,
            userDirectory_search_base: editUserDirectoriesForm.userDirectory_search_base,
            userDirectory_auth: {
                auth_bindDN: editUserDirectoriesForm.auth_bindDN,
                auth_bindPassword: editUserDirectoriesForm.auth_bindPassword
            }
        };
        this.userDirectoryArray.splice(this.index, 1, this.editObj);
    };
    UserDirectoriesComponent.prototype.onCancel = function () {
        this.userDirectory.userDirectory_name = '';
        this.userDirectory.userDirectory_type = '';
        this.userDirectory.userDirectory_url = '';
        this.userDirectory.userDirectory_search_base = '';
        this.userDirectory.userDirectory_auth.auth_bindDN = '';
        this.userDirectory.userDirectory_auth.auth_bindPassword = '';
        this.showValidations = false;
    };
    UserDirectoriesComponent.prototype.ngOnInit = function () {
        this.getUserDir();
    };
    //----------------------------------------------------------------------------------------------------------
    UserDirectoriesComponent.prototype.getUserDir = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/user_directory").subscribe(function (res) {
            _this.userDirectoryArray = JSON.parse(res['_body']);
            _this.appService.userDirectoryNames.push(_this.userDirectoryArray[0].userDirectory_name);
            if (res.status == 200) {
                console.log('successfully populated user-directories');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserDirectoriesComponent.prototype.postValidateUserDir = function () {
        var _this = this;
        console.log(this.userDirectoryObj);
        this.http.post(this.appService.URL + "/api/validation/user_directory", this.userDirectoryObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('inside success ' + _this.userDirectoryObj);
                _this.valid = true;
                $('document').ready(function () {
                    $('#sbud').show();
                    $('#vbud').hide();
                });
                console.log('successfully validated user directory');
            }
            else {
                _this.valid = false;
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserDirectoriesComponent.prototype.postUserDir = function () {
        var _this = this;
        this.http.post(this.appService.URL + "/api/user_directory", this.userDirectoryObj).subscribe(function (res) {
            if (res.status == 200) {
                _this.getUserDir();
                console.log('successfully posted user directory');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserDirectoriesComponent.prototype.deleteUserDir = function (userDir) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/user_directory/" + userDir._id).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully deleted user directory ' + userDir.userDirectory_name);
                _this.getUserDir();
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('userDirectoriesForm'),
        __metadata("design:type", Object)
    ], UserDirectoriesComponent.prototype, "userDirectoriesForm", void 0);
    UserDirectoriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userDirectories',
            templateUrl: 'user_directories.component.html',
            styleUrls: ['./user_directories.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], UserDirectoriesComponent);
    return UserDirectoriesComponent;
}());
exports.UserDirectoriesComponent = UserDirectoriesComponent;
