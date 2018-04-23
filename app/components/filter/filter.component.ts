import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

import { FilterDataService } from '../../services/filterdata.service';

@Component({
    moduleId: module.id,
    selector: 'filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {
    public projectTypes: Array<string> = this.dataService.projectTypes;
    public projectHealth: Array<string> = this.dataService.projectHealth;
    public projectManagers: Array<string> = this.dataService.projectManagers;
    public projectLob: Array<string> = this.dataService.projectLob;
    public projectRegion: Array<string> = this.dataService.projectRegion;
    public appliedTypeFilters: Array<string> = Array();
    public appliedHealthFilters: Array<string> = Array();
    public appliedManagerFilters: Array<string> = Array();
    public appliedLoBFilters: Array<string> = Array();
    public appliedRegionFilters: Array<string> = Array();
    projects = [];
    public isFilterCollapsed: Boolean = false;
    public isFilterApplied : Boolean = false;
    public isTypeFilterApplied : Boolean = false;
    public isHealthFilterApplied : Boolean = false;
    public isManagerFilterApplied : Boolean = false;
    public isLobFilterApplied : Boolean = false;
    public isRegionFilterApplied : Boolean = false;
    constructor(private appService: AppService, private dataService: FilterDataService) {

    }

    ngAfterViewInit(){
        // $('#btnFilterType').tooltip();
    }

    ngOnInit() {
        if (this.appService.checkCredentials()) {
            this.appService.getProject().subscribe(projects => {
                this.projects = projects;
                for (var i = 0; i < this.projects.length; i++) {
                    //Push filter value in each filter category
                    //Push data into Project Type filter
                    if (this.projectTypes.indexOf(this.projects[i].project_type) == -1) {
                        this.dataService.projectTypes.push(this.projects[i].project_type);
                    }
                    //Push data into Project Health filter
                    if (this.projectHealth.indexOf(this.projects[i].project_health) == -1) {
                        this.dataService.projectHealth.push(this.projects[i].project_health);
                    }
                    //Push data into Project Manager filter
                    if (this.projectManagers.indexOf(this.projects[i].project_organization.manager) == -1) {
                        this.dataService.projectManagers.push(this.projects[i].project_organization.manager);
                    }
                    //Push data into Project LoB filter
                    if (this.projectLob.indexOf(this.projects[i].project_organization.line_of_business) == -1) {
                        this.dataService.projectLob.push(this.projects[i].project_organization.line_of_business);
                    }
                    //Push data into Project Region filter
                    if (this.projectRegion.indexOf(this.projects[i].project_organization.region) == -1) {
                        this.dataService.projectRegion.push(this.projects[i].project_organization.region);
                    }
                }
            });
        }
    }

    //Collapse/Uncollapse filter panel
    collapseFilterPanel() {
        if (this.isFilterCollapsed) {
            this.isFilterCollapsed = false;
        } else {
            this.isFilterCollapsed = true;
        }
    }

    //populate applied filters on change evenet
    addFilter(filter: string, value: string) {
        switch (filter) {
            case "Type":
                this.appliedTypeFilters.push(value);
                document.getElementById('btnFilterType').style.backgroundColor="#3498DB";
                this.isTypeFilterApplied=true;
                break;
            case "Health":
                this.appliedHealthFilters.push(value);
                document.getElementById('btnHealthType').style.backgroundColor="#3498DB";
                this.isHealthFilterApplied=true;
                break;
            case "Manager":
                this.appliedManagerFilters.push(value);
                document.getElementById('btnManagerType').style.backgroundColor="#3498DB";
                this.isManagerFilterApplied=true;
                break;
            case "LoB":
                this.appliedLoBFilters.push(value);
                document.getElementById('btnLobType').style.backgroundColor="#3498DB";
                this.isLobFilterApplied=true;
                break;
            case "Region":
                this.appliedRegionFilters.push(value);
                document.getElementById('btnRegionType').style.backgroundColor="#3498DB";
                this.isRegionFilterApplied=true;
                break;
            default:
                throw "unknown filter type";
        }
    }

    //remove filter value from applied filters when user clicks on remove button
    removeAppliedFilter(filter: string, value: string) {
        let index: number = 0;
        switch (filter) {
            case "Type":
                index = this.appliedTypeFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedTypeFilters.splice(index, 1);
                    let dynamicFilterElement: Element = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if(this.appliedTypeFilters.length<=0){
                    document.getElementById('btnFilterType').style.backgroundColor="#DDDDDD";
                    this.isTypeFilterApplied=false;
                }
                break;
            case "Health":
                index = this.appliedHealthFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedHealthFilters.splice(index, 1);
                    let dynamicFilterElement: Element = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if(this.appliedHealthFilters.length<=0){
                    document.getElementById('btnHealthType').style.backgroundColor="#DDDDDD";
                    this.isHealthFilterApplied=true;
                }
                break;
            case "Manager":
                index = this.appliedManagerFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedManagerFilters.splice(index, 1);
                    let dynamicFilterElement: Element = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if(this.appliedManagerFilters.length<=0){
                    document.getElementById('btnManagerType').style.backgroundColor="#DDDDDD";
                    this.isManagerFilterApplied=true;
                }
                break;
            case "LoB":
                index = this.appliedLoBFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedLoBFilters.splice(index, 1);
                    let dynamicFilterElement: Element = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if(this.appliedLoBFilters.length<=0){
                    document.getElementById('btnLobType').style.backgroundColor="#DDDDDD";
                    this.isLobFilterApplied=true;
                }
                break;
            case "Region":
                index = this.appliedRegionFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedRegionFilters.splice(index, 1);
                    let dynamicFilterElement: Element = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if(this.appliedRegionFilters.length<=0){
                    document.getElementById('btnRegionType').style.backgroundColor="#DDDDDD";
                    this.isRegionFilterApplied=true;
                }
                break;
            default:
                throw "unknown filter type";
        }
    }

    //change event on Type checkbox, to add the select value in applied filters
    typeAppliedFilter(event, filterType: string, filterValue: string) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        } else {
            this.removeAppliedFilter(filterType, filterValue);
        }

    }
}