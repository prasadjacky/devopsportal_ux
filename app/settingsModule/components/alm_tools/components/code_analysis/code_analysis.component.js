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
var CodeAnalysisComponent = /** @class */ (function () {
    function CodeAnalysisComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.ca = {
            http_proxy: '',
            tool_category: 'code_analysis',
            tool_instance_name: '',
            tool_url: '',
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
            tool_category: 'code_analysis',
            tool_instance_name: '',
            tool_name: '',
            tool_url: '',
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
        this.caArray = [];
    }
    CodeAnalysisComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb3').show();
            $('#sb3').hide();
            $('.message').hide();
        });
    };
    CodeAnalysisComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.caForm.valid) {
            return;
        }
        this.showValidations = false;
        this.caObj = {
            http_proxy: this.ca.http_proxy,
            tool_category: this.ca.tool_category,
            tool_instance_name: this.ca.tool_instance_name,
            tool_name: this.ca.tool_name,
            tool_url: this.ca.tool_url,
            tool_version: this.ca.tool_version,
            proxy_required: this.ca.proxy_required,
            tool_auth: {
                auth_type: this.ca.tool_auth.auth_type,
                auth_username: this.ca.tool_auth.auth_username,
                auth_password: this.ca.tool_auth.auth_password,
                auth_token: this.ca.tool_auth.auth_token
            }
        };
        if (this.ca.tool_auth.auth_type == 'password') {
            delete this.caObj.tool_auth.auth_token;
        }
        else {
            delete this.caObj.tool_auth.auth_password;
            delete this.caObj.tool_auth.auth_username;
        }
        console.log(this.caObj);
        this.postValidateCA();
    };
    CodeAnalysisComponent.prototype.onSave = function () {
        this.postCA();
        this.getCA();
        this.onCancel();
    };
    CodeAnalysisComponent.prototype.confirmDelete = function (ca) {
        this.viewObj = ca;
    };
    CodeAnalysisComponent.prototype.onDelete = function (ca) {
        this.deleteCA(ca);
    };
    CodeAnalysisComponent.prototype.onView = function (ca) {
        this.viewObj = ca;
    };
    CodeAnalysisComponent.prototype.onEditSave = function (editCaForm) {
        // this.editObj = {
        //     tool_instance_name:editCaForm.tool_instance_name,
        //     tool_name:editCaForm.tool_name,
        //     tool_version:editCaForm.tool_version,
        //     proxy_required:editCaForm.proxy_required,
        //     proxy_type:editCaForm.proxy_type,
        //     proxy_reference:editCaForm.proxy_reference,
        //     tool_auth:{
        //         auth_type:editCaForm.auth_type,
        //         auth_username:editCaForm.auth_username,
        //         auth_password:editCaForm.auth_password,
        //         auth_token:editCaForm.auth_token
        //     }
        // }
        // this.caArray.splice(this.index,1,this.editObj);
        // console.log(this.caArray)
    };
    CodeAnalysisComponent.prototype.onCancel = function () {
        this.ca.http_proxy = '';
        this.ca.tool_instance_name = '';
        this.ca.tool_name = '';
        this.ca.tool_version = '';
        this.ca.proxy_required = false,
            this.ca.tool_auth.auth_type = '';
        this.ca.tool_auth.auth_username = '';
        this.ca.tool_auth.auth_password = '';
        this.ca.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    CodeAnalysisComponent.prototype.ngOnInit = function () {
        this.getCA();
        this.caArray = this.appService.code_analysis;
        this.proxyNames = this.appService.proxyNames;
    };
    //---------api calling functions----------------------------------------------------------------------------------
    CodeAnalysisComponent.prototype.postValidateCA = function () {
        var _this = this;
        if (!this.caObj.proxy_required)
            delete this.caObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/validation/code_analysis", this.caObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.valid = true;
                console.log('success');
                $('document').ready(function () {
                    $('#sb3').show();
                    $('#vb3').hide();
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
    CodeAnalysisComponent.prototype.postCA = function () {
        this.http.post(this.appService.URL + "/api/tool", this.caObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted ca');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    CodeAnalysisComponent.prototype.getCA = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=code_analysis").subscribe(function (res) {
            _this.caArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated code_analysis');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    CodeAnalysisComponent.prototype.deleteCA = function (ca) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + ca._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getCA();
                console.log('successfulyl deleted ca ' + ca.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('caForm'),
        __metadata("design:type", Object)
    ], CodeAnalysisComponent.prototype, "caForm", void 0);
    CodeAnalysisComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'codeAnalysis',
            templateUrl: './code_analysis.component.html',
            styleUrls: ['./code_analysis.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], CodeAnalysisComponent);
    return CodeAnalysisComponent;
}());
exports.CodeAnalysisComponent = CodeAnalysisComponent;
