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
var Chart05Component = /** @class */ (function () {
    function Chart05Component(appService) {
        var _this = this;
        this.appService = appService;
        this.chartLabel = [];
        this.chartData = [];
        this.chart05Labels = this.chartLabel;
        this.chart05Data = [];
        this.chart05Type = 'doughnut';
        this.chart05Options = {
            plugins: {
                datalabels: {
                    // backgroundColor: function(context) {
                    //   return context.dataset.backgroundColor;
                    // },
                    borderColor: 'white',
                    // borderRadius: 25,
                    // borderWidth: 2,
                    color: 'white',
                    formatter: Math.round,
                    font: {
                        size: 14
                    },
                    //anchor: 'end',
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > 0;
                    },
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontFamily: '"Comfortaa",sans-serif',
                    boxWidth: 5,
                    fontStyle: 'normal'
                }
            },
            maintainAspectRatio: false,
            title: {
                fontSize: 14,
                display: true,
                text: 'Deployment per Environment',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'bold',
            }
        };
        this.chart05Colors = [{ backgroundColor: ['#2980b9', '#f1c40f', '#27ae60', '#e67e22', '#e74c3c'] }];
        this.appService.getDeployments().subscribe(function (deployment) {
            _this.deployment = deployment;
            for (var i = 0; i < _this.deployment.projectDeploymentStats.length; i++) {
                _this.chartLabel.push(_this.deployment.projectDeploymentStats[i].environment_name);
                _this.chartData.push(_this.deployment.projectDeploymentStats[i].count);
                _this.chart05Data = _this.chartData;
                _this.chart05Labels = _this.chartLabel;
            }
        });
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getDeployment(this.key).subscribe(function (deployment) {
            _this.deployment = deployment;
            for (var i = 0; i < _this.deployment.projectDeploymentStats.length - 2; i++) {
                _this.chartLabel.push(_this.deployment.projectDeploymentStats[i].environment_name);
                _this.chartData.push(_this.deployment.projectDeploymentStats[i].count);
                _this.chart05Data = _this.chartData;
                _this.chart05Labels = _this.chartLabel;
                sessionStorage.setItem("is_reloaded", true);
            }
        });
    }
    Chart05Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart05',
            templateUrl: 'chart05.component.html'
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Chart05Component);
    return Chart05Component;
}());
exports.Chart05Component = Chart05Component;
