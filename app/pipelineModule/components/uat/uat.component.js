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
var UatComponent = /** @class */ (function () {
    function UatComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.summary = {
            "Type": ''
        };
        this.thisProject = this.appService.selectedProject;
        this.appService.getPipeLineContent().subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.names = _this.pipelineContent.environments;
            _this.buildpipe = _this.pipelineContent.pipelines;
            _this.pipelineId = _this.appService.getPipeLine();
        });
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
        sessionStorage.setItem("is_reloaded", true);
        this.clicked(this.indexed);
        this.clicks(this.indexed1);
        this.uatindex = this.appService.setUatIndex();
    }
    UatComponent.prototype.clicked = function (value) {
        this.indexed = value;
        this.uatindex = null;
    };
    UatComponent.prototype.clicks = function (value) {
        this.indexed1 = value;
        if (this.uatindex == value) {
            return true;
        }
        else if (this.indexed == value) {
            this.uatindex = null;
            return true;
        }
    };
    UatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'uat',
            templateUrl: 'uat.component.html',
            styleUrls: ['./uat.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], UatComponent);
    return UatComponent;
}());
exports.UatComponent = UatComponent;
