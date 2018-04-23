import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import { PipeLine } from './pipeLine';


@Component({
	moduleId: module.id,
	templateUrl: './pipeline.component.html',
	styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent {
	public pipelineContent: any;
	public versions: any;
	public names: any;
	public status: any;
	public buildpipe: any;
	public selectedValue: any;
	public deploys: any;
	public thisProject;
	//public page: number;


	// public releases:Object = [
	// 	releaseNo = 1.4
	// ];
	constructor(private appService: AppService) {

		this.thisProject = this.appService.selectedProject;

		if  (sessionStorage.getItem("is_reloaded"))
			window.sessionStorage.setItem("id", this.appService.getPipeLines())
		window.sessionStorage.getItem("id")
		window.sessionStorage.setItem("key", this.appService.getNavChangeEmitter1())
		this.appService.getPipeLineContents(window.sessionStorage.getItem("key")).subscribe(pipelineContent => {
			this.pipelineContent = pipelineContent
			this.versions = this.pipelineContent.release.release_logical_name
			this.names = this.pipelineContent.environments
			this.status = this.pipelineContent.pipelines[0]['result']
			this.buildpipe = this.pipelineContent.pipelines
		})

		sessionStorage.setItem("is_reloaded",  true);

		$(document).ready(function () {

		})

	}

	ngOnInit() {
		//this.page =1;
		this.appService.getPipeLineContent().subscribe(pipelineContent => {
			this.pipelineContent = pipelineContent
			this.versions = this.pipelineContent.release.release_logical_name
			this.names = this.pipelineContent.environments
			this.status = this.pipelineContent.pipelines[0]['result']
			this.buildpipe = this.pipelineContent.pipelines

			//   alert(this.m)
		})
	}

	onChange(selecteditem) {
		this.selectedValue = selecteditem;
	}

	takeId(value) {
		this.appService.setPipeLine(value)

	}
	takeIds(value, uat) {
		this.appService.setPipeLine(value)
		this.appService.getUatIndex(uat)
	}
}