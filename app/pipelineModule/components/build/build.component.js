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
var app_service_1 = require("../../../services/app.service");
var BuildComponent = /** @class */ (function () {
    function BuildComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.chart01Labels = ['Success', 'Failure'];
        this.chart01Data = [68, 0];
        this.chart01Type = 'doughnut';
        this.chart01Options = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            title: {
                fontSize: 13,
                display: false,
                text: 'SUCCESS AND FAILURE',
                fontFamily: 'Metropolis,"Avenir Next","Helvetica Neue",Arial,sans-serif',
                fontStyle: 'normal',
                fontWeight: 600
            }
        };
        this.chart01Colors = [{ backgroundColor: ['#038A24', '#FA3C3C'] }];
        this.thisProject = this.appService.selectedProject;
        this.appService.getPipeLineContent().subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.names = _this.pipelineContent.environments;
            _this.buildpipe = _this.pipelineContent.pipelines;
            _this.names = _this.pipelineContent.environments;
            _this.pipelineId = _this.appService.getPipeLine();
        });
        //      this.appService.getPipelineBuild().subscribe(pipelineBuild =>{ 
        // 		  this.pipelinebuild = pipelineBuild ;	
        //           this.chart01Data = [this.pipelinebuild.pipelineTest.build_test_passed,this.pipelinebuild.pipelineTest.build_test_failed]
        // })
        this.chart01Data = [68, 0];
        if (sessionStorage.getItem("is_reloaded"))
            window.sessionStorage.setItem("id", this.appService.getPipeLines());
        window.sessionStorage.getItem("id");
        window.sessionStorage.setItem("key", this.appService.getNavChangeEmitter1());
        this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.names = _this.pipelineContent.environments;
            _this.buildpipe = _this.pipelineContent.pipelines;
            _this.pipelineId = window.sessionStorage.getItem("id");
        });
        this.appService.getPipelineBuilds(window.sessionStorage.getItem("id")).subscribe(function (pipelineBuild) {
            _this.pipelinebuild = pipelineBuild;
            _this.chart01Data = [_this.pipelinebuild.pipelineTest.build_test_passed, _this.pipelinebuild.pipelineTest.build_test_failed];
        });
        sessionStorage.setItem("is_reloaded", true);
    }
    BuildComponent.prototype.uat = function (value) {
        this.appService.getUatIndex(value);
    };
    BuildComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'build',
            templateUrl: 'build.component.html',
            styleUrls: ['./build.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], BuildComponent);
    return BuildComponent;
}());
exports.BuildComponent = BuildComponent;
