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
var DeploymentComponent = /** @class */ (function () {
    function DeploymentComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.deployment = {
            http_proxy: '',
            tool_category: 'deployment',
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
            tool_category: 'deployment',
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
        this.deploymentArray = [];
    }
    DeploymentComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb6').show();
            $('#sb6').hide();
            $('.message').hide();
        });
    };
    DeploymentComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.deploymentForm.valid) {
            return;
        }
        this.showValidations = false;
        this.deploymentObj = {
            http_proxy: this.deployment.http_proxy,
            tool_category: this.deployment.tool_category,
            tool_url: this.deployment.tool_url,
            tool_instance_name: this.deployment.tool_instance_name,
            tool_name: this.deployment.tool_name,
            tool_version: this.deployment.tool_version,
            proxy_required: this.deployment.proxy_required,
            tool_auth: {
                auth_type: this.deployment.tool_auth.auth_type,
                auth_username: this.deployment.tool_auth.auth_username,
                auth_password: this.deployment.tool_auth.auth_password,
                auth_token: this.deployment.tool_auth.auth_token
            }
        };
        if (this.deployment.tool_auth.auth_type == 'password') {
            delete this.deploymentObj.tool_auth.auth_token;
        }
        else {
            delete this.deploymentObj.tool_auth.auth_password;
            delete this.deploymentObj.tool_auth.auth_username;
        }
        console.log(this.deploymentObj);
        this.postValidateDeployment();
    };
    DeploymentComponent.prototype.onSave = function (event) {
        this.postDeployment();
        this.getDeployment();
        this.onCancel();
        event.preventDefault();
    };
    DeploymentComponent.prototype.confirmDelete = function (deployment) {
        this.viewObj = deployment;
    };
    DeploymentComponent.prototype.onDelete = function (deployment) {
        this.deleteDeployment(deployment);
    };
    DeploymentComponent.prototype.onView = function (deployment) {
        this.viewObj = deployment;
    };
    DeploymentComponent.prototype.onEditSave = function (editDeploymentForm) {
        // this.editObj = {
        //     tool_instance_name:editDeploymentForm.tool_instance_name,
        //     tool_name:editDeploymentForm.tool_name,
        //     tool_version:editDeploymentForm.tool_version,
        //     proxy_required:editDeploymentForm.proxy_required,
        //     tool_auth:{
        //         auth_type:editDeploymentForm.auth_type,
        //         auth_username:editDeploymentForm.auth_username,
        //         auth_password:editDeploymentForm.auth_password,
        //         auth_token:editDeploymentForm.auth_token
        //     }
        // }
        // this.deploymentArray.splice(this.index,1,this.editObj);
        // console.log(this.deploymentArray)
    };
    DeploymentComponent.prototype.onCancel = function () {
        this.deployment.tool_url = '';
        this.deployment.http_proxy = '';
        this.deployment.tool_instance_name = '';
        this.deployment.tool_name = '';
        this.deployment.tool_version = '';
        this.deployment.proxy_required = false,
            this.deployment.tool_auth.auth_type = '';
        this.deployment.tool_auth.auth_username = '';
        this.deployment.tool_auth.auth_password = '';
        this.deployment.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    DeploymentComponent.prototype.ngOnInit = function () {
        this.getDeployment();
        // this.deploymentArray = this.appService.deployment;      
        this.proxyNames = this.appService.proxyNames;
    };
    //---------api calling functions----------------------------------------------------------------------------------
    DeploymentComponent.prototype.postValidateDeployment = function () {
        var _this = this;
        if (!this.deploymentObj.proxy_required)
            delete this.deploymentObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/validation/deployment", this.deploymentObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.valid = true;
                console.log('success');
                $('document').ready(function () {
                    $('#sb6').show();
                    $('#vb6').hide();
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
    DeploymentComponent.prototype.postDeployment = function () {
        this.http.post(this.appService.URL + "/api/tool", this.deploymentObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted deployment');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    DeploymentComponent.prototype.getDeployment = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=deployment").subscribe(function (res) {
            _this.deploymentArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated deployment');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    DeploymentComponent.prototype.deleteDeployment = function (deployment) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + deployment._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getDeployment();
                console.log('successfulyl deleted deployment ' + deployment.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('deploymentForm'),
        __metadata("design:type", Object)
    ], DeploymentComponent.prototype, "deploymentForm", void 0);
    DeploymentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'deployment',
            templateUrl: './deployment.component.html',
            styleUrls: ['./deployment.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], DeploymentComponent);
    return DeploymentComponent;
}());
exports.DeploymentComponent = DeploymentComponent;
