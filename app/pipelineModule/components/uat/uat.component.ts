import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
    moduleId: module.id,
    selector: 'uat',
    templateUrl: 'uat.component.html',
    styleUrls: ['./uat.component.css']
})

export class UatComponent{
    public pipelineId:any;
    public pipelineContent:any;
    public names:any;
    public buildpipe:any;
    public indexed:any;
    public indexed1:any;
    public uatindex:any;
    public thisProject:any;
    public summary:any={
        "Type":''
    }

    
    constructor(private appService: AppService) {
             this.thisProject = this.appService.selectedProject;
         this.appService.getPipeLineContent().subscribe(pipelineContent =>{ 
			  this.pipelineContent = pipelineContent ;
               this.names=this.pipelineContent.environments
		  this.buildpipe=this.pipelineContent.pipelines
          this.pipelineId=this.appService.getPipeLine();
    })


    if (sessionStorage.getItem("is_reloaded"))
        window.sessionStorage.setItem("id",this.appService.getPipeLines())
        window.sessionStorage.getItem("id")
        window.sessionStorage.setItem("key",this.appService.getNavChangeEmitter1()) 
        this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(pipelineContent =>{ 
			  this.pipelineContent = pipelineContent ;
               this.names=this.pipelineContent.environments
		  this.buildpipe=this.pipelineContent.pipelines
          this.pipelineId=window.sessionStorage.getItem("id")
    })
  sessionStorage.setItem("is_reloaded", true);


        	this.clicked(this.indexed);
            this.clicks(this.indexed1);
            this.uatindex=this.appService.setUatIndex(); 
}


clicked(value){
    this.indexed=value;
     this.uatindex=null;
}

clicks(value){
    this.indexed1=value;
     if (this.uatindex==value){
        return true;
    }else
    if(this.indexed==value){
        this.uatindex=null;
        return true;
    }
 }
}