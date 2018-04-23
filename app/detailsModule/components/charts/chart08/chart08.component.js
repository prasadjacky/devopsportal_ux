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
var details_service_1 = require("../../../details.service");
var core_1 = require("@angular/core");
var app_service_1 = require("../../../../services/app.service");
var Chart08Component = /** @class */ (function () {
    function Chart08Component(detailsService, appService) {
        this.detailsService = detailsService;
        this.appService = appService;
        this.data = [];
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
        this.chart08Labels = ['Week1', 'Week2', 'Week3', 'Week4'];
        this.chart08Type = 'bar';
        this.chart08Legend = true;
        this.chart08Options = {
            plugins: {
                datalabels: {
                    color: 'white',
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > 0;
                    }
                }
            },
            legend: {
                labels: {
                    fontFamily: '"Comfortaa",sans-serif',
                    fontStyle: 'normal',
                    fontSize: 10,
                    boxWidth: 10,
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > 0;
                    }
                },
                position: 'bottom'
            },
            title: {
                fontSize: 14,
                display: true,
                text: 'Deployments Trend',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'bold',
            },
            scales: {
                xAxes: [{
                        barThickness: 20,
                        stacked: true,
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false
                        }
                    }]
            },
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false
        };
        this.chart08Data = [
            { data: [] },
            { data: [] },
            { data: [] }
        ];
        this.chart08Colors = [
            { backgroundColor: ['#2980b9', '#2980b9', '#2980b9', '#2980b9', '#2980b9'], label: 'Development' },
            { backgroundColor: ['#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f'], label: 'UAT' },
            { backgroundColor: ['#27ae60', '#27ae60', '#27ae60', '#27ae60', '#27ae60'], label: 'Production' }
        ];
    }
    Chart08Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getDeploymentsTrend().subscribe(function (deployments) {
            _this.deployments = deployments;
            _this.data[0] = [
                _this.deployments.projectDeploymentTrend[0]["development"],
                _this.deployments.projectDeploymentTrend[1]["development"],
                _this.deployments.projectDeploymentTrend[2]["development"],
                _this.deployments.projectDeploymentTrend[3]["development"]
            ];
            _this.data[1] = [
                _this.deployments.projectDeploymentTrend[0]["uat"],
                _this.deployments.projectDeploymentTrend[1]["uat"],
                _this.deployments.projectDeploymentTrend[2]["uat"],
                _this.deployments.projectDeploymentTrend[3]["uat"]
            ];
            _this.data[2] = [
                _this.deployments.projectDeploymentTrend[0]["production"],
                _this.deployments.projectDeploymentTrend[1]["production"],
                _this.deployments.projectDeploymentTrend[2]["production"],
                _this.deployments.projectDeploymentTrend[3]["production"]
            ];
            _this.chart08Data = [{ "data": _this.data[0], "label": "Development" },
                { "data": _this.data[1], "label": "UAT" },
                { "data": _this.data[2], "label": "Production" }];
        });
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        // this.appService.getDeploymentsTrend(this.key).subscribe(deployments => {
        //   this.deployments = deployments;
        //   this.data[0] = [
        //     this.deployments.projectDeploymentTrend[0]["successfulBuilds"],
        //     this.deployments.projectDeploymentTrend[1]["successfulBuilds"],
        //     this.deployments.projectDeploymentTrend[2]["successfulBuilds"],
        //     this.deployments.projectDeploymentTrend[3]["successfulBuilds"]
        //   ];
        //   this.data[1] = [
        //     this.deployments.projectDeploymentTrend[0]["failedBuilds"],
        //     this.deployments.projectDeploymentTrend[1]["failedBuilds"],
        //     this.deployments.projectDeploymentTrend[2]["failedBuilds"],
        //     this.deployments.projectDeploymentTrend[3]["failedBuilds"]
        //   ];
        //   this.data[2] = [
        //     this.deployments.projectDeploymentTrend[0]["failedBuilds"],
        //     this.deployments.projectDeploymentTrend[1]["failedBuilds"],
        //     this.deployments.projectDeploymentTrend[2]["failedBuilds"],
        //     this.deployments.projectDeploymentTrend[3]["failedBuilds"]
        //   ];
        //   this.chart08Data = [{ "data": this.data[0], "label": "Development" },
        //   { "data": this.data[1], "label": "UAT" },
        //   { "data": this.data[2], "label": "Production" }];
        // });
        sessionStorage.setItem("is_reloaded", true);
        // this.detailsService.fetchData('/api/presentation/project_builds', `${this.appService.selectedProject.project_key}`).subscribe(res => {
        //   var res_body = JSON.parse(res['_body']).projectDeploymentTrend;
        //   this.data[0] = [
        //     res_body[0].failedBuilds, res_body[1].failedBuilds, res_body[1].failedBuilds, res_body[3].failedBuilds
        //   ];
        //   this.data[1] = [
        //     res_body[0].sucessfulBuilds, res_body[1].sucessfulBuilds, res_body[1].sucessfulBuilds, res_body[3].sucessfulBuilds
        //   ];
        // },
        // err => {
        // 	console.log(err);
        // })
    };
    Chart08Component.prototype.updateChartData = function (deployments) {
        this.deployments = deployments;
        this.data[0] = [
            this.deployments.projectDeploymentTrend[0]["development"],
            this.deployments.projectDeploymentTrend[1]["development"],
            this.deployments.projectDeploymentTrend[2]["development"],
            this.deployments.projectDeploymentTrend[3]["development"]
        ];
        this.data[1] = [
            this.deployments.projectDeploymentTrend[0]["uat"],
            this.deployments.projectDeploymentTrend[1]["uat"],
            this.deployments.projectDeploymentTrend[2]["uat"],
            this.deployments.projectDeploymentTrend[3]["uat"]
        ];
        this.data[2] = [
            this.deployments.projectDeploymentTrend[0]["production"],
            this.deployments.projectDeploymentTrend[1]["production"],
            this.deployments.projectDeploymentTrend[2]["production"],
            this.deployments.projectDeploymentTrend[3]["production"]
        ];
        this.chart08Data = [{ "data": this.data[0], "label": "Development" },
            { "data": this.data[1], "label": "UAT" },
            { "data": this.data[2], "label": "Production" }];
    };
    Chart08Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart08',
            templateUrl: 'chart08.component.html'
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], Chart08Component);
    return Chart08Component;
}());
exports.Chart08Component = Chart08Component;
