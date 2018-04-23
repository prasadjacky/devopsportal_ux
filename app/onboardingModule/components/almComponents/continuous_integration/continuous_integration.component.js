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
var ContinuousIntegrationComponent = /** @class */ (function () {
    function ContinuousIntegrationComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showValidations = false;
    }
    ContinuousIntegrationComponent.prototype.onValidate = function () {
        return this.continuousintegrationForm.valid;
    };
    ContinuousIntegrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.change = false;
        this.ContinuousIntegration = this.appService.alm.ci;
        this.http.get(this.appService.URL + "/api/population/tool_instance?tool_category=ci&tool_name=Jenkins")
            .subscribe(function (res) {
            _this.ToolInstance = res.json();
        });
    };
    ContinuousIntegrationComponent.prototype.onChange = function (event) {
        this.change = true;
    };
    ContinuousIntegrationComponent.prototype.ngDoCheck = function () {
        this.ContinuousIntegration = this.appService.alm.ci;
        if (!this.change) {
            this.ContinuousIntegration['build_agent_label'] = 'agent-' + this.appService.projectInformation.project_name;
        }
    };
    __decorate([
        core_1.ViewChild('continuousintegrationForm'),
        __metadata("design:type", Object)
    ], ContinuousIntegrationComponent.prototype, "continuousintegrationForm", void 0);
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
