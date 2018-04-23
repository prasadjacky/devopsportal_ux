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
var FilterChart3Component = /** @class */ (function () {
    function FilterChart3Component(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.projectManagers = this.dataService.projectManagers;
        this.appliedManagerFilters = Array();
        this.projects = [];
        this.isManagerFilterApplied = false;
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
            { data: [9], label: 'Shashank Gupta' },
            { data: [5], label: 'Chirag Sane' },
            { data: [4], label: 'Prasad Amberkar' },
            { data: [12], label: 'Others' },
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
        this.managerFilterEvent = new core_1.EventEmitter();
    }
    // events
    FilterChart3Component.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    FilterChart3Component.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    FilterChart3Component.prototype.ngOnInit = function () {
    };
    //populate applied filters on change evenet
    FilterChart3Component.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "Manager":
                this.appliedManagerFilters.push(value);
                //document.getElementById('btnManagerType').style.backgroundColor = "#3498DB";
                this.isManagerFilterApplied = true;
                break;
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterChart3Component.prototype.removeAppliedFilter = function (filter, value) {
        var index = 0;
        switch (filter) {
            case "Manager":
                index = this.appliedManagerFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedManagerFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                    this.dataService.appliedManagerFilters = this.appliedManagerFilters;
                    this.managerFilterEvent.emit(this.appliedManagerFilters);
                }
                if (this.appliedManagerFilters.length <= 0) {
                    //document.getElementById('btnManagerType').style.backgroundColor="#DDDDDD";
                    this.isManagerFilterApplied = true;
                }
                break;
        }
    };
    FilterChart3Component.prototype.clearTypeAppliedFilterList = function () {
        this.appliedManagerFilters.forEach(function (value) {
            var dynamicFilterElement = document.getElementById("dynamicFilterElementManager" + value);
            dynamicFilterElement.checked = false;
        });
        this.appliedManagerFilters.length = 0;
        this.dataService.appliedManagerFilters = this.appliedManagerFilters;
        this.managerFilterEvent.emit(this.appliedManagerFilters);
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterChart3Component.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
        this.dataService.appliedManagerFilters = this.appliedManagerFilters;
        this.managerFilterEvent.emit(this.appliedManagerFilters);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart3Component.prototype, "managerFilterEvent", void 0);
    FilterChart3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart3',
            templateUrl: 'filterchart3.component.html',
            styleUrls: ['./filterchart3.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart3Component);
    return FilterChart3Component;
}());
exports.FilterChart3Component = FilterChart3Component;
