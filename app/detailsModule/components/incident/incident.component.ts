import { DetailsService } from '../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
	moduleId: module.id,
	selector: 'incident',
	templateUrl: 'incident.component.html',
	styleUrls: ['./incident.component.css']
})



export class IncidentComponent implements OnInit {

	public builds: any = {};
	public minutes: number;
	public number: number;
	
	projectBuildSummary = {
		latestBuild: {
			number: '24',
			time_since: 'a month ago'
		},
		averageDuration: 'a minute'
	}
	constructor(private detailsService: DetailsService, private appService: AppService) { }

	ngOnInit() {

		this.appService.getBuildsData().subscribe(builds => {
			this.builds = builds;

			this.number = this.builds[2]["projectBuildSummary"]["latestBuild"]["number"];
			this.minutes = this.builds[2]["projectBuildSummary"]["averageDuration"];
		});
		// this.detailsService.fetchData('/api/presentation/project_builds',`${this.appService.selectedProject.project_key}`).subscribe(res=> {
		// 	this.projectBuildSummary = JSON.parse(res['_body']).projectBuildSummary;
		// },
		// err => {
		// 	console.log(err);
		// })
		

	}



}