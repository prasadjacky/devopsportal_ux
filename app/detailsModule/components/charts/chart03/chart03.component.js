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
var Chart03Component = /** @class */ (function () {
    function Chart03Component(detailsService, appService) {
        this.detailsService = detailsService;
        this.appService = appService;
        this.data = [];
        this.data1 = [];
        this.data2 = [];
        this.chart03Labels = ['Week1', 'Week2', 'Week3', 'Week4'];
        this.chart03Type = 'bar';
        this.chart03Legend = true;
        this.chart03Options = {
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
                },
                position: 'bottom'
            },
            title: {
                fontSize: 14,
                display: true,
                text: 'Builds Trend',
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
        this.chart03Data = [
            { data: [] },
            { data: [] }
        ];
        this.chart03Colors = [
            { backgroundColor: ['#c0392b', '#c0392b', '#c0392b', '#c0392b', '#c0392b'], label: 'Failure' },
            { backgroundColor: ['#27ae60', '#27ae60', '#27ae60', '#27ae60', '#27ae60'], label: 'Success' }
        ];
    }
    Chart03Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getBuildsData().subscribe(function (builds) {
            _this.builds = builds;
            _this.data[0] = [
                _this.builds.projectBuildTrend[0]["failedBuilds"],
                _this.builds.projectBuildTrend[1]["failedBuilds"],
                _this.builds.projectBuildTrend[2]["failedBuilds"],
                _this.builds.projectBuildTrend[3]["failedBuilds"]
            ];
            _this.data[1] = [
                _this.builds.projectBuildTrend[0]["successfulBuilds"],
                _this.builds.projectBuildTrend[1]["successfulBuilds"],
                _this.builds.projectBuildTrend[2]["successfulBuilds"],
                _this.builds.projectBuildTrend[3]["successfulBuilds"]
            ];
            _this.chart03Data = [{ "data": _this.data[0], "label": "Failure" },
                { "data": _this.data[1], "label": "Success" }];
        });
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getBuildsDatas(this.key).subscribe(function (builds) {
            _this.builds = builds;
            _this.data[0] = [
                _this.builds.projectBuildTrend[0]["failedBuilds"],
                _this.builds.projectBuildTrend[1]["failedBuilds"],
                _this.builds.projectBuildTrend[2]["failedBuilds"],
                _this.builds.projectBuildTrend[3]["failedBuilds"]
            ];
            _this.data[1] = [
                _this.builds.projectBuildTrend[0]["successfulBuilds"],
                _this.builds.projectBuildTrend[1]["successfulBuilds"],
                _this.builds.projectBuildTrend[2]["successfulBuilds"],
                _this.builds.projectBuildTrend[3]["successfulBuilds"]
            ];
            _this.chart03Data = [{ "data": _this.data[0], "label": "Failure" },
                { "data": _this.data[1], "label": "Success" }];
        });
        sessionStorage.setItem("is_reloaded", true);
        // this.detailsService.fetchData('/api/presentation/project_builds', `${this.appService.selectedProject.project_key}`).subscribe(res => {
        //   var res_body = JSON.parse(res['_body']).projectBuildTrend;
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
    Chart03Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart03',
            templateUrl: 'chart03.component.html'
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], Chart03Component);
    return Chart03Component;
}());
exports.Chart03Component = Chart03Component;
