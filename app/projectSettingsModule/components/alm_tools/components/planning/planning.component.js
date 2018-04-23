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
        this.enabled = false;
        this.Planning = {
            platform_tool: '',
            tool: '',
            workflow_type: '',
            planning_project_url: ''
        };
    }
    PlanningComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectPlanningApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    PlanningComponent.prototype.getProjectPlanningApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/project_details?project_key=" + this.appService.selectedProjectKey).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.Planning = {
                platform_tool: temp.project_tools.planning.platform_tool.tool_instance_name,
                workflow_type: temp.project_tools.planning.workflow_type,
                tool: temp.project_tools.planning.tool,
                planning_project_url: temp.project_tools.planning.planning_project_url,
            };
            if (res.status == 200) {
                console.log('successfully populated planning tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
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
