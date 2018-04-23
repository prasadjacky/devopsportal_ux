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
var details_service_1 = require("../../details.service");
var core_1 = require("@angular/core");
var app_service_1 = require("../../../services/app.service");
var BuildsComponent = /** @class */ (function () {
    // projectBuildSummary = {
    // 	latestBuild: {
    // 		number: '24',
    // 		time_since: 'a month ago'
    // 	},
    // 	averageDuration: 'a minute'
    // }
    function BuildsComponent(detailsService, appService) {
        var _this = this;
        this.detailsService = detailsService;
        this.appService = appService;
        this.builds = {};
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getBuildsDatas(this.key).subscribe(function (builds) {
            _this.builds = builds;
            _this.number = _this.builds.projectBuildSummary.latestBuild.number;
            _this.minutes = _this.builds.projectBuildSummary.averageDuration;
        });
        sessionStorage.setItem("is_reloaded", true);
    }
    BuildsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getBuildsData().subscribe(function (builds) {
            _this.builds = builds;
            _this.number = _this.builds.projectBuildSummary.latestBuild.number;
            _this.minutes = _this.builds.projectBuildSummary.averageDuration;
        });
        // this.detailsService.fetchData('/api/presentation/project_builds',`${this.appService.selectedProject.project_key}`).subscribe(res=> {
        // 	this.projectBuildSummary = JSON.parse(res['_body']).projectBuildSummary;
        // },
        // err => {
        // 	console.log(err);
        // })
    };
    BuildsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'builds',
            templateUrl: 'builds.component.html',
            styleUrls: ['./builds.component.css']
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, app_service_1.AppService])
    ], BuildsComponent);
    return BuildsComponent;
}());
exports.BuildsComponent = BuildsComponent;
