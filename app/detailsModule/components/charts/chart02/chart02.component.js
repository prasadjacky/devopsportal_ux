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
var Chart02Component = /** @class */ (function () {
    function Chart02Component(detailsService, appService) {
        this.detailsService = detailsService;
        this.appService = appService;
        this.builds = {};
        this.chart02Labels = ['Success', 'Failure', 'Aborted', 'Unstable'];
        this.chart02Data = [0, 0, 0, 0];
        this.chart02Type = 'doughnut';
        this.chart02Options = {
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
                position: 'bottom',
                labels: {
                    fontFamily: '"Comfortaa",sans-serif',
                    fontStyle: 'normal',
                    boxWidth: 5
                }
            },
            maintainAspectRatio: false,
            title: {
                fontSize: 14,
                display: true,
                text: 'Total Builds',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'bold'
            }
        };
        this.chart02Colors = [{ backgroundColor: ['#4CAF50', '#e74c3c', '#a9a5a5', '#f1c40f'] }];
    }
    Chart02Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getBuildsData().subscribe(function (builds) {
            _this.builds = builds;
            _this.chart02Data = [_this.builds.projectBuildStatus.success,
                _this.builds.projectBuildStatus.failure,
                _this.builds.projectBuildStatus.aborted,
                _this.builds.projectBuildStatus.unstable];
        });
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getBuildsDatas(this.key).subscribe(function (builds) {
            _this.builds = builds;
            _this.chart02Data = [_this.builds.projectBuildStatus.success,
                _this.builds.projectBuildStatus.failure,
                _this.builds.projectBuildStatus.aborted,
                _this.builds.projectBuildStatus.unstable];
        });
        sessionStorage.setItem("is_reloaded", true);
        // this.detailsService.fetchData('/api/presentation/project_builds', `${this.appService.selectedProject.project_key}`).subscribe(res => {
        //   var res_body = JSON.parse(res['_body']).projectBuildStatus;
        //   this.chart02Data = [
        //     res_body.success,
        //     res_body.failure,
        //     res_body.aborted,
        //     res_body.unstable
        //   ];
        // },
        // err => {
        // 	console.log(err);
        // })
    };
    Chart02Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart02',
            templateUrl: 'chart02.component.html'
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], Chart02Component);
    return Chart02Component;
}());
exports.Chart02Component = Chart02Component;
