import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { MinusSignToParens } from '../../../resources/pipes/minus-sign-pipe';


@Component({
    moduleId: module.id,
    selector: 'build',
    templateUrl: 'build.component.html',
    styleUrls: ['./build.component.css']
})

export class BuildComponent {
    public thisProject: any;
    public pipelinebuild: any;
    public pipelineId: any;
    public pipelineContent: any;
    public names: any;
    public buildpipe: any;
    public chart01Labels: string[] = ['Success', 'Failure'];
    public chart01Data: number[] = [68, 0];
    public chart01Type: string = 'doughnut';
    public chart01Options: any = {
        plugins: {
            datalabels: {
                display: false
            }
        },
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        title: {
            fontSize: 13,
            display: false,
            text: 'SUCCESS AND FAILURE',
            fontFamily: 'Metropolis,"Avenir Next","Helvetica Neue",Arial,sans-serif',
            fontStyle: 'normal',
            fontWeight: 600
        }
    };
    public chart01Colors: Array<any> = [{ backgroundColor: ['#038A24', '#FA3C3C'] }];


    // public chart02Labels:string[] = ['Success', 'Failure'];
    // public chart02Data:number[] = [100,1];
    // public chart02Type:string = 'doughnut';
    // public chart02Options:any = {
    // legend: {
    //     display:false
    // },
    // maintainAspectRatio: false,
    // title:{
    //     fontSize: 13,
    //     display: false,
    //     text: 'SUCCESS AND FAILURE',
    //     fontFamily: 'Metropolis,"Avenir Next","Helvetica Neue",Arial,sans-serif',
    //     fontStyle: 'normal',
    //     fontWeight: 600
    // }
    // };
    // public chart02Colors:Array<any> = [{backgroundColor:['#038A24','#FA3C3C']}];
    public key;
    constructor(private appService: AppService) {
        this.thisProject = this.appService.selectedProject;
        this.appService.getPipeLineContent().subscribe(pipelineContent => {
            this.pipelineContent = pipelineContent;
            this.names = this.pipelineContent.environments
            this.buildpipe = this.pipelineContent.pipelines
            this.names = this.pipelineContent.environments
            this.pipelineId = this.appService.getPipeLine();
        })

        //      this.appService.getPipelineBuild().subscribe(pipelineBuild =>{ 
        // 		  this.pipelinebuild = pipelineBuild ;	
        //           this.chart01Data = [this.pipelinebuild.pipelineTest.build_test_passed,this.pipelinebuild.pipelineTest.build_test_failed]
        // })
        this.chart01Data = [68, 0];


        if (sessionStorage.getItem("is_reloaded"))
            window.sessionStorage.setItem("id", this.appService.getPipeLines())
        window.sessionStorage.getItem("id")
        window.sessionStorage.setItem("key", this.appService.getNavChangeEmitter1())
        this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(pipelineContent => {
            this.pipelineContent = pipelineContent;
            this.names = this.pipelineContent.environments
            this.buildpipe = this.pipelineContent.pipelines
            this.pipelineId = window.sessionStorage.getItem("id")
        })
        this.appService.getPipelineBuilds(window.sessionStorage.getItem("id")).subscribe(pipelineBuild => {
            this.pipelinebuild = pipelineBuild;
            this.chart01Data = [this.pipelinebuild.pipelineTest.build_test_passed, this.pipelinebuild.pipelineTest.build_test_failed]
        })
        sessionStorage.setItem("is_reloaded", true);
    }
    uat(value) {
        this.appService.getUatIndex(value)
    }
}