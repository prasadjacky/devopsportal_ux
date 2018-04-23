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
var Chart07Component = /** @class */ (function () {
    function Chart07Component(detailsService, appService) {
        this.detailsService = detailsService;
        this.appService = appService;
        this.data = [];
        this.data1 = [];
        this.data2 = [];
        this.chart07Labels = ['Week1', 'Week2', 'Week3', 'Week4'];
        this.chart07Type = 'bar';
        this.chart07Legend = true;
        this.chart07Options = {
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
                text: 'Incidents Trend',
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
        this.chart07Data = [
            { data: [] },
            { data: [] },
            { data: [] }
        ];
        this.chart07Colors = [
            { backgroundColor: ['#e74c3c', '#e74c3c', '#e74c3c', '#e74c3c', '#e74c3c'], label: 'High' },
            { backgroundColor: ['#e67e22', '#e67e22', '#e67e22', '#e67e22', '#e67e22'], label: 'Medium' },
            { backgroundColor: ['#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f'], label: 'Low' }
        ];
    }
    Chart07Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getBuildsData().subscribe(function (data) {
            _this.data = data;
            _this.data[0] = [
                _this.data[1]["projectBuildTrend"][0]["failedBuilds"],
                _this.data[1]["projectBuildTrend"][1]["failedBuilds"],
                _this.data[1]["projectBuildTrend"][2]["failedBuilds"],
                _this.data[1]["projectBuildTrend"][3]["failedBuilds"]
            ];
            _this.data[1] = [
                _this.data[1]["projectBuildTrend"][0]["successfulBuilds"],
                _this.data[1]["projectBuildTrend"][1]["successfulBuilds"],
                _this.data[1]["projectBuildTrend"][2]["successfulBuilds"],
                _this.data[1]["projectBuildTrend"][3]["successfulBuilds"]
            ];
            _this.chart07Data = [{ "data": data[0], "label": "High" },
                { "data": data[1], "label": "Medium" },
                { "data": data[0], "label": "Low" }];
        });
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
    Chart07Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart07',
            templateUrl: 'chart07.component.html'
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], Chart07Component);
    return Chart07Component;
}());
exports.Chart07Component = Chart07Component;
