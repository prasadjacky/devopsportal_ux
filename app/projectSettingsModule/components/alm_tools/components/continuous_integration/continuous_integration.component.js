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
        this.ContinuousIntegration = {
            tool: '',
            coverage_framework: '',
            platform_tool: '',
            build_agent_label: '',
            trigger_type: '',
            ci_email: '',
            ci_project_name: '',
            ci_project_url: ''
        };
    }
    ContinuousIntegrationComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectCiApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    ContinuousIntegrationComponent.prototype.getProjectCiApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/project_details?project_key=" + this.appService.selectedProjectKey).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.ContinuousIntegration = {
                tool: temp.project_tools.ci.tool,
                platform_tool: temp.project_tools.ci.platform_tool.tool_instance_name,
                coverage_framework: temp.project_tools.ci.coverage_framework,
                trigger_type: temp.project_tools.ci.trigger_type,
                ci_project_name: temp.project_tools.ci.ci_project_name,
                ci_project_url: temp.project_tools.ci.ci_project_url,
                build_agent_label: temp.project_tools.ci.build_agent_label,
            };
            if (res.status == 200) {
                console.log('successfully populated ci tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
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
