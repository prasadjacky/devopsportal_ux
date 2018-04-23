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
var FilterChart5Component = /** @class */ (function () {
    function FilterChart5Component(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.projectRegion = this.dataService.projectRegion;
        this.appliedRegionFilters = Array();
        this.projects = [];
        this.isRegionFilterApplied = false;
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
            { data: [11], label: 'Denmark' },
            { data: [8], label: 'India' },
            { data: [7], label: 'Munich' },
            { data: [4], label: 'South Africa' }
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
        this.regionFilterEvent = new core_1.EventEmitter();
    }
    // events
    FilterChart5Component.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    FilterChart5Component.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    FilterChart5Component.prototype.ngOnInit = function () {
    };
    //populate applied filters on change evenet
    FilterChart5Component.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "Region":
                this.appliedRegionFilters.push(value);
                //document.getElementById('btnRegionType').style.backgroundColor = "#3498DB";
                this.isRegionFilterApplied = true;
                break;
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterChart5Component.prototype.removeAppliedFilter = function (filter, value) {
        var index = 0;
        switch (filter) {
            case "Region":
                index = this.appliedRegionFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedRegionFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                    this.dataService.appliedRegionFilters = this.appliedRegionFilters;
                    this.regionFilterEvent.emit(this.appliedRegionFilters);
                }
                if (this.appliedRegionFilters.length <= 0) {
                    //document.getElementById('btnRegionType').style.backgroundColor = "#DDDDDD";
                    this.isRegionFilterApplied = true;
                }
                break;
        }
    };
    FilterChart5Component.prototype.clearTypeAppliedFilterList = function () {
        this.appliedRegionFilters.forEach(function (value) {
            var dynamicFilterElement = document.getElementById("dynamicFilterElementRegion" + value);
            dynamicFilterElement.checked = false;
        });
        this.appliedRegionFilters.length = 0;
        this.dataService.appliedRegionFilters = this.appliedRegionFilters;
        this.regionFilterEvent.emit(this.appliedRegionFilters);
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterChart5Component.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
        this.dataService.appliedRegionFilters = this.appliedRegionFilters;
        this.regionFilterEvent.emit(this.appliedRegionFilters);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart5Component.prototype, "regionFilterEvent", void 0);
    FilterChart5Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart5',
            templateUrl: 'filterchart5.component.html',
            styleUrls: ['./filterchart5.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart5Component);
    return FilterChart5Component;
}());
exports.FilterChart5Component = FilterChart5Component;
