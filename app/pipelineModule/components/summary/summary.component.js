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
var app_service_1 = require("../../../services/app.service");
var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.thisProject = this.appService.selectedProject;
        this.appService.getPipeLineContent().subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.names = _this.pipelineContent.environments;
            _this.buildpipe = _this.pipelineContent.pipelines;
        });
        this.appService.getChangeSet().subscribe(function (ChangeSet) {
            _this.ChangeSet = ChangeSet;
            _this.planningInfo = _this.ChangeSet.planningInfoForPipeline;
            //   this.planningInfoEpics=this.ChangeSet.planningInfoForPipeline.epics
            //   this.planningInfoStories=this.ChangeSet.planningInfoForPipeline.stories
            //   this.planningInfoBugs=this.ChangeSet.planningInfoForPipeline.bugs
            // this.planningInfo=[].concat.apply([], [this.ChangeSet.planningInfoForPipeline.epics,this.ChangeSet.planningInfoForPipeline.stories,
            // this.ChangeSet.planningInfoForPipeline.bugs]);
            //  console.log(this.planningInfo.length)
        });
        if (sessionStorage.getItem("is_reloaded"))
            window.sessionStorage.setItem("id", this.appService.getPipeLines());
        window.sessionStorage.getItem("id");
        window.sessionStorage.setItem("key", this.appService.getNavChangeEmitter1());
        this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(function (pipelineContent) {
            _this.pipelineContent = pipelineContent;
            _this.names = _this.pipelineContent.environments;
            _this.buildpipe = _this.pipelineContent.pipelines;
            _this.pipelineId = window.sessionStorage.getItem("id");
        });
        this.appService.getChangeSets(window.sessionStorage.getItem("id")).subscribe(function (ChangeSet) {
            _this.ChangeSet = ChangeSet;
            _this.planningInfo = _this.ChangeSet.planningInfoForPipeline;
        });
        sessionStorage.setItem("is_reloaded", true);
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getSummary().subscribe(function (summary) { return _this.summary = summary; });
        this.appService.getCommit().subscribe(function (commit) { return _this.commit = commit; });
        $(document).ready(function () {
            $(function () {
                $("#myTable tr").each(function (i, row) {
                    if ($(row).children("td.summaryStatus").html() == "To Do") {
                        $(row).children("td.summaryStatus").addClass("blueClass");
                    }
                    else if ($(row).children("td.summaryStatus").html() == "In Progress") {
                        $(row).children("td.summaryStatus").addClass("brownClass");
                    }
                    else {
                        $(row).children("td.summaryStatus").addClass("greenClass");
                    }
                });
            });
        });
        this.pipelineId = this.appService.getPipeLine();
    };
    SummaryComponent.prototype.uat = function (value) {
        this.appService.getUatIndex(value);
    };
    SummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './summary.component.html',
            styleUrls: ['./summary.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
