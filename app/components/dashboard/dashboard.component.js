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
var app_service_1 = require("../../services/app.service");
var filterdata_service_1 = require("../../services/filterdata.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appService, filterDataService, eRef) {
        var _this = this;
        this.appService = appService;
        this.filterDataService = filterDataService;
        this.eRef = eRef;
        this.isFilterApplied = this.filterDataService.funcIsFilterApplied();
        this.projectsCount = this.filterDataService.projectsCount;
        this.technicalDebt = this.filterDataService.technicalDebt;
        this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
        this.bugRatio = this.filterDataService.bugRatio;
        this.testCoverage = this.filterDataService.testCoverage;
        this.monthYear = "JAN '18";
        this.totalRLMReleaseCount = this.filterDataService.appReleaseCount;
        this.projects = this.filterDataService.projects;
        this.buildsResponseData = [];
        this.planningResponseData = [];
        this.isRlmApplication = false;
        this.dashboardEvent = new core_1.EventEmitter();
        this.timeFilterEvent = new core_1.EventEmitter();
        // if (this.appService.checkCredentials()) {
        //     this.subscription = this.appService.getProject().subscribe(projects => {
        //         this.projectsCount = projects.length;
        //     });
        // }        
        this.filterDataService.appReleaseCountUpdateEvent.subscribe(function (appReleaseCount) {
            _this.totalRLMReleaseCount = appReleaseCount;
        });
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.filterDataService.filterServiceProjectsLoadingEvent.subscribe(function (res) {
            _this.projects = res;
            _this.projectsCount = res.length;
            _this.technicalDebt = _this.filterDataService.technicalDebt;
            _this.buildSuccessRatio = _this.filterDataService.buildSuccessRatio;
            _this.bugRatio = _this.filterDataService.bugRatio;
            _this.testCoverage = _this.filterDataService.testCoverage;
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    DashboardComponent.prototype.updateFilterList = function (event, filterType) {
        switch (filterType) {
            case 'Type':
                this.dashboardEvent.emit(event);
                break;
            case 'Health':
                this.dashboardEvent.emit(event);
                break;
            case 'Manager':
                this.dashboardEvent.emit(event);
                break;
            case 'LoB':
                this.dashboardEvent.emit(event);
                break;
            case 'Region':
                this.dashboardEvent.emit(event);
                break;
            case 'Technology':
                this.dashboardEvent.emit(event);
                break;
            case 'Time':
                var month = event.selectedMonth;
                var year = event.selectedYear;
                this.monthYear = month.toUpperCase() + ' \'' + year.substring(year.length - 2, year.length);
                this.timeFilterEvent.emit(event);
                break;
        }
    };
    DashboardComponent.prototype.updateProjectsCount = function () {
        this.projectsCount = this.filterDataService.projectsCount;
        this.technicalDebt = this.filterDataService.technicalDebt;
        this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
        this.bugRatio = this.filterDataService.bugRatio;
        this.testCoverage = this.filterDataService.testCoverage;
    };
    DashboardComponent.prototype.updateBuildsData = function () {
        console.log('update builds', this.buildsResponseData);
        console.log(JSON.stringify(this.buildsResponseData));
        console.log('builds length', this.buildsResponseData.length);
    };
    DashboardComponent.prototype.updatePlanningData = function () {
        console.log('update planning', this.planningResponseData);
        console.log(JSON.stringify(this.planningResponseData));
        console.log('planning length', this.planningResponseData.length);
    };
    __decorate([
        core_1.Input('projectsCount'),
        __metadata("design:type", Number)
    ], DashboardComponent.prototype, "projectsCount", void 0);
    __decorate([
        core_1.Input('technicalDebt'),
        __metadata("design:type", Number)
    ], DashboardComponent.prototype, "technicalDebt", void 0);
    __decorate([
        core_1.Input('buildSuccessRatio'),
        __metadata("design:type", Number)
    ], DashboardComponent.prototype, "buildSuccessRatio", void 0);
    __decorate([
        core_1.Input('bugRatio'),
        __metadata("design:type", Number)
    ], DashboardComponent.prototype, "bugRatio", void 0);
    __decorate([
        core_1.Input('testCoverage'),
        __metadata("design:type", Number)
    ], DashboardComponent.prototype, "testCoverage", void 0);
    __decorate([
        core_1.Input('monthYear'),
        __metadata("design:type", String)
    ], DashboardComponent.prototype, "monthYear", void 0);
    __decorate([
        core_1.Input('totalRLMReleaseCount'),
        __metadata("design:type", Number)
    ], DashboardComponent.prototype, "totalRLMReleaseCount", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "dashboardEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "timeFilterEvent", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService, core_1.ElementRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
