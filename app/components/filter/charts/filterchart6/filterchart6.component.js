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
var FilterChart6Component = /** @class */ (function () {
    function FilterChart6Component(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.projectTechnology = this.dataService.projectTechnology;
        this.appliedTechnologyFilters = Array();
        this.projects = [];
        this.isTechnologyFilterApplied = false;
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
            { data: [6], label: 'Abinitio' },
            { data: [3], label: 'MongoDB' },
            { data: [3], label: 'IIS' },
            { data: [18], label: 'Others' }
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
        this.technologyFilterEvent = new core_1.EventEmitter();
    }
    // events
    FilterChart6Component.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    FilterChart6Component.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    FilterChart6Component.prototype.ngOnInit = function () {
    };
    //populate applied filters on change evenet
    FilterChart6Component.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "Technology":
                this.appliedTechnologyFilters.push(value);
                //document.getElementById('btnTechnologyType').style.backgroundColor = "#3498DB";
                this.isTechnologyFilterApplied = true;
                break;
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterChart6Component.prototype.removeAppliedFilter = function (filter, value) {
        var index = 0;
        switch (filter) {
            case "Technology":
                index = this.appliedTechnologyFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedTechnologyFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                    this.dataService.appliedTechnologyFilters = this.appliedTechnologyFilters;
                    this.technologyFilterEvent.emit(this.technologyFilterEvent);
                }
                if (this.appliedTechnologyFilters.length <= 0) {
                    //document.getElementById('btnTechnologyType').style.backgroundColor = "#DDDDDD";
                    this.isTechnologyFilterApplied = true;
                }
                break;
        }
    };
    FilterChart6Component.prototype.clearTypeAppliedFilterList = function () {
        this.appliedTechnologyFilters.forEach(function (value) {
            var dynamicFilterElement = document.getElementById("dynamicFilterElementTechnology" + value);
            dynamicFilterElement.checked = false;
        });
        this.appliedTechnologyFilters.length = 0;
        this.dataService.appliedTechnologyFilters = this.appliedTechnologyFilters;
        this.technologyFilterEvent.emit(this.technologyFilterEvent);
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterChart6Component.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
        this.dataService.appliedTechnologyFilters = this.appliedTechnologyFilters;
        this.technologyFilterEvent.emit(this.technologyFilterEvent);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart6Component.prototype, "technologyFilterEvent", void 0);
    FilterChart6Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart6',
            templateUrl: 'filterchart6.component.html',
            styleUrls: ['./filterchart6.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart6Component);
    return FilterChart6Component;
}());
exports.FilterChart6Component = FilterChart6Component;
