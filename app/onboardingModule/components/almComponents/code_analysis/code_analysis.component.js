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
var CodeAnalysisComponent = /** @class */ (function () {
    function CodeAnalysisComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showValidations = false;
        this.disabled = false;
        this.disabledCC = false;
    }
    CodeAnalysisComponent.prototype.toggleCheck = function () {
        this.CodeAnalysis['configured'] = !this.disabled;
    };
    CodeAnalysisComponent.prototype.toggleCheckCC = function () {
        this.CodeAnalysis['coverage_framework_configured'] = this.disabledCC;
    };
    CodeAnalysisComponent.prototype.onValidate = function () {
        if (this.disabled) {
            return this.disabled;
        }
        else {
            return this.codeAnalysisForm.valid;
        }
    };
    CodeAnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CodeAnalysis = this.appService.alm.code_analysis;
        this.http.get(this.appService.URL + "/api/population/tool_instance?tool_category=code_analysis&tool_name=SonarQube")
            .subscribe(function (res) {
            _this.ToolInstance = res.json();
        });
    };
    CodeAnalysisComponent.prototype.ngDoCheck = function () {
        this.CodeAnalysis = this.appService.alm.code_analysis;
    };
    __decorate([
        core_1.ViewChild('codeAnalysisForm'),
        __metadata("design:type", Object)
    ], CodeAnalysisComponent.prototype, "codeAnalysisForm", void 0);
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
