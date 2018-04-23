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
        this.enabled = false;
        this.CodeAnalysis = {
            platform_tool: '',
            tool: '',
            coverage_framework: '',
            code_analysis_project_url: ''
        };
    }
    CodeAnalysisComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectCaApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    CodeAnalysisComponent.prototype.getProjectCaApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/population/project_details?project_key=" + this.appService.selectedProjectKey).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.CodeAnalysis = {
                tool: temp.project_tools.code_analysis.tool,
                platform_tool: temp.project_tools.code_analysis.platform_tool.tool_instance_name,
                coverage_framework: temp.project_tools.code_analysis.coverage_framework,
                code_analysis_project_url: temp.project_tools.code_analysis.code_analysis_project_url,
            };
            if (res.status == 200) {
                console.log('successfully populated code_analysis tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
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
