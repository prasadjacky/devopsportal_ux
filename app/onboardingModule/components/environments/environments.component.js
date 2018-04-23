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
var EnvironmentsComponent = /** @class */ (function () {
    function EnvironmentsComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showValidations = false;
        this.Env = ['dev', 'prod', 'pre-prod'];
        this.Environment = {
            environment_name: '',
            environment_type: '',
            environment_sequence: '',
            environment_approver: '',
            environment_approver_name: '',
            environment_project_key: '',
            app_server: {
                server_type: 'VM',
                vm_server: {
                    server_ip: '',
                    auth_type: 'password',
                    auth_username: '',
                    auth_password: '',
                    app_server_path: ''
                },
                container_server: {
                    host_ip: '',
                    host_auth_type: 'password',
                    host_auth_username: '',
                    host_auth_password: '',
                    image_name: '',
                    container_name: '',
                    ports: ''
                },
                serverless_server: {
                    stack_name: ''
                }
            },
            database: {
                server_ip: '',
                auth_type: 'password',
                auth_username: '',
                auth_password: '',
                auth_key: '',
                db_name: '',
                db_url: '',
                db_username: '',
                db_password: ''
            }
            // ,
            // serverless:{
            //     stack_name:''
            // }
        };
        this.Environments = [];
        this.EmptyEnv = false;
    }
    EnvironmentsComponent.prototype.pushApprover = function (approver) {
        this.Environment.environment_approver = approver._id;
        this.Environment.environment_approver_name = approver.user_full_name;
        $('#searchApprover').modal('hide');
        // $('#lr').remove('#lr');
    };
    EnvironmentsComponent.prototype.onValidate = function () {
        if (this.Environments.length === 0) {
            this.EmptyEnv = true;
        }
        else {
            this.EmptyEnv = false;
        }
        return this.Environments.length;
    };
    EnvironmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Environment = this.appService.Environment;
        // this.appServerDisabled = this.appService.flags.environment.appServerDisabled;
        // this.databaseDisabled = this.appService.flags.environment.databaseDisabled;
        this.Environment.app_server.server_type = this.appService.alm.deployment.deployment_type;
        this.http.get(this.appService.URL + "/api/user")
            .subscribe(function (users) {
            _this.approversAvailable = users.json();
        });
        var that = this;
        var arr = this.Environments;
        $(document).ready(function () {
            $("#sortable").sortable({
                start: function (event, ui) {
                    ui.item.startPos = ui.item.index();
                },
                update: function (event, ui) {
                    var a = ui.item.startPos;
                    var b = ui.item.index();
                    sortArray(a, b);
                }
            });
        });
        function sortArray(a, b) {
            var c = arr[a];
            arr[a] = arr[b];
            arr[b] = c;
            console.log(arr);
            // that.Environments = arr
            console.log(that.Environments);
            for (var i = 0; i < that.Environments.length; i++) {
                that.Environments[i].environment_sequence = "" + i;
            }
            console.log(that.Environments);
        }
        // function saveArray() {
        //     for (var i = 0; i < arr.length; i++) {
        //         console.log(arr);
        //     }
        // }
    };
    EnvironmentsComponent.prototype.onCreate = function () {
        this.showValidations = true;
        this.EmptyEnv = false;
        if (!this.environmentsForm.valid)
            return;
        this.Environment.environment_sequence = "" + this.Environments.length;
        this.Environments.push(this.Environment);
        console.log(this.Environments);
        this.appService.Environments = this.Environments;
        this.showValidations = false;
        this.Environment = {
            environment_name: '',
            environment_type: '',
            environment_sequence: '0',
            environment_approver: '',
            environment_approver_name: '',
            environment_project_key: '',
            app_server: {
                server_type: this.appService.alm.deployment.deployment_type,
                vm_server: {
                    server_ip: '',
                    auth_type: 'password',
                    auth_username: '',
                    auth_password: '',
                    app_server_path: ''
                },
                container_server: {
                    host_ip: '',
                    host_auth_type: 'password',
                    host_auth_username: '',
                    host_auth_password: '',
                    image_name: '',
                    container_name: '',
                    ports: ''
                },
                serverless_server: {
                    stack_name: ''
                }
            },
            database: {
                server_ip: '',
                auth_type: 'password',
                auth_username: '',
                auth_password: '',
                auth_key: '',
                db_name: '',
                db_url: '',
                db_username: '',
                db_password: ''
            }
        };
    };
    __decorate([
        core_1.ViewChild('environmentsForm'),
        __metadata("design:type", Object)
    ], EnvironmentsComponent.prototype, "environmentsForm", void 0);
    EnvironmentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'environments',
            templateUrl: 'environments.component.html',
            styleUrls: ['./environments.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], EnvironmentsComponent);
    return EnvironmentsComponent;
}());
exports.EnvironmentsComponent = EnvironmentsComponent;
