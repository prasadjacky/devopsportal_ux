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
        this.SourceControl = {
            platform_tool: '',
            repo_name: '',
            tool: '',
            repo_url: '',
            scm_project_url: ''
        };
    }
    SourceControlComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectScmApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    SourceControlComponent.prototype.getProjectScmApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/project_details?project_key=" + this.appService.selectedProjectKey).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.SourceControl = {
                platform_tool: temp.project_tools.scm.platform_tool.tool_instance_name,
                repo_name: temp.project_tools.scm.repo_name,
                tool: temp.project_tools.scm.tool,
                repo_url: temp.project_tools.scm.repo_url,
                scm_project_url: temp.project_tools.scm.scm_project_url
            };
            if (res.status == 200) {
                console.log('successfully populated scm tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
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
