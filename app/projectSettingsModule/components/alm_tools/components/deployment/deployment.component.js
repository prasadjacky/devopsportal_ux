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
        this.Deployment = {
            application_name: '',
            deployment_type: '',
            tool: '',
            configured: false,
            deployment_environments: []
        };
        this.Database = {
            tool_version: '',
            tool: '',
            configured: false
        };
        this.AppServer = {
            tool_version: '',
            tool: '',
            configured: false
        };
    }
    DeploymentComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectCiApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    DeploymentComponent.prototype.getProjectCiApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/project/" + this._id).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.Deployment = {
                tool: temp.project_tools.deployment.tool,
                application_name: temp.project_tools.deployment.application_name,
                deployment_type: temp.project_tools.deployment.deployment_type,
                configured: temp.project_tools.deployment.configured,
                deployment_environments: temp.project_tools.deployment.deployment_environments,
            };
            _this.Database = {
                tool: temp.project_tools.database.tool,
                tool_version: temp.project_tools.database.tool_version,
                configured: temp.project_tools.database.configured,
            };
            _this.AppServer = {
                tool: temp.project_tools.app_server.tool,
                tool_version: temp.project_tools.app_server.tool_version,
                configured: temp.project_tools.app_server.configured,
            };
            if (res.status == 200) {
                console.log('successfully populated deployment tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
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
