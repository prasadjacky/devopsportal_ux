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
var FilterChart4Component = /** @class */ (function () {
    function FilterChart4Component(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.appliedLoBFilters = Array();
        this.projectLob = this.dataService.projectLob;
        this.projects = [];
        this.isLobFilterApplied = false;
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
            { data: [8], label: 'IT Services' },
            { data: [6], label: 'Trade & Finance' },
            { data: [5], label: 'Electricals' },
            { data: [11], label: 'Others' },
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
        this.lobFilterEvent = new core_1.EventEmitter();
    }
    // events
    FilterChart4Component.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    FilterChart4Component.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    FilterChart4Component.prototype.ngOnInit = function () {
    };
    //populate applied filters on change evenet
    FilterChart4Component.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "LoB":
                this.appliedLoBFilters.push(value);
                //document.getElementById('btnLobType').style.backgroundColor = "#3498DB";
                this.isLobFilterApplied = true;
                break;
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterChart4Component.prototype.removeAppliedFilter = function (filter, value) {
        var index = 0;
        switch (filter) {
            case "LoB":
                index = this.appliedLoBFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedLoBFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                    this.dataService.appliedLobFilters = this.appliedLoBFilters;
                    this.lobFilterEvent.emit(this.appliedLoBFilters);
                }
                if (this.appliedLoBFilters.length <= 0) {
                    //document.getElementById('btnLobType').style.backgroundColor = "#DDDDDD";
                    this.isLobFilterApplied = true;
                }
                break;
        }
    };
    FilterChart4Component.prototype.clearTypeAppliedFilterList = function () {
        this.appliedLoBFilters.forEach(function (value) {
            var dynamicFilterElement = document.getElementById("dynamicFilterElementLoB" + value);
            dynamicFilterElement.checked = false;
        });
        this.appliedLoBFilters.length = 0;
        this.dataService.appliedLobFilters = this.appliedLoBFilters;
        this.lobFilterEvent.emit(this.appliedLoBFilters);
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterChart4Component.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
        this.dataService.appliedLobFilters = this.appliedLoBFilters;
        this.lobFilterEvent.emit(this.appliedLoBFilters);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterChart4Component.prototype, "lobFilterEvent", void 0);
    FilterChart4Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filterchart4',
            templateUrl: 'filterchart4.component.html',
            styleUrls: ['./filterchart4.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterChart4Component);
    return FilterChart4Component;
}());
exports.FilterChart4Component = FilterChart4Component;
