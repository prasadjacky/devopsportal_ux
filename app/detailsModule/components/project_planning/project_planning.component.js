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
var details_service_1 = require("../../details.service");
var app_service_1 = require("../../../services/app.service");
var http_1 = require("@angular/http");
var ProjectPlanningComponent = /** @class */ (function () {
    function ProjectPlanningComponent(detailsService, http, appService) {
        var _this = this;
        this.detailsService = detailsService;
        this.http = http;
        this.appService = appService;
        this.projectPlanning = {};
        this.projectPlanningObj = {
            projectCompletionStatus: {
                toDo: 0,
                inProgress: 0,
                done: 0
            },
            projectNumbers: {
                sprintCount: 0,
                epicCount: 0,
                storyCount: 0,
                bugCount: 0
            }
        };
        if (sessionStorage.getItem("is_reloaded"))
            this.key = this.appService.getNavChangeEmitter1();
        this.appService.getProjectPlanningDatas(this.key).subscribe(function (projectPlanning) {
            _this.projectPlanning = projectPlanning;
            _this.projectPlanningObj.projectNumbers.sprintCount = projectPlanning["projectNumbers"]["sprintCount"];
            _this.projectPlanningObj.projectNumbers.epicCount = projectPlanning["projectNumbers"]["epicCount"];
            _this.projectPlanningObj.projectNumbers.storyCount = projectPlanning["projectNumbers"]["storyCount"];
            _this.projectPlanningObj.projectNumbers.bugCount = projectPlanning["projectNumbers"]["bugCount"];
            _this.projectPlanningObj.projectCompletionStatus.toDo = projectPlanning["projectCompletionStatus"]["toDo"];
            _this.projectPlanningObj.projectCompletionStatus.inProgress = projectPlanning["projectCompletionStatus"]["inProgress"];
            _this.projectPlanningObj.projectCompletionStatus.done = projectPlanning["projectCompletionStatus"]["done"];
        });
        sessionStorage.setItem("is_reloaded", true);
    }
    ProjectPlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedKey = this.appService.selectedProject.project_key;
        this.appService.getProjectPlanningData().subscribe(function (projectPlanning) {
            _this.projectPlanning = projectPlanning;
            _this.projectPlanningObj.projectNumbers.sprintCount = projectPlanning["projectNumbers"]["sprintCount"];
            _this.projectPlanningObj.projectNumbers.epicCount = projectPlanning["projectNumbers"]["epicCount"];
            _this.projectPlanningObj.projectNumbers.storyCount = projectPlanning["projectNumbers"]["storyCount"];
            _this.projectPlanningObj.projectNumbers.bugCount = projectPlanning["projectNumbers"]["bugCount"];
            _this.projectPlanningObj.projectCompletionStatus.toDo = projectPlanning["projectCompletionStatus"]["toDo"];
            _this.projectPlanningObj.projectCompletionStatus.inProgress = projectPlanning["projectCompletionStatus"]["inProgress"];
            _this.projectPlanningObj.projectCompletionStatus.done = projectPlanning["projectCompletionStatus"]["done"];
        });
        // this.detailsService.fetchData('/api/presentation/project_planning', `${this.appService.selectedProject.project_key}`).subscribe(res => {
        // 	console.log(JSON.parse(res['_body']))
        // 	this.projectPlanning = JSON.parse(res['_body']);
        // 	this.projectPlanningObj={
        // 		projectCompletionStatus:{
        // 			sprintCount:this.projectPlanning.projectNumbers.sprintCount,
        // 			epicCount:this.projectPlanning.projectNumbers.epicCount,
        // 			storyCount:this.projectPlanning.projectNumbers.storyCount,
        // 			bugCount:this.projectPlanning.projectNumbers.bugCount
        // 		},
        // 		projectNumbers:{
        // 			ToDo:this.projectPlanning.projectCompletionStatus['To Do'],
        // 			InProgress:this.projectPlanning.projectCompletionStatus['In Progress'],
        // 			Done:this.projectPlanning.projectCompletionStatus.Done
        // 		}
        // 	}
        // },
        // err => {
        // 	console.log(err);
        // })
    };
    ProjectPlanningComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-planning',
            templateUrl: 'project_planning.component.html',
            styleUrls: ['./project_planning.component.css']
        }),
        __metadata("design:paramtypes", [details_service_1.DetailsService, http_1.Http, app_service_1.AppService])
    ], ProjectPlanningComponent);
    return ProjectPlanningComponent;
}());
exports.ProjectPlanningComponent = ProjectPlanningComponent;
