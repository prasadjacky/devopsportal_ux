import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterDataService {
    isFilterApplied: Boolean = false;
    isTypeFilterApplied: Boolean = false;
    isHealthFilterApplied: Boolean = false;
    isManagerFilterApplied: Boolean = false;
    isLobFilterApplied: Boolean = false;
    isRegionFilterApplied: Boolean = false;
    projectTypes: Array<string> = new Array<string>();
    projectHealth: Array<string> = new Array<string>();
    projectManagers: Array<string> = new Array<string>();
    projectLob: Array<string> = new Array<string>();
    projectRegion: Array<string> = new Array<string>();
    projectTechnology: Array<string> = new Array<string>();
    projects = [];
    projectKeys: string[] = new Array<string>();
    buildsResponseData = [];
    planningResponseData = [];
    appliedTypeFilters: Array<string> = new Array<string>();
    appliedHealthFilters: Array<string> = new Array<string>();
    appliedManagerFilters: Array<string> = new Array<string>();
    appliedLobFilters: Array<string> = new Array<string>();
    appliedRegionFilters: Array<string> = new Array<string>();
    appliedTechnologyFilters: Array<string> = new Array<string>();
    appliedTimeFilter: Object = new Object();
    projectsCount: number = 0;
    projectBuilds: number = 0;
    projectStories: number = 0;
    projectBugs: number = 0;
    technicalDebt: number = 0;
    buildSuccessRatio: number = 0;
    bugRatio: number = 0;
    testCoverage: number = 0;
    stableProjectCount: number = 0;
    warningProjectCount: number = 0;
    atRiskProjectCount: number = 0;
    appReleaseCount: number = 0;
    devProjectCount: number = 0;
    mainProjectCount: number = 0;
    // Observable string sources
    filterServiceProjectsLoadingEvent = new Subject<any>();
    filterServiceProjectsFilterEvent = new Subject<any>();
    filterServiceBuildsEvent = new Subject<any>();
    filterServicePlanningEvent = new Subject<any>();
    filterServiceENVTimeFilterEvent = new Subject<any>();
    filterServiceStatusTimeFilterEvent = new Subject<any>();
    filterServiceProjectCountEvent = new Subject<any>();
    appReleaseCountUpdateEvent = new Subject<any>();
    private componentMethodCallSource = new Subject<any>();

    // Observable string streams
    componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    // Service message commands
    callComponentMethod() {
        this.componentMethodCallSource.next();
    }
    constructor(private appService: AppService) {

    }

    funcIsFilterApplied(): Boolean {
        if (this.isTypeFilterApplied) {
            this.isFilterApplied = true;
        }
        return this.isFilterApplied;
    }

    initializeData() {
        if (this.appService.checkCredentials()) {
            this.appService.getProject().subscribe(projects => {
                this.projects = projects;
                if (projects) {
                    this.projectsCount = projects.length;
                    for (var i = 0; i < this.projects.length; i++) {
                        this.projectKeys.push(this.projects[i].project_key);
                        //Push filter value in each filter category
                        //Push data into Project Type filter
                        if (this.projectTypes.indexOf(this.projects[i].project_type) == -1) {
                            this.projectTypes.push(this.projects[i].project_type);
                        }
                        //Push data into Project Health filter
                        if (this.projectHealth.indexOf(this.projects[i].project_health) == -1) {
                            this.projectHealth.push(this.projects[i].project_health);
                        }
                        //Push data into Project Manager filter
                        if (this.projectManagers.indexOf(this.projects[i].project_organization.manager) == -1) {
                            this.projectManagers.push(this.projects[i].project_organization.manager);
                        }
                        //Push data into Project LoB filter
                        if (this.projectLob.indexOf(this.projects[i].project_organization.line_of_business) == -1) {
                            this.projectLob.push(this.projects[i].project_organization.line_of_business);
                        }
                        //Push data into Project Region filter
                        if (this.projectRegion.indexOf(this.projects[i].project_organization.region) == -1) {
                            this.projectRegion.push(this.projects[i].project_organization.region);
                        }
                        //Push data into Project Technology filter
                        if (this.projectTechnology.indexOf(this.projects[i].project_organization.technology) == -1) {
                            this.projectTechnology.push(this.projects[i].project_organization.technology);
                        }
                    }
                    let obj = this.projects.reduce((starter, project) => {
                        starter.technicalDebtTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.technical_debt  !=  undefined  ?  project.project_metrics.technical_debt  :  0  :  0;
                        starter.buildSuccessRatioTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.build_success_ratio  !=  undefined  ?  project.project_metrics.build_success_ratio  :  0  :  0;
                        starter.bugRatioTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.bug_ratio  !=  undefined  ?  project.project_metrics.bug_ratio  :  0  :  0;
                        starter.testCoverageTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.test_coverage  !=  undefined  ?  project.project_metrics.test_coverage  :  0  :  0;
                        project.project_health == 'Stable' ? starter.stableProjectCount++ : starter.stableProjectCount;
                        project.project_health == 'Warning' ? starter.warningProjectCount++ : starter.warningProjectCount;
                        project.project_health == 'At Risk' ? starter.atRiskProjectCount++ : starter.atRiskProjectCount;
                        project.project_type == 'Development' ? starter.devCount++ : starter.devCount;
                        project.project_type == 'Maintenance' ? starter.maintenanceCount++ : starter.maintenanceCount;
                        return starter;
                    }, {
                            technicalDebtTotal: 0,
                            buildSuccessRatioTotal: 0,
                            bugRatioTotal: 0,
                            testCoverageTotal: 0,
                            stableProjectCount: 0,
                            warningProjectCount: 0,
                            atRiskProjectCount: 0,
                            devCount: 0,
                            maintenanceCount: 0
                        });
                    this.technicalDebt = Math.round(obj.technicalDebtTotal / this.projects.length);
                    this.buildSuccessRatio = Math.round(obj.buildSuccessRatioTotal / this.projects.length);
                    this.bugRatio = Math.round(obj.bugRatioTotal / this.projects.length);
                    this.testCoverage = Math.round(obj.testCoverageTotal / this.projects.length);
                    this.stableProjectCount = obj.stableProjectCount;
                    this.warningProjectCount = obj.warningProjectCount;
                    this.atRiskProjectCount = obj.atRiskProjectCount;
                    this.devProjectCount = obj.devCount;
                    this.mainProjectCount = obj.maintenanceCount;
                } else {
                    this.projectsCount = 0;
                    this.technicalDebt = 0;
                    this.buildSuccessRatio = 0;
                    this.bugRatio = 0;
                    this.testCoverage = 0;
                    this.stableProjectCount = 0;
                    this.warningProjectCount = 0;
                    this.atRiskProjectCount = 0;
                    this.devProjectCount = 0;
                    this.mainProjectCount = 0;
                }
                this.filterServiceProjectsLoadingEvent.next(this.projects);
                this.filterServiceProjectsFilterEvent.next(this.projects);
                this.filterServiceProjectCountEvent.next(this.projects);
            });
        }
    }
    initializeBuildsData() {
        if (this.appService.checkCredentials()) {
            if (this.projectKeys.length > 0) {
                for (var i = 0; i < this.projectKeys.length; i++) {
                    var buildCount = 0;
                    this.appService.getBuildsDatas(this.projectKeys[i]).subscribe(
                        res => {
                            buildCount = res.projectBuildStatus.success + res.projectBuildStatus.failure + res.projectBuildStatus.unstable + res.projectBuildStatus.aborted;
                            this.projectBuilds += buildCount;
                            this.buildsResponseData.push(JSON.stringify(res.projectBuildStatus));
                        },
                        error => {
                            console.log(error);
                        });
                }
                this.filterServiceBuildsEvent.next(this.projectBuilds);
            }
        }
    }
    initializeQualityData() {
        if (this.appService.checkCredentials()) {
            if (this.projectKeys.length > 0) {
                for (var i = 0; i < this.projectKeys.length; i++) {
                    var storiesCount = 0;
                    var bugsCount = 0;
                    var processedCount = 0;
                    this.appService.getProjectPlanningDatas(this.projectKeys[i]).subscribe(res => {
                        storiesCount += res.projectNumbers.storyCount;
                        bugsCount += res.projectNumbers.bugCount;
                        this.projectBugs += bugsCount;
                        this.projectStories += storiesCount;
                        this.planningResponseData.push(res.projectNumbers);
                        processedCount++;
                        if (processedCount == this.projectKeys.length - 1) {
                            this.bugRatio = Math.floor((this.projectBugs / (this.projectBugs + this.projectStories)) * 100);
                            console.log('Final Bug Ratio', this.bugRatio);
                            this.filterServicePlanningEvent.next(this.bugRatio);
                        }
                    },
                        err => {
                            console.log(err);
                        });
                }
            }
        }
    }
}