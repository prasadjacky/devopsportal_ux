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
var SourceControlComponent = /** @class */ (function () {
    function SourceControlComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.sc = {
            http_proxy: '',
            tool_category: 'scm',
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
            tool_category: 'scm',
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
        this.scArray = [];
    }
    SourceControlComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb').show();
            $('#sb').hide();
            $('.message').hide();
        });
    };
    SourceControlComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.scForm.valid) {
            return;
        }
        this.showValidations = false;
        this.scObj = {
            http_proxy: this.sc.http_proxy,
            tool_category: this.sc.tool_category,
            tool_url: this.sc.tool_url,
            tool_instance_name: this.sc.tool_instance_name,
            tool_name: this.sc.tool_name,
            tool_version: this.sc.tool_version,
            proxy_required: this.sc.proxy_required,
            tool_auth: {
                auth_type: this.sc.tool_auth.auth_type,
                auth_username: this.sc.tool_auth.auth_username,
                auth_password: this.sc.tool_auth.auth_password,
                auth_token: this.sc.tool_auth.auth_token
            }
        };
        if (this.sc.tool_auth.auth_type == 'password') {
            delete this.scObj.tool_auth.auth_token;
        }
        else {
            delete this.scObj.tool_auth.auth_password;
            delete this.scObj.tool_auth.auth_username;
        }
        this.postValidateScm();
    };
    SourceControlComponent.prototype.onSave = function () {
        this.postScm();
        this.getScm();
        this.onCancel();
        event.preventDefault();
    };
    SourceControlComponent.prototype.confirmDelete = function (sc) {
        this.viewObj = sc;
    };
    SourceControlComponent.prototype.onDelete = function (sc) {
        this.deleteScm(sc);
    };
    SourceControlComponent.prototype.onView = function (sc) {
        this.viewObj = sc;
        console.log(this.viewObj.tool_url);
    };
    // onEditSave(editScForm: any){
    //     this.editObj = {
    //         tool_instance_name:editScForm.tool_instance_name,
    //         tool_name:editScForm.tool_name,
    //         tool_version:editScForm.tool_version,
    //         proxy_required:editScForm.proxy_required,
    //         proxy_type:editScForm.proxy_type,
    //         proxy_reference:editScForm.proxy_reference,
    //         tool_auth:{
    //             auth_type:editScForm.auth_type,
    //            .auth_username:editScForm.auth_username,
    //            .auth_password:editScForm.auth_password,
    //            .auth_token:editScForm.auth_token
    //         }
    //     }   
    //     this.scArray.splice(this.index,1,this.editObj);
    //     console.log(this.editObj)
    //     console.log(this.scArray)
    // }
    SourceControlComponent.prototype.onCancel = function () {
        this.sc.http_proxy = '';
        this.sc.tool_url = '';
        this.sc.tool_instance_name = '';
        this.sc.tool_name = '';
        this.sc.tool_version = '';
        this.sc.proxy_required = false,
            this.sc.tool_auth.auth_type = '';
        this.sc.tool_auth.auth_username = '';
        this.sc.tool_auth.auth_password = '';
        this.sc.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    SourceControlComponent.prototype.ngOnInit = function () {
        this.getScm();
        this.proxyNames = this.appService.proxyNames;
    };
    //---------api calling functions----------------------------------------------------------------------------------
    SourceControlComponent.prototype.postValidateScm = function () {
        var _this = this;
        if (!this.scObj.proxy_required)
            delete this.scObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/validation/scm", this.scObj).subscribe(function (res) {
            if (res.status == 200) {
                _this.valid = true;
                $('document').ready(function () {
                    $('#sb').show();
                    $('.message').show();
                    $('#vb').hide();
                });
            }
            else {
                _this.valid = false;
                $('.message').show();
            }
        }, function (error) {
            $('.message').show();
            console.log(error);
        });
    };
    SourceControlComponent.prototype.postScm = function () {
        var _this = this;
        delete this.scObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/tool", this.scObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted scm');
                _this.scArray.push(_this.scObj);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    SourceControlComponent.prototype.getScm = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=scm").subscribe(function (res) {
            _this.scArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated scm');
                console.log(_this.scArray[0]);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    SourceControlComponent.prototype.deleteScm = function (sc) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + sc._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getScm();
                console.log('successfulyl deleted sc ' + sc.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('scForm'),
        __metadata("design:type", Object)
    ], SourceControlComponent.prototype, "scForm", void 0);
    SourceControlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sourceControl',
            templateUrl: './source_control.component.html',
            styleUrls: ['./source_control.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], SourceControlComponent);
    return SourceControlComponent;
}());
exports.SourceControlComponent = SourceControlComponent;
