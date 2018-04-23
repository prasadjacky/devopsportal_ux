import { DetailsService } from '../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
	moduleId: module.id,
	selector: 'builds',
	templateUrl: 'builds.component.html',
	styleUrls: ['./builds.component.css']
})



export class BuildsComponent implements OnInit {

	public builds: any = {};
	public minutes: number;
	public number: number;
	public key: any;

	// projectBuildSummary = {
	// 	latestBuild: {
	// 		number: '24',
	// 		time_since: 'a month ago'
	// 	},
	// 	averageDuration: 'a minute'
	// }
	constructor(private detailsService: DetailsService, private appService: AppService) {

		if  (sessionStorage.getItem("is_reloaded"))
			this.key = this.appService.getNavChangeEmitter1()
		this.appService.getBuildsDatas(this.key).subscribe(builds => {
			this.builds = builds;

			this.number = this.builds.projectBuildSummary.latestBuild.number;
			this.minutes = this.builds.projectBuildSummary.averageDuration;
		});
		sessionStorage.setItem("is_reloaded",  true);

	}

	ngOnInit() {

		this.appService.getBuildsData().subscribe(builds => {
			this.builds = builds;

			this.number = this.builds.projectBuildSummary.latestBuild.number;
			this.minutes = this.builds.projectBuildSummary.averageDuration;
		});
		// this.detailsService.fetchData('/api/presentation/project_builds',`${this.appService.selectedProject.project_key}`).subscribe(res=> {
		// 	this.projectBuildSummary = JSON.parse(res['_body']).projectBuildSummary;
		// },
		// err => {
		// 	console.log(err);
		// })


	}



}