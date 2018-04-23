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
var FilterChart1Component = /** @class */ (function () {
    function FilterChart1Component(appService, dataService) {
        var _this = this;
        this.appService = appService;
        this.dataService = dataService;
        this.barChartOptions = {
            plugins: {
                datalabels: {
                    color: 'white'
                }
            },
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        stacked: true,
                        scaleLabel: { fontSize: 10 },
                        barPercentage: 0.5
                    }],
                yAxes: [{
                        display: false,
                        stacked: true,
                        barPercentage: 0.5
                    }]
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [16], label: 'Development' },
            { data: [14], label: 'Maintenance' }
        ];
        this.filterchart1Colors = [
            { backgroundColor: ['#2196F3'] },
            { backgroundColor: ['#37a0f4'] },
            { backgroundColor: ['#4dabf5'] },
            { backgroundColor: ['#63b5f6'] },
            { backgroundColor: ['#79c0f7'] },
            { backgroundColor: ['#90CAF9'] },
            { backgroundColor: ['#a6d5fa'] },
            { backgroundColor: ['#bcdffb'] }
        ];
        this.projectTypes = Array();
        this.appliedTypeFilters = Array();
        this.projects = [];
        this.isFilterApplied = false;
        this.isTypeFilterApplied = this.dataService.isTypeFilterApplied;
        this.typeFilterEvent = new core_1.EventEmitter();
        this.dataService.filterServiceProjectCountEvent.subscribe(function (res) {
            _this.barChartData = [
                { data: [_this.dataService.devProjectCount], label: 'Development' },
                { data: [_this.dataService.mainProjectCount], label: 'Maintenance' }
            ];
        });
    }
    // events
    FilterChart1Component.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    FilterChart1Component.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    FilterChart1Component.prototype.ngOnInit = function () {
        this.projectTypes = this.dataService.projectTypes;
    };
    //populate applied filters on change evenet
    FilterChart1Component.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "Type":
                this.appliedTypeFilters.push(value);
                //document.getElementById('btnFilterType').style.backgroundColor = "#3498DB";
                this.isTypeFilterApplied = true;
                break;
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterChart1Component.prototype.removeAppliedFilter = function (filter, value) {
        console.log(filter, value);
        var index = 0;
        switch (filter) {
            case "Type":
                index = this.appliedTypeFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedTypeFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                    this.dataService.appliedTypeFilters = this.appliedTypeFilters;
                    this.typeFilterEvent.emit(this.appliedTypeFilters);
                }
                if (this.appliedTypeFilters.length <= 0) {
                    //document.getElementById('btnFilterType').style.backgroundColor = "#DDDDDD";
                    this.isTypeFilterApplied = false;
                }
                break;
        }
    };
    FilterChart1Component.prototype.clearTypeAppliedFilterList = function () {
        this.appliedTypeFilters.forEach(function (value) {
            var dynamicFilterElement = document.getElementById("dynamicFilterElementType" + value);
            dynamicFilterElement.checked = false;
        });
        this.appliedTypeFilters.length = 0;
        this.dataService.appliedTypeFilters = this.appliedTypeFilters;
        this.typeFilterEvent.emit(this.appliedTypeFilters);
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterChart1Component.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
        this.dataService.appliedTypeFilters = this.appliedTypeFilters;
        this.typeFilterEvent.emit(this.appliedTypeFilters);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart1Component.prototype, "typeFilterEvent", void 0);
    FilterChart1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart1',
            templateUrl: 'filterchart1.component.html',
            styleUrls: ['./filterchart1.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart1Component);
    return FilterChart1Component;
}());
exports.FilterChart1Component = FilterChart1Component;
