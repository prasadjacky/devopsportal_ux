import { Chart08Component } from './../charts/chart08/chart08.component';
import { AppService } from '../../../services/app.service';
import { DetailsService } from '../../details.service';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'deployment',
	templateUrl: 'deployment.component.html',
	styleUrls: ['./deployment.component.css']
})


export class DeploymentComponent implements AfterViewInit {
	public environmentSelected: any;
	@ViewChild('startDate') startDateEl: ElementRef;
	@ViewChild('endDate') endDateEl: ElementRef;
	@ViewChild(Chart08Component) chart08Component: Chart08Component;
	deployment: any = {
		environment_name: '',
		latestDeployment: '',
		deploymentFrequency: ''
	}
	public startDate: Date;
	public endDate: Date;
	// projectDeploymentStats:any[]= [
	//     {
	//         environment_name: "Demo2",
	//         count: 8,
	//         latestDeployment: "6 days ago",
	//         deploymentFrequency: "18 hours"
	//     }
	// ]
	constructor(private detailsService: DetailsService, private appService: AppService) { }

	private key: any;
	ngAfterViewInit(): void {
		this.endDate = new Date();
		this.endDateEl.nativeElement.valueAsDate = this.endDate;
		this.endDate.setMonth(this.endDate.getMonth() - 1);
		this.startDate = this.endDate;
		this.startDateEl.nativeElement.valueAsDate = this.startDate;
		this.applyDateRange();
	}
	ngOnInit() {

		this.appService.getDeployments().subscribe(deployment => {
			this.deployment = deployment;
			this.environmentSelected = this.deployment.projectDeploymentStats[0].environment_name;
		})
		if (sessionStorage.getItem("is_reloaded"))
			this.key = this.appService.getNavChangeEmitter1()
		this.appService.getDeployment(this.key).subscribe(deployment => {
			this.deployment = deployment;
			this.environmentSelected = this.deployment.projectDeploymentStats[0].environment_name;
			sessionStorage.setItem("is_reloaded", true);
		})
	}

	onSelect(event) {
		this.environmentSelected = event;
	}
	onStartDateChange(event) {
		this.startDate = new Date(this.startDateEl.nativeElement.valueAsDate);
		this.startDate.setMonth(this.startDate.getMonth() + 1);
		this.endDate = this.startDate;
		this.endDateEl.nativeElement.valueAsDate = this.endDate;
	}
	onEndDateChange(event) {
		this.endDate = new Date(this.endDateEl.nativeElement.valueAsDate);
		this.endDate.setMonth(this.endDate.getMonth() - 1);
		this.startDate = this.endDate;
		this.startDateEl.nativeElement.valueAsDate = this.startDate;
	}
	applyDateRange() {
		let dateRange = {
			projectKey: this.key,
			startDate: this.startDateEl.nativeElement.valueAsDate,
			endDate: this.endDateEl.nativeElement.valueAsDate,
		}
		this.appService.getDeploymentsTrendWithDateRange(dateRange).subscribe(res => {
			this.chart08Component.updateChartData(res);
		});
	}
}