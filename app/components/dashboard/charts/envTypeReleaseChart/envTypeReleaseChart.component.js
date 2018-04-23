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
var app_service_1 = require("./../../../../services/app.service");
var filterdata_service_1 = require("./../../../../services/filterdata.service");
var core_1 = require("@angular/core");
var EnvTypeReleaseChartComponent = /** @class */ (function () {
    function EnvTypeReleaseChartComponent(appService, filterDataService) {
        var _this = this;
        this.appService = appService;
        this.filterDataService = filterDataService;
        this.appReleaseCount = 0;
        this.chartLabel = [];
        this.chartData = [];
        this.chart05Labels = ['Development', 'UAT', 'Production'];
        this.chart05Data = [0, 0, 0];
        this.chart05Type = 'doughnut';
        this.chart05Options = {
            plugins: {
                datalabels: {
                    // backgroundColor: function (context) {
                    //   return context.dataset.backgroundColor;
                    // },
                    borderColor: 'white',
                    // borderRadius: 25,
                    // borderWidth: 2,
                    color: 'white',
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > 0;
                    },
                    formatter: Math.round,
                    font: {
                        size: 16
                    },
                    anchor: 'center'
                },
                afterDraw: function (chart) {
                    console.log(chart);
                    if (chart.data.datasets.length === 0) {
                        // No data is present
                        var ctx = chart.chart.ctx;
                        var width = chart.chart.width;
                        var height = chart.chart.height;
                        chart.clear();
                        ctx.save();
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.font = "16px normal 'Helvetica Nueue'";
                        ctx.fillText('No data to display', width / 2, height / 2);
                        ctx.restore();
                    }
                }
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontFamily: '"Comfortaa",sans-serif',
                    boxWidth: 8,
                    fontStyle: 'normal',
                    fontSize: 14
                }
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
                        barThickness: 20,
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
            // title: {
            //   fontSize: 14,
            //   display: true,
            //   text: 'Deployment per Environment',
            //   fontFamily: '"Comfortaa",sans-serif',
            //   fontStyle: 'bold',
            // }
        };
        this.chart05Colors = [{ backgroundColor: ['#2980b9', '#f1c40f', '#27ae60', '#e67e22', '#e74c3c'] }];
        var currentDate = new Date();
        var filterProps = {
            "filterBy": "ENV",
            "filterMonth": currentDate.getMonth(),
            "filterYear": currentDate.getFullYear().toString()
        };
        this.appService.getDeploymentsTrendByEnvType(filterProps).subscribe(function (deployment) {
            _this.deployment = deployment;
            _this.appReleaseCount = 0;
            _this.chartLabel = [];
            _this.chart05Labels = [];
            _this.chart05Data = [];
            _this.chartData = [];
            for (var i = 0; i < _this.deployment.projectDeploymentTrend.length; i++) {
                _this.chartLabel.push(_this.deployment.projectDeploymentTrend[i].environment_type);
                _this.chartData.push(_this.deployment.projectDeploymentTrend[i].count);
                _this.appReleaseCount += _this.deployment.projectDeploymentTrend[i].count;
            }
            _this.chart05Data = _this.chartData;
            _this.chart05Labels = _this.chartLabel;
            _this.filterDataService.appReleaseCount = _this.appReleaseCount;
            _this.filterDataService.appReleaseCountUpdateEvent.next(_this.appReleaseCount);
        });
        this.filterDataService.filterServiceENVTimeFilterEvent.subscribe(function (deployment) {
            _this.deployment = deployment;
            _this.appReleaseCount = 0;
            _this.chartLabel = [];
            _this.chart05Labels = [];
            _this.chartData = [];
            _this.chart05Data = [];
            for (var i = 0; i < _this.deployment.projectDeploymentTrend.length; i++) {
                _this.chartLabel.push(_this.deployment.projectDeploymentTrend[i].environment_type);
                _this.chartData.push(_this.deployment.projectDeploymentTrend[i].count);
                _this.appReleaseCount += _this.deployment.projectDeploymentTrend[i].count;
            }
            _this.chart05Data = _this.chartData;
            _this.chart05Labels = _this.chartLabel;
            _this.filterDataService.appReleaseCount = _this.appReleaseCount;
            _this.filterDataService.appReleaseCountUpdateEvent.next(_this.appReleaseCount);
        });
    }
    EnvTypeReleaseChartComponent.prototype.ngOnInit = function () {
    };
    ;
    EnvTypeReleaseChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'envTypeReleaseChart',
            templateUrl: 'envTypeReleaseChart.component.html',
            styleUrls: ['./envTypeReleaseChart.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], EnvTypeReleaseChartComponent);
    return EnvTypeReleaseChartComponent;
}());
exports.EnvTypeReleaseChartComponent = EnvTypeReleaseChartComponent;
