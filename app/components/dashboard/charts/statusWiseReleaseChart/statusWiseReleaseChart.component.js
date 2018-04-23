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
var app_service_1 = require("./../../../../services/app.service");
var core_1 = require("@angular/core");
var StatusWiseReleaseChartComponent = /** @class */ (function () {
    function StatusWiseReleaseChartComponent(appService, filterDataService) {
        var _this = this;
        this.appService = appService;
        this.filterDataService = filterDataService;
        this.appReleaseCount = 0;
        this.deployment = {};
        this.chartLabel = [];
        this.chartData = [];
        this.chart05Labels = ['Completed', 'Cancelled', 'On Hold', 'Problem', 'In Progress'];
        this.chart05Data = [80, 20, 15, 45];
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
            "filterBy": "STATUS",
            "filterMonth": currentDate.getMonth(),
            "filterYear": currentDate.getFullYear().toString()
        };
        this.appService.getDeploymentsTrendByEnvType(filterProps).subscribe(function (deployment) {
            _this.appReleaseCount = 0;
            _this.chart05Labels = [];
            _this.chartData = [];
            _this.chart05Data = [];
            _this.chartLabel = [];
            for (var i = 0; i < deployment.projectDeploymentsByStatus.length; i++) {
                _this.chartLabel.push(deployment.projectDeploymentsByStatus[i].deployment_result);
                _this.chartData.push(deployment.projectDeploymentsByStatus[i].count);
                _this.appReleaseCount += deployment.projectDeploymentsByStatus[i].count;
            }
            _this.chart05Data = _this.chartData;
            _this.chart05Labels = _this.chartLabel;
            //this.filterDataService.appReleaseCount = this.appReleaseCount;
            //this.filterDataService.appReleaseCountUpdateEvent.next(this.appReleaseCount);
        });
        this.filterDataService.filterServiceStatusTimeFilterEvent.subscribe(function (deployment) {
            _this.appReleaseCount = 0;
            _this.chartLabel = [];
            _this.chartData = [];
            _this.chart05Labels = [];
            _this.chart05Data = [];
            for (var i = 0; i < deployment.projectDeploymentsByStatus.length; i++) {
                _this.chartLabel.push(deployment.projectDeploymentsByStatus[i].deployment_result);
                _this.chartData.push(deployment.projectDeploymentsByStatus[i].count);
                _this.appReleaseCount += deployment.projectDeploymentsByStatus[i].count;
            }
            _this.chart05Data = _this.chartData;
            //this.filterDataService.appReleaseCount = this.appReleaseCount;
            //this.filterDataService.appReleaseCountUpdateEvent.next(this.appReleaseCount);
        });
    }
    StatusWiseReleaseChartComponent.prototype.ngOnInit = function () {
    };
    StatusWiseReleaseChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'statusWiseReleaseChart',
            templateUrl: 'statusWiseReleaseChart.component.html',
            styleUrls: ['./statusWiseReleaseChart.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], StatusWiseReleaseChartComponent);
    return StatusWiseReleaseChartComponent;
}());
exports.StatusWiseReleaseChartComponent = StatusWiseReleaseChartComponent;
