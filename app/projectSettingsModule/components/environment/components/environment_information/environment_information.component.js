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
var EnvironmentInformationComponent = /** @class */ (function () {
    function EnvironmentInformationComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.environment = {
            environment_name: '',
            environment_type: '',
            environment_sequence: '',
            environment_approver: '',
            app_server: {
                server_type: '',
                vm_server: {
                    server_ip: '',
                    auth_type: '',
                    auth_username: '',
                    auth_password: '',
                    app_server_path: ''
                },
                container_server: {
                    host_ip: '',
                    host_auth_type: '',
                    host_auth_username: '',
                    host_auth_password: '',
                    image_name: '',
                    container_name: '',
                    ports: ''
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
        this.Environments = [];
    }
    EnvironmentInformationComponent.prototype.onSelect = function (event) {
        for (var i = 0; i < this.Environments.length; i++) {
            if (event == this.Environments[i]['environment_name']) {
                this.environment = this.Environments[i];
            }
        }
    };
    EnvironmentInformationComponent.prototype.ngOnInit = function () {
        this.key = this.appService.selectedProjectKey;
        this.getEnvironmentsApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    EnvironmentInformationComponent.prototype.getEnvironmentsApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/project_environments/?project_key=" + this.key).subscribe(function (res) {
            if (res['_body'] != null) {
                _this.Environments = JSON.parse(res['_body']);
                if (_this.Environments.length == 1) {
                    _this.environment = _this.Environments[0];
                }
            }
            if (res.status == 200) {
                console.log('successfully populated project environment');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    EnvironmentInformationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'environment_information',
            templateUrl: 'environment_information.component.html',
            styleUrls: ['./environment_information.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], EnvironmentInformationComponent);
    return EnvironmentInformationComponent;
}());
exports.EnvironmentInformationComponent = EnvironmentInformationComponent;
