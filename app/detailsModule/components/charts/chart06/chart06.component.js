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
var Chart06Component = /** @class */ (function () {
    function Chart06Component(detailsService, appService) {
        this.detailsService = detailsService;
        this.appService = appService;
        this.data = [];
        this.chart06Labels = ['High', 'Medium', 'Low'];
        this.chart06Data = [16, 7, 1];
        this.chart06Type = 'doughnut';
        this.chart06Options = {
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
                text: 'Total Incidents',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'bold'
            }
        };
        this.chart06Colors = [{ backgroundColor: ['#e74c3c', '#e67e22', '#f1c40f'] }];
    }
    Chart06Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getBuildsData().subscribe(function (data) {
            _this.data = data;
            _this.chart06Data = [_this.data[0]["projectBuildStatus"]["success"],
                _this.data[0]["projectBuildStatus"]["failure"],
                _this.data[0]["projectBuildStatus"]["unstable"],];
            // this.data[0]["projectBuildStatus"]["aborted"],];
        });
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
    Chart06Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart06',
            templateUrl: 'chart06.component.html'
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], Chart06Component);
    return Chart06Component;
}());
exports.Chart06Component = Chart06Component;
