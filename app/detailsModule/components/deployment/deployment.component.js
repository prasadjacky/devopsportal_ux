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
var chart08_component_1 = require("./../charts/chart08/chart08.component");
var app_service_1 = require("../../../services/app.service");
var details_service_1 = require("../../details.service");
var core_1 = require("@angular/core");
var DeploymentComponent = /** @class */ (function () {
    // projectDeploymentStats:any[]= [
    //     {
    //         environment_name: "Demo2",
    //         count: 8,
    //         latestDeployment: "6 days ago",
    //         deploymentFrequency: "18 hours"
    //     }
    // ]
    function DeploymentComponent(detailsService, appService) {
        this.detailsService = detailsService;
        this.appService = appService;
        this.deployment = {
            environment_name: '',
            latestDeployment: '',
            deploymentFrequency: ''
        };
    }
    DeploymentComponent.prototype.ngAfterViewInit = function () {
        this.endDate = new Date();
        this.endDateEl.nativeElement.valueAsDate = this.endDate;
        this.endDate.setMonth(this.endDate.getMonth() - 1);
        this.startDate = this.endDate;
        this.startDateEl.nativeElement.valueAsDate = this.startDate;
        this.applyDateRange();
    };
    DeploymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getDeployments().subscribe(function (deployment) {
            _this.deployment = deployment;
            _this.environmentSelected = _this.deployment.projectDeploymentStats[0].environment_name;
        });
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getDeployment(this.key).subscribe(function (deployment) {
            _this.deployment = deployment;
            _this.environmentSelected = _this.deployment.projectDeploymentStats[0].environment_name;
            sessionStorage.setItem("is_reloaded", true);
        });
    };
    DeploymentComponent.prototype.onSelect = function (event) {
        this.environmentSelected = event;
    };
    DeploymentComponent.prototype.onStartDateChange = function (event) {
        this.startDate = new Date(this.startDateEl.nativeElement.valueAsDate);
        this.startDate.setMonth(this.startDate.getMonth() + 1);
        this.endDate = this.startDate;
        this.endDateEl.nativeElement.valueAsDate = this.endDate;
    };
    DeploymentComponent.prototype.onEndDateChange = function (event) {
        this.endDate = new Date(this.endDateEl.nativeElement.valueAsDate);
        this.endDate.setMonth(this.endDate.getMonth() - 1);
        this.startDate = this.endDate;
        this.startDateEl.nativeElement.valueAsDate = this.startDate;
    };
    DeploymentComponent.prototype.applyDateRange = function () {
        var _this = this;
        var dateRange = {
            projectKey: this.key,
            startDate: this.startDateEl.nativeElement.valueAsDate,
            endDate: this.endDateEl.nativeElement.valueAsDate,
        };
        this.appService.getDeploymentsTrendWithDateRange(dateRange).subscribe(function (res) {
            _this.chart08Component.updateChartData(res);
        });
    };
    __decorate([
        core_1.ViewChild('startDate'),
        __metadata("design:type", core_1.ElementRef)
    ], DeploymentComponent.prototype, "startDateEl", void 0);
    __decorate([
        core_1.ViewChild('endDate'),
        __metadata("design:type", core_1.ElementRef)
    ], DeploymentComponent.prototype, "endDateEl", void 0);
    __decorate([
        core_1.ViewChild(chart08_component_1.Chart08Component),
        __metadata("design:type", chart08_component_1.Chart08Component)
    ], DeploymentComponent.prototype, "chart08Component", void 0);
    DeploymentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'deployment',
            templateUrl: 'deployment.component.html',
            styleUrls: ['./deployment.component.css']
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], DeploymentComponent);
    return DeploymentComponent;
}());
exports.DeploymentComponent = DeploymentComponent;
