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
var ReleaseComponent = /** @class */ (function () {
    function ReleaseComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.release = {
            http_proxy: '',
            tool_category: 'release',
            tool_url: '',
            tool_instance_name: '',
            tool_name: '',
            tool_version: '',
            proxy_required: false,
            tool_auth: {
                auth_type: '',
                auth_username: '',
                auth_password: '',
                auth_token: ''
            }
        };
        this.viewObj = {
            http_proxy: '',
            tool_category: 'release',
            tool_url: '',
            tool_instance_name: '',
            tool_name: '',
            tool_version: '',
            proxy_required: false,
            tool_auth: {
                auth_type: '',
                auth_username: '',
                auth_password: '',
                auth_token: ''
            }
        };
        this.proxyNames = [];
        this.showValidations = false;
        this.releaseArray = [];
    }
    ReleaseComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb7').show();
            $('#sb7').hide();
            $('.message').hide();
        });
    };
    ReleaseComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.releaseForm.valid) {
            return;
        }
        this.showValidations = false;
        this.releaseObj = {
            http_proxy: this.release.http_proxy,
            tool_category: this.release.tool_category,
            tool_url: this.release.tool_url,
            tool_instance_name: this.release.tool_instance_name,
            tool_name: this.release.tool_name,
            tool_version: this.release.tool_version,
            proxy_required: this.release.proxy_required,
            tool_auth: {
                auth_type: this.release.tool_auth.auth_type,
                auth_username: this.release.tool_auth.auth_username,
                auth_password: this.release.tool_auth.auth_password,
                auth_token: this.release.tool_auth.auth_token
            }
        };
        if (this.release.tool_auth.auth_type == 'password') {
            delete this.releaseObj.tool_auth.auth_token;
        }
        else {
            delete this.releaseObj.tool_auth.auth_password;
            delete this.releaseObj.tool_auth.auth_username;
        }
        this.postValidateRelease();
    };
    ReleaseComponent.prototype.onSave = function (event) {
        this.postRelease();
        this.getRelease();
        this.onCancel();
        event.preventDefault();
    };
    ReleaseComponent.prototype.confirmDelete = function (release) {
        this.viewObj = release;
    };
    ReleaseComponent.prototype.onDelete = function (release) {
        this.deleteRelease(release);
    };
    ReleaseComponent.prototype.onView = function (release) {
        this.viewObj = release;
    };
    ReleaseComponent.prototype.onEditSave = function (editReleaseForm) {
        // this.editObj = {
        //     tool_instance_name:editReleaseForm.tool_instance_name,
        //     tool_name:editReleaseForm.tool_name,
        //     tool_version:editReleaseForm.tool_version,
        //     proxy_required:editReleaseForm.proxy_required,
        //     proxy_type:editReleaseForm.proxy_type,
        //     proxy_reference:editReleaseForm.proxy_reference,
        //     tool_auth:{
        //         auth_type:editReleaseForm.auth_type,
        //         auth_username:editReleaseForm.auth_username,
        //         auth_password:editReleaseForm.auth_password,
        //         auth_token:editReleaseForm.auth_token
        //     }
        // }    
        // this.releaseArray.splice(this.index,1,this.editObj);
        // console.log(this.releaseArray)
    };
    ReleaseComponent.prototype.onCancel = function () {
        this.release.tool_url = '';
        this.release.tool_instance_name = '';
        this.release.tool_name = '';
        this.release.tool_version = '';
        this.release.proxy_required = false,
            this.release.tool_auth.auth_type = '';
        this.release.tool_auth.auth_username = '';
        this.release.tool_auth.auth_password = '';
        this.release.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    ReleaseComponent.prototype.ngOnInit = function () {
        this.getRelease();
        // this.releaseArray = this.appService.release;        
        this.proxyNames = this.appService.proxyNames;
    };
    //---------api calling functions----------------------------------------------------------------------------------
    ReleaseComponent.prototype.postValidateRelease = function () {
        var _this = this;
        this.http.post(this.appService.URL + "/api/validation/release", this.releaseObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.valid = true;
                console.log('success');
                $('document').ready(function () {
                    $('#sb7').show();
                    $('#vb7').hide();
                    $('.message').show();
                });
            }
            else {
                _this.valid = false;
                $('.message').show();
                console.log('failure');
            }
        }, function (error) {
            $('.message').show();
            console.log(error);
        });
    };
    ReleaseComponent.prototype.postRelease = function () {
        this.http.post(this.appService.URL + "/api/tool", this.releaseObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted release');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReleaseComponent.prototype.getRelease = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=release").subscribe(function (res) {
            _this.releaseArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated release');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReleaseComponent.prototype.deleteRelease = function (release) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + release._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getRelease();
                console.log('successfulyl deleted release ' + release.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('releaseForm'),
        __metadata("design:type", Object)
    ], ReleaseComponent.prototype, "releaseForm", void 0);
    ReleaseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'release',
            templateUrl: './release.component.html',
            styleUrls: ['./release.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], ReleaseComponent);
    return ReleaseComponent;
}());
exports.ReleaseComponent = ReleaseComponent;
