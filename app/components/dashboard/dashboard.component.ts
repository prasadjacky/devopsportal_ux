import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

import { FilterDataService } from '../../services/filterdata.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Project } from '../projects/projects/projects';
@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
    public isFilterApplied: Boolean = this.filterDataService.funcIsFilterApplied();
    @Input('projectsCount') projectsCount: number = this.filterDataService.projectsCount;
    @Input('technicalDebt') technicalDebt: number = this.filterDataService.technicalDebt;
    @Input('buildSuccessRatio') buildSuccessRatio: number = this.filterDataService.buildSuccessRatio;
    @Input('bugRatio') bugRatio: number = this.filterDataService.bugRatio;
    @Input('testCoverage') testCoverage: number = this.filterDataService.testCoverage;
    @Input('monthYear') monthYear: string = "JAN '18";
    @Input('totalRLMReleaseCount') totalRLMReleaseCount: number = this.filterDataService.appReleaseCount;
    projects: Project[] = this.filterDataService.projects;
    public buildsResponseData = [];
    public planningResponseData = [];
    subscription: Subscription;
    isRlmApplication: Boolean = false;
    constructor(private appService: AppService, private filterDataService: FilterDataService, private eRef: ElementRef) {
        // if (this.appService.checkCredentials()) {
        //     this.subscription = this.appService.getProject().subscribe(projects => {
        //         this.projectsCount = projects.length;
        //     });
        // }        
        this.filterDataService.appReleaseCountUpdateEvent.subscribe(appReleaseCount =>{
            this.totalRLMReleaseCount = appReleaseCount;
        });
    }
    ngAfterViewInit() {
    }

    ngOnInit() {
        this.subscription = this.filterDataService.filterServiceProjectsLoadingEvent.subscribe((res) => {
            this.projects = res;
            this.projectsCount = res.length;
            this.technicalDebt = this.filterDataService.technicalDebt;
            this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
            this.bugRatio = this.filterDataService.bugRatio;
            this.testCoverage = this.filterDataService.testCoverage;
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    @Output() dashboardEvent = new EventEmitter();
    @Output() timeFilterEvent = new EventEmitter();
    updateFilterList(event, filterType: string) {
        switch (filterType) {
            case 'Type':                
                this.dashboardEvent.emit(event);
                break;
            case 'Health':                
                this.dashboardEvent.emit(event);
            break;
            case 'Manager':
                this.dashboardEvent.emit(event);
            break;
            case 'LoB':
                this.dashboardEvent.emit(event);
            break;
            case 'Region':
                this.dashboardEvent.emit(event);
            break;
            case 'Technology':
                this.dashboardEvent.emit(event);
            break;
            case 'Time':
                let month:string = event.selectedMonth;
                let year: string = event.selectedYear;
                this.monthYear = month.toUpperCase()+' \''+year.substring(year.length-2,year.length);
                this.timeFilterEvent.emit(event);
            break;
        }

    }

    updateProjectsCount() {
        this.projectsCount = this.filterDataService.projectsCount;
        this.technicalDebt = this.filterDataService.technicalDebt;
        this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
        this.bugRatio = this.filterDataService.bugRatio;
        this.testCoverage = this.filterDataService.testCoverage;
    }
    updateBuildsData() {
        console.log('update builds', this.buildsResponseData);
        console.log(JSON.stringify(this.buildsResponseData));
        console.log('builds length', this.buildsResponseData.length);
    }
    updatePlanningData() {
        console.log('update planning', this.planningResponseData);
        console.log(JSON.stringify(this.planningResponseData));
        console.log('planning length', this.planningResponseData.length);
    }
}