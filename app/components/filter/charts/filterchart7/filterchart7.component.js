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
var app_service_1 = require("../../../../services/app.service");
var filterdata_service_1 = require("../../../../services/filterdata.service");
var FilterChart7Component = /** @class */ (function () {
    function FilterChart7Component(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.selectedYear = "";
        this.selectedMonth = "";
        this.timeFilter = { selectedYear: "", selectedMonth: "" };
        this.timeFilterForAPI = { filterBy: "ENV", filterYear: "", filterMonth: 0 };
        this.monthsShort = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        this.isTechnologyFilterApplied = false;
        this.timeFilterEvent = new core_1.EventEmitter();
    }
    FilterChart7Component.prototype.ngAfterViewInit = function () {
        this.changeTypeMonthly = true;
        this.changeTypeQuarterly = false;
        var currentDate = new Date();
        this.selectedYear = currentDate.getFullYear().toString();
        this.timeFilterForAPI.filterYear = currentDate.getFullYear().toString();
        this.selectedMonth = this.monthsShort[currentDate.getMonth()];
        this.timeFilterForAPI.filterMonth = currentDate.getMonth();
        if (this.selectedYear) {
            if (this.yearEl)
                this.yearEl.nativeElement.value = this.selectedYear;
            this.timeFilter.selectedYear = this.selectedYear;
        }
        if (this.selectedMonth) {
            if (this.monthEl)
                this.monthEl.nativeElement.value = this.selectedMonth;
            this.timeFilter.selectedMonth = this.selectedMonth;
        }
        this.applyTimeFilter(this.timeFilter);
    };
    FilterChart7Component.prototype.ngOnInit = function () {
    };
    FilterChart7Component.prototype.applyTimeFilter = function (timeFilter) {
        var _this = this;
        this.dataService.appliedTimeFilter = this.timeFilter;
        this.timeFilterForAPI.filterBy = "ENV";
        this.appService.getDeploymentsTrendByEnvType(this.timeFilterForAPI).subscribe(function (deployments) {
            _this.dataService.filterServiceENVTimeFilterEvent.next(deployments);
        });
        this.timeFilterForAPI.filterBy = "STATUS";
        this.appService.getDeploymentsTrendByEnvType(this.timeFilterForAPI).subscribe(function (deployments) {
            _this.dataService.filterServiceStatusTimeFilterEvent.next(deployments);
        });
        this.timeFilterEvent.emit(timeFilter);
    };
    FilterChart7Component.prototype.onYearChange = function (event) {
        this.timeFilter.selectedYear = this.yearEl.nativeElement.value;
        this.timeFilterForAPI.filterYear = this.yearEl.nativeElement.value;
        this.applyTimeFilter(this.timeFilter);
    };
    FilterChart7Component.prototype.onMonthChange = function (event) {
        this.timeFilter.selectedMonth = this.monthEl.nativeElement.value;
        this.timeFilterForAPI.filterMonth = this.monthEl.nativeElement.selectedIndex;
        this.applyTimeFilter(this.timeFilter);
    };
    FilterChart7Component.prototype.onTimeChange = function (event) {
        if (this.timeChangeEl.nativeElement.selectedIndex == 2) {
            this.changeTypeQuarterly = false;
            //this.changeTypeMonthly = false;
            document.getElementById('monthFilterDiv').hidden = true;
        }
        else if (this.timeChangeEl.nativeElement.selectedIndex == 1) {
            this.changeTypeQuarterly = true;
            //this.changeTypeMonthly = false;
            document.getElementById('monthFilterDiv').hidden = true;
        }
        else {
            this.changeTypeQuarterly = false;
            //this.changeTypeMonthly = true;
            document.getElementById('monthFilterDiv').hidden = false;
        }
    };
    __decorate([
        core_1.ViewChild('yearFilter'),
        __metadata("design:type", core_1.ElementRef)
    ], FilterChart7Component.prototype, "yearEl", void 0);
    __decorate([
        core_1.ViewChild('monthFilter'),
        __metadata("design:type", core_1.ElementRef)
    ], FilterChart7Component.prototype, "monthEl", void 0);
    __decorate([
        core_1.ViewChild('timeChange'),
        __metadata("design:type", core_1.ElementRef)
    ], FilterChart7Component.prototype, "timeChangeEl", void 0);
    __decorate([
        core_1.ViewChild('monthFilterDiv'),
        __metadata("design:type", core_1.ElementRef)
    ], FilterChart7Component.prototype, "monthFilterDivEl", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart7Component.prototype, "timeFilterEvent", void 0);
    FilterChart7Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart7',
            templateUrl: 'filterchart7.component.html',
            styleUrls: ['./filterchart7.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart7Component);
    return FilterChart7Component;
}());
exports.FilterChart7Component = FilterChart7Component;
