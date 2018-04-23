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
var FilterChart2Component = /** @class */ (function () {
    function FilterChart2Component(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.projectHealth = this.dataService.projectHealth;
        this.appliedHealthFilters = Array();
        this.isHealthFilterApplied = false;
        this.projects = [];
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
            { data: [14], label: 'Stable' },
            { data: [5], label: 'Warning' },
            { data: [11], label: 'At Risk' }
        ];
        this.filterchart1Colors = [
            { backgroundColor: ['#5CB85C'] },
            { backgroundColor: ['#F0AD4E'] },
            { backgroundColor: ['#D9534F'] },
        ];
        this.healthFilterEvent = new core_1.EventEmitter();
    }
    // events
    FilterChart2Component.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    FilterChart2Component.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    FilterChart2Component.prototype.ngOnInit = function () {
    };
    //populate applied filters on change evenet
    FilterChart2Component.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "Health":
                this.appliedHealthFilters.push(value);
                //document.getElementById('btnHealthType').style.backgroundColor = "#3498DB";
                this.isHealthFilterApplied = true;
                break;
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterChart2Component.prototype.removeAppliedFilter = function (filter, value) {
        var index = 0;
        switch (filter) {
            case "Health":
                index = this.appliedHealthFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedHealthFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                    this.dataService.appliedHealthFilters = this.appliedHealthFilters;
                    this.healthFilterEvent.emit(this.appliedHealthFilters);
                }
                if (this.appliedHealthFilters.length <= 0) {
                    //document.getElementById('btnHealthType').style.backgroundColor = "#DDDDDD";
                    this.isHealthFilterApplied = true;
                }
                break;
        }
    };
    FilterChart2Component.prototype.clearTypeAppliedFilterList = function () {
        this.appliedHealthFilters.forEach(function (value) {
            var dynamicFilterElement = document.getElementById("dynamicFilterElementHealth" + value);
            dynamicFilterElement.checked = false;
        });
        this.appliedHealthFilters.length = 0;
        this.dataService.appliedHealthFilters = this.appliedHealthFilters;
        this.healthFilterEvent.emit(this.appliedHealthFilters);
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterChart2Component.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
        this.dataService.appliedHealthFilters = this.appliedHealthFilters;
        this.healthFilterEvent.emit(this.appliedHealthFilters);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart2Component.prototype, "healthFilterEvent", void 0);
    FilterChart2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart2',
            templateUrl: 'filterchart2.component.html',
            styleUrls: ['./filterchart2.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart2Component);
    return FilterChart2Component;
}());
exports.FilterChart2Component = FilterChart2Component;
