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
var app_service_1 = require("../services/app.service");
var PipelineComponent = /** @class */ (function () {
    //public page: number;
    // public releases:Object = [
    // 	releaseNo = 1.4
    // ];
    function PipelineComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.thisProject = this.appService.selectedProject;
        if (sessionStorage.getItem("is_reloaded"))
            window.sessionStorage.setItem("id", this.appService.getPipeLines());
        window.sessionStorage.getItem("id");
        window.sessionStorage.setItem("key", this.appService.getNavChangeEmitter1());
        this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.versions = _this.pipelineContent.release.release_logical_name;
            _this.names = _this.pipelineContent.environments;
            _this.status = _this.pipelineContent.pipelines[0]['result'];
            _this.buildpipe = _this.pipelineContent.pipelines;
        });
        sessionStorage.setItem("is_reloaded", true);
        $(document).ready(function () {
        });
    }
    PipelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.page =1;
        this.appService.getPipeLineContent().subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.versions = _this.pipelineContent.release.release_logical_name;
            _this.names = _this.pipelineContent.environments;
            _this.status = _this.pipelineContent.pipelines[0]['result'];
            _this.buildpipe = _this.pipelineContent.pipelines;
            //   alert(this.m)
        });
    };
    PipelineComponent.prototype.onChange = function (selecteditem) {
        this.selectedValue = selecteditem;
    };
    PipelineComponent.prototype.takeId = function (value) {
        this.appService.setPipeLine(value);
    };
    PipelineComponent.prototype.takeIds = function (value, uat) {
        this.appService.setPipeLine(value);
        this.appService.getUatIndex(uat);
    };
    PipelineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './pipeline.component.html',
            styleUrls: ['./pipeline.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], PipelineComponent);
    return PipelineComponent;
}());
exports.PipelineComponent = PipelineComponent;
