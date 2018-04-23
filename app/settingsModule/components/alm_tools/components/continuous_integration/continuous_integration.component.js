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
var ContinuousIntegrationComponent = /** @class */ (function () {
    function ContinuousIntegrationComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.ci = {
            tool_url: '',
            http_proxy: '',
            tool_category: 'ci',
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
            tool_url: '',
            http_proxy: '',
            tool_category: 'ci',
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
        this.ciArray = [];
    }
    ContinuousIntegrationComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb5').show();
            $('#sb5').hide();
            $('.message').hide();
        });
    };
    ContinuousIntegrationComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.ciForm.valid) {
            return;
        }
        this.showValidations = false;
        this.ciObj = {
            http_proxy: this.ci.http_proxy,
            tool_category: this.ci.tool_category,
            tool_url: this.ci.tool_url,
            tool_instance_name: this.ci.tool_instance_name,
            tool_name: this.ci.tool_name,
            tool_version: this.ci.tool_version,
            proxy_required: this.ci.proxy_required,
            tool_auth: {
                auth_type: this.ci.tool_auth.auth_type,
                auth_username: this.ci.tool_auth.auth_username,
                auth_password: this.ci.tool_auth.auth_password,
                auth_token: this.ci.tool_auth.auth_token
            }
        };
        if (this.ci.tool_auth.auth_type == 'password') {
            delete this.ciObj.tool_auth.auth_token;
        }
        else {
            delete this.ciObj.tool_auth.auth_password;
            delete this.ciObj.tool_auth.auth_username;
        }
        this.postValidateCI();
    };
    ContinuousIntegrationComponent.prototype.onSave = function (event) {
        this.postCI();
        this.getCI();
        this.onCancel();
        event.preventDefault();
    };
    ContinuousIntegrationComponent.prototype.confirmDelete = function (ci) {
        this.viewObj = ci;
    };
    ContinuousIntegrationComponent.prototype.onDelete = function (ci) {
        this.deleteCI(ci);
    };
    ContinuousIntegrationComponent.prototype.onView = function (ci) {
        this.viewObj = ci;
    };
    ContinuousIntegrationComponent.prototype.onEditSave = function (editCiForm) {
        // this.editObj = {
        //     tool_instance_name:editCiForm.tool_instance_name,
        //     tool_name:editCiForm.tool_name,
        //     tool_version:editCiForm.tool_version,
        //     proxy_required:editCiForm.proxy_required,
        //     tool_auth:{
        //         auth_type:editCiForm.auth_type,
        //         auth_username:editCiForm.auth_username,
        //         auth_password:editCiForm.auth_password,
        //         auth_token:editCiForm.auth_token
        //     }
        // }
        // this.ciArray.splice(this.index,1,this.editObj);
        // console.log(this.ciArray)
    };
    ContinuousIntegrationComponent.prototype.onCancel = function () {
        this.ci.http_proxy = '';
        this.ci.tool_url = '';
        this.ci.tool_instance_name = '';
        this.ci.tool_name = '';
        this.ci.tool_version = '';
        this.ci.proxy_required = false,
            this.ci.tool_auth.auth_type = '';
        this.ci.tool_auth.auth_username = '';
        this.ci.tool_auth.auth_password = '';
        this.ci.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    ContinuousIntegrationComponent.prototype.ngOnInit = function () {
        this.getCI();
        // this.ciArray = this.appService.continuous_integration;      
        this.proxyNames = this.appService.proxyNames;
    };
    //---------api calling functions----------------------------------------------------------------------------------
    ContinuousIntegrationComponent.prototype.postValidateCI = function () {
        var _this = this;
        if (!this.ciObj.proxy_required)
            delete this.ciObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/validation/ci", this.ciObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.valid = true;
                console.log('success');
                $('document').ready(function () {
                    $('#sb5').show();
                    $('#vb5').hide();
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
    ContinuousIntegrationComponent.prototype.postCI = function () {
        this.http.post(this.appService.URL + "/api/tool", this.ciObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted ci');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ContinuousIntegrationComponent.prototype.getCI = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=ci").subscribe(function (res) {
            _this.ciArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated ci');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    ContinuousIntegrationComponent.prototype.deleteCI = function (ci) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + ci._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getCI();
                console.log('successfulyl deleted ci ' + ci.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('ciForm'),
        __metadata("design:type", Object)
    ], ContinuousIntegrationComponent.prototype, "ciForm", void 0);
    ContinuousIntegrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'continuousIntegration',
            templateUrl: './continuous_integration.component.html',
            styleUrls: ['./continuous_integration.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], ContinuousIntegrationComponent);
    return ContinuousIntegrationComponent;
}());
exports.ContinuousIntegrationComponent = ContinuousIntegrationComponent;
