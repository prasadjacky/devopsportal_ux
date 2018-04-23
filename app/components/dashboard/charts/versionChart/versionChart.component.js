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
var VersionChartComponent = /** @class */ (function () {
    function VersionChartComponent(filterDataService) {
        this.filterDataService = filterDataService;
        this.versionChartLabels = ['Stable', 'Warning', 'At Risk'];
        this.versionChartType = 'horizontalBar';
        this.versionChartLegend = false;
        this.versionChartOptions = {
            plugins: {
                datalabels: {
                    color: 'white',
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > 0;
                    },
                    // formatter: function (value, context) {
                    //   // var dataset = context.dataset;
                    //   // var count = dataset.data.length;
                    //   // var value = dataset.data[context.dataIndex];
                    //   var label = context.dataset.label;
                    //   //return label + ' : ' + value;
                    //   //return context.dataIndex + ': ' + Math.round(value * 100) + '%';
                    //   //console.log(context)
                    //   return value;
                    // },
                    font: {
                        size: 16
                    }
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 0
                }
            },
            tooltips: {
                //enabled: false,
                bodySpacing: 0,
                xPadding: 0,
                yPadding: 0,
                bodyFontSize: 12,
                //titleFontFamily: 10,
                titleMarginBottom: 0,
                footerMarginTop: 0
            },
            legend: {
                position: 'bottom'
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                        stacked: true,
                        display: false,
                        barThickness: 10,
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
        this.barChartOptions = {
            plugins: {
                datalabels: {
                    color: 'white',
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > 0;
                    },
                }
            },
            tooltips: {
                multiTooltipTemplate: "<%= value %>",
            },
            legend: {
                display: false,
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    bottom: 0
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
        // public barChartData: {
        //   labels: ["2014"],
        //   datasets: [{
        //     data: [727],
        //     backgroundColor: "rgba(63,103,126,1)",
        //     hoverBackgroundColor: "rgba(50,90,100,1)"
        //   },
        //     {
        //       data: [72],
        //       backgroundColor: "rgba(63,103,126,1)",
        //       hoverBackgroundColor: "rgba(50,90,100,1)"
        //     },
        //     {
        //       data: [7],
        //       backgroundColor: "rgba(63,103,126,1)",
        //       hoverBackgroundColor: "rgba(50,90,100,1)"
        //     }]
        // }
        this.filterchart1Colors = [
            { backgroundColor: ['#5CB85C'] },
            { backgroundColor: ['#F0AD4E'] },
            { backgroundColor: ['#D9534F'] },
        ];
        // this.filterDataService.filterServiceProjectsFilterEvent.subscribe((res) => {
        //   this.barChartData = [];
        //   this.barChartData.push({ data: [this.filterDataService.stableProjectCount], label: 'Stable' });
        //   this.barChartData.push({ data: [this.filterDataService.warningProjectCount], label: 'Warning' });
        //   this.barChartData.push({ data: [this.filterDataService.atRiskProjectCount], label: 'At risk' });
        //   console.log(this.versionChartData);
        // });
    }
    VersionChartComponent.prototype.ngOnInit = function () {
    };
    // events
    VersionChartComponent.prototype.chartClicked = function (e) {
        //console.log(e);
    };
    VersionChartComponent.prototype.chartHovered = function (e) {
        //console.log(e);
    };
    __decorate([
        core_1.Input('versionChartData'),
        __metadata("design:type", Array)
    ], VersionChartComponent.prototype, "versionChartData", void 0);
    VersionChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'versionChart',
            templateUrl: 'versionChart.component.html',
            styleUrls: ['./versionChart.component.css']
        }),
        __metadata("design:paramtypes", [filterdata_service_1.FilterDataService])
    ], VersionChartComponent);
    return VersionChartComponent;
}());
exports.VersionChartComponent = VersionChartComponent;
