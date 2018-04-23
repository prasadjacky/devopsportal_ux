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
var PlanningComponent = /** @class */ (function () {
    function PlanningComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.tool_category = 'planning';
        this.planning = {
            http_proxy: '',
            tool_category: 'planning',
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
            tool_category: 'planning',
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
        this.planningArray = [];
    }
    PlanningComponent.prototype.addObject = function () {
        $('document').ready(function () {
            $('#vb2').show();
            $('#sb2').hide();
            $('.message').hide();
        });
    };
    PlanningComponent.prototype.onValidate = function (event) {
        this.showValidations = true;
        if (!this.planningForm.valid) {
            return;
        }
        this.showValidations = false;
        this.planningObj = {
            http_proxy: this.planning.http_proxy,
            tool_category: this.planning.tool_category,
            tool_url: this.planning.tool_url,
            tool_instance_name: this.planning.tool_instance_name,
            tool_name: this.planning.tool_name,
            tool_version: this.planning.tool_version,
            proxy_required: this.planning.proxy_required,
            tool_auth: {
                auth_type: this.planning.tool_auth.auth_type,
                auth_username: this.planning.tool_auth.auth_username,
                auth_password: this.planning.tool_auth.auth_password,
                auth_token: this.planning.tool_auth.auth_token
            }
        };
        if (this.planning.tool_auth.auth_type == 'password') {
            delete this.planningObj.tool_auth.auth_token;
        }
        else {
            delete this.planningObj.tool_auth.auth_password;
            delete this.planningObj.tool_auth.auth_username;
        }
        console.log(this.planningObj);
        this.postValidatePlanning();
    };
    PlanningComponent.prototype.onSave = function () {
        this.postPlanning();
        this.getPlanning();
        this.onCancel();
        event.preventDefault();
    };
    PlanningComponent.prototype.confirmDelete = function (planning) {
        this.viewObj = planning;
    };
    PlanningComponent.prototype.onDelete = function (planning) {
        this.deletePlanning(planning);
    };
    PlanningComponent.prototype.onView = function (planning) {
        this.viewObj = planning;
    };
    PlanningComponent.prototype.onEditSave = function (editPlanningForm) {
        // this.editObj = {
        //     tool_instance_name:editPlanningForm.tool_instance_name,
        //     tool_name:editPlanningForm.tool_name,
        //     tool_version:editPlanningForm.tool_version,
        //     proxy_required:editPlanningForm.proxy_required,
        //     proxy_type:editPlanningForm.proxy_type,
        //     proxy_reference:editPlanningForm.proxy_reference,
        //     tool_auth:{
        //         auth_type:editPlanningForm.auth_type,
        //         auth_username:editPlanningForm.auth_username,
        //         password:editPlanningForm.auth_password,
        //         auth_token:editPlanningForm.auth_token
        //     }
        // }  
        // this.planningArray.splice(this.index,1,this.editObj);
        // console.log(this.planningArray)
    };
    PlanningComponent.prototype.onCancel = function () {
        this.planning.http_proxy = '';
        this.planning.tool_url = '';
        this.planning.tool_instance_name = '';
        this.planning.tool_name = '';
        this.planning.tool_version = '';
        this.planning.proxy_required = false,
            this.planning.tool_auth.auth_type = '';
        this.planning.tool_auth.auth_username = '';
        this.planning.tool_auth.auth_password = '';
        this.planning.tool_auth.auth_token = '';
        this.showValidations = false;
        this.valid = false;
    };
    PlanningComponent.prototype.ngOnInit = function () {
        this.getPlanning();
        this.proxyNames = this.appService.proxyNames;
        // this.planningArray = this.appService.planning;
    };
    //---------api calling functions----------------------------------------------------------------------------------
    PlanningComponent.prototype.postValidatePlanning = function () {
        var _this = this;
        if (!this.planningObj.proxy_required)
            delete this.planningObj['http_proxy'];
        this.http.post(this.appService.URL + "/api/validation/planning", this.planningObj).subscribe(function (res) {
            console.log(res);
            if (res.status == 200) {
                _this.valid = true;
                console.log('success');
                $('document').ready(function () {
                    $('#sb2').show();
                    $('.message').show();
                    $('#vb2').hide();
                });
            }
            else {
                _this.valid = false;
                $('.message').show();
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
            $('.message').show();
        });
    };
    PlanningComponent.prototype.postPlanning = function () {
        this.http.post(this.appService.URL + "/api/tool", this.planningObj).subscribe(function (res) {
            if (res.status == 200) {
                console.log('successfully posted object');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    PlanningComponent.prototype.getPlanning = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/tool?tool_category=planning").subscribe(function (res) {
            _this.planningArray = JSON.parse(res['_body']);
            if (res.status == 200) {
                console.log('successfully populated planning');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    PlanningComponent.prototype.deletePlanning = function (planning) {
        var _this = this;
        this.http.delete(this.appService.URL + "/api/tool/" + planning._id).subscribe(function (res) {
            if (res.status == 200) {
                _this.getPlanning();
                console.log('successfulyl deleted planning ' + planning.tool_name);
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.ViewChild('planningForm'),
        __metadata("design:type", Object)
    ], PlanningComponent.prototype, "planningForm", void 0);
    PlanningComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'planning',
            templateUrl: './planning.component.html',
            styleUrls: ['./planning.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], PlanningComponent);
    return PlanningComponent;
}());
exports.PlanningComponent = PlanningComponent;
