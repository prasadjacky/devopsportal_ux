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
var app_service_1 = require("../../../../services/app.service");
var SourceControlComponent = /** @class */ (function () {
    function SourceControlComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showValidations = false;
        /* this.SourceControl = this.appService.alm.scm;
        this.repo_name=this.appService.alm.scm.repo_name;
        console.log("repo_name");
        console.log(this.repo_name); */
    }
    SourceControlComponent.prototype.onValidate = function () {
        return this.sourceControlForm.valid;
    };
    SourceControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.change = false;
        this.SourceControl = this.appService.alm.scm;
        this.http.get(this.appService.URL + "/api/population/tool_instance?tool_category=scm&tool_name=Bitbucket")
            .subscribe(function (res) {
            _this.ToolInstance = res.json();
        });
    };
    SourceControlComponent.prototype.onChange = function (event) {
        this.change = true;
    };
    SourceControlComponent.prototype.ngDoCheck = function () {
        this.SourceControl = this.appService.alm.scm;
        if (!this.change) {
            this.SourceControl['repo_name'] = this.appService.projectInformation.project_name + '-repo';
        }
    };
    __decorate([
        core_1.ViewChild('sourceControlForm'),
        __metadata("design:type", Object)
    ], SourceControlComponent.prototype, "sourceControlForm", void 0);
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
