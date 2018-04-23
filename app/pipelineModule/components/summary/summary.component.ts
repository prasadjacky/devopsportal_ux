import { Component, ViewEncapsulation } from '@angular/core';
import { Summary } from './summary';
import { Commit } from './commits';
import { AppService } from '../../../services/app.service';

@Component({
    moduleId: module.id,
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SummaryComponent {
    public pipelineId: any;
    public ChangeSet: any;
    public planningInfo: any;
    public planningInfoEpics: any;
    public planningInfoStories: any;
    public planningInfoBugs: any;
    summary: Summary[];
    commit: Commit[];
    public pipelineContent: any;
    public names: any;
    public buildpipe: any;
    public thisProject: any;

    constructor(private appService: AppService) {
        this.thisProject = this.appService.selectedProject;
        this.appService.getPipeLineContent().subscribe(pipelineContent => {
            this.pipelineContent = pipelineContent;
            this.names = this.pipelineContent.environments
            this.buildpipe = this.pipelineContent.pipelines
        })

        this.appService.getChangeSet().subscribe(ChangeSet => {
            this.ChangeSet = ChangeSet;
            this.planningInfo = this.ChangeSet.planningInfoForPipeline;
            //   this.planningInfoEpics=this.ChangeSet.planningInfoForPipeline.epics
            //   this.planningInfoStories=this.ChangeSet.planningInfoForPipeline.stories
            //   this.planningInfoBugs=this.ChangeSet.planningInfoForPipeline.bugs

            // this.planningInfo=[].concat.apply([], [this.ChangeSet.planningInfoForPipeline.epics,this.ChangeSet.planningInfoForPipeline.stories,
            // this.ChangeSet.planningInfoForPipeline.bugs]);
            //  console.log(this.planningInfo.length)
        })

        if  (sessionStorage.getItem("is_reloaded"))
            window.sessionStorage.setItem("id", this.appService.getPipeLines())
        window.sessionStorage.getItem("id")
        window.sessionStorage.setItem("key", this.appService.getNavChangeEmitter1())
        this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(pipelineContent => {
            this.pipelineContent = pipelineContent;
            this.names = this.pipelineContent.environments
            this.buildpipe = this.pipelineContent.pipelines
            this.pipelineId = window.sessionStorage.getItem("id")
        })

        this.appService.getChangeSets(window.sessionStorage.getItem("id")).subscribe(ChangeSet => {
            this.ChangeSet = ChangeSet;
            this.planningInfo = this.ChangeSet.planningInfoForPipeline;
        })
        sessionStorage.setItem("is_reloaded",  true);

    }
    ngOnInit() {
        this.appService.getSummary().subscribe(summary => this.summary = summary);
        this.appService.getCommit().subscribe(commit => this.commit = commit);
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

    }


    uat(value) {
        this.appService.getUatIndex(value)
    }
}