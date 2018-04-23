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
var filterdata_service_1 = require("./../../../../services/filterdata.service");
var core_1 = require("@angular/core");
var AppReleaseChartComponent = /** @class */ (function () {
    function AppReleaseChartComponent(filterDataService) {
        this.filterDataService = filterDataService;
        this.versionChartLabels = ['Health', 'Q2'];
        this.versionChartType = 'horizontalBar';
        this.versionChartLegend = false;
        this.versionChartOptions = {
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 0
                }
            },
            tooltips: {
                bodySpacing: 0,
                xPadding: 0,
                yPadding: 0,
                bodyFontSize: 10,
                titleFontFamily: 10, titleMarginBottom: 0,
                footerMarginTop: 0
            },
            legend: {
                position: 'bottom'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        stacked: true,
                        display: false,
                        barThickness: 15,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true,
                            fontSize: 10
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        display: false,
                        position: "left",
                        scaleLabel: {
                            display: false,
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true,
                            fontSize: 10
                        }
                    }
                ]
            }
        };
        this.chartLabel = [];
        this.chartData = [];
        this.versionChartData = [{ data: [14], label: 'Stable' }, { data: [5], label: 'Warning' }, { data: [11], label: 'At risk' }];
        this.versionChartColors = [
            {
                backgroundColor: "#27ae60",
            }, {
                backgroundColor: "#e67e22",
            },
            {
                backgroundColor: "#e74c3c",
            }
        ];
        // this.filterDataService.filterServiceProjectsFilterEvent.subscribe((res) => {
        //   this.versionChartData = [];
        //   this.versionChartData.push({data:[this.filterDataService.stableProjectCount],label:'Stable'});
        //   this.versionChartData.push({data:[this.filterDataService.warningProjectCount],label:'Warning'});
        //   this.versionChartData.push({data:[this.filterDataService.atRiskProjectCount],label:'At risk'});
        //   console.log(this.versionChartData);
        // });
    }
    AppReleaseChartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input('versionChartData'),
        __metadata("design:type", Array)
    ], AppReleaseChartComponent.prototype, "versionChartData", void 0);
    AppReleaseChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'appReleaseChart',
            templateUrl: 'appReleaseChart.component.html'
        }),
        __metadata("design:paramtypes", [filterdata_service_1.FilterDataService])
    ], AppReleaseChartComponent);
    return AppReleaseChartComponent;
}());
exports.AppReleaseChartComponent = AppReleaseChartComponent;
