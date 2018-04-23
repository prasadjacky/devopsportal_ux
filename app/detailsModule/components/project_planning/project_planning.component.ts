import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../details.service';
import { AppService } from '../../../services/app.service';
import { Http } from '@angular/http';


@Component({
	moduleId: module.id,
	selector: 'project-planning',
	templateUrl: 'project_planning.component.html',
	styleUrls: ['./project_planning.component.css']
})



export class ProjectPlanningComponent implements OnInit {

	public selectedKey:string;

	//below progressbar
	public time_ellapsed: number ;
	public work_complete: number ;
	public scope_changed: number ;

	//status story points on progress bar
	public status_toDo: number;
	public status_inProgress: number;
	public status_done: number;

	//tiles
	public to_do: number
	public in_progress: number;
	public done: number;

	//progressbar data
	public width1: any ;
	public width2: any ;
	public width3: any ;

	public projectPlanning: any = {};
	projectPlanningObj = {
		projectCompletionStatus: {
			toDo: 0,
			inProgress: 0,
			done: 0
		},
		projectNumbers: {
			sprintCount:0,
			epicCount: 0,
			storyCount: 0,
			bugCount: 0
		}
	}

	private key:any;
	constructor(private detailsService: DetailsService, private http:Http, private appService: AppService) {
				    if (sessionStorage.getItem("is_reloaded")) 
			this.key=this.appService.getNavChangeEmitter1()
			this.appService.getProjectPlanningDatas(this.key).subscribe(projectPlanning => {
			this.projectPlanning = projectPlanning;
			this.projectPlanningObj.projectNumbers.sprintCount = projectPlanning["projectNumbers"]["sprintCount"];
			this.projectPlanningObj.projectNumbers.epicCount = projectPlanning["projectNumbers"]["epicCount"];
			this.projectPlanningObj.projectNumbers.storyCount = projectPlanning["projectNumbers"]["storyCount"];
			this.projectPlanningObj.projectNumbers.bugCount = projectPlanning["projectNumbers"]["bugCount"];

			this.projectPlanningObj.projectCompletionStatus.toDo = projectPlanning["projectCompletionStatus"]["toDo"];
			this.projectPlanningObj.projectCompletionStatus.inProgress = projectPlanning["projectCompletionStatus"]["inProgress"];
			this.projectPlanningObj.projectCompletionStatus.done = projectPlanning["projectCompletionStatus"]["done"];
		});
sessionStorage.setItem("is_reloaded", true);
	
	}

	ngOnInit() {

		this.selectedKey = this.appService.selectedProject.project_key;
		this.appService.getProjectPlanningData().subscribe(projectPlanning => {
			this.projectPlanning = projectPlanning;

			this.projectPlanningObj.projectNumbers.sprintCount = projectPlanning["projectNumbers"]["sprintCount"];
			this.projectPlanningObj.projectNumbers.epicCount = projectPlanning["projectNumbers"]["epicCount"];
			this.projectPlanningObj.projectNumbers.storyCount = projectPlanning["projectNumbers"]["storyCount"];
			this.projectPlanningObj.projectNumbers.bugCount = projectPlanning["projectNumbers"]["bugCount"];

			this.projectPlanningObj.projectCompletionStatus.toDo = projectPlanning["projectCompletionStatus"]["toDo"];
			this.projectPlanningObj.projectCompletionStatus.inProgress = projectPlanning["projectCompletionStatus"]["inProgress"];
			this.projectPlanningObj.projectCompletionStatus.done = projectPlanning["projectCompletionStatus"]["done"];
			
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
	}
}