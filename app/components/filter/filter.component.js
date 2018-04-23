"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../../services/app.service");
var filterdata_service_1 = require("../../services/filterdata.service");
var FilterComponent = /** @class */ (function () {
    function FilterComponent(appService, dataService) {
        this.appService = appService;
        this.dataService = dataService;
        this.projectTypes = this.dataService.projectTypes;
        this.projectHealth = this.dataService.projectHealth;
        this.projectManagers = this.dataService.projectManagers;
        this.projectLob = this.dataService.projectLob;
        this.projectRegion = this.dataService.projectRegion;
        this.appliedTypeFilters = Array();
        this.appliedHealthFilters = Array();
        this.appliedManagerFilters = Array();
        this.appliedLoBFilters = Array();
        this.appliedRegionFilters = Array();
        this.projects = [];
        this.isFilterCollapsed = false;
        this.isFilterApplied = false;
        this.isTypeFilterApplied = false;
        this.isHealthFilterApplied = false;
        this.isManagerFilterApplied = false;
        this.isLobFilterApplied = false;
        this.isRegionFilterApplied = false;
    }
    FilterComponent.prototype.ngAfterViewInit = function () {
        // $('#btnFilterType').tooltip();
    };
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.appService.checkCredentials()) {
            this.appService.getProject().subscribe(function (projects) {
                _this.projects = projects;
                for (var i = 0; i < _this.projects.length; i++) {
                    //Push filter value in each filter category
                    //Push data into Project Type filter
                    if (_this.projectTypes.indexOf(_this.projects[i].project_type) == -1) {
                        _this.dataService.projectTypes.push(_this.projects[i].project_type);
                    }
                    //Push data into Project Health filter
                    if (_this.projectHealth.indexOf(_this.projects[i].project_health) == -1) {
                        _this.dataService.projectHealth.push(_this.projects[i].project_health);
                    }
                    //Push data into Project Manager filter
                    if (_this.projectManagers.indexOf(_this.projects[i].project_organization.manager) == -1) {
                        _this.dataService.projectManagers.push(_this.projects[i].project_organization.manager);
                    }
                    //Push data into Project LoB filter
                    if (_this.projectLob.indexOf(_this.projects[i].project_organization.line_of_business) == -1) {
                        _this.dataService.projectLob.push(_this.projects[i].project_organization.line_of_business);
                    }
                    //Push data into Project Region filter
                    if (_this.projectRegion.indexOf(_this.projects[i].project_organization.region) == -1) {
                        _this.dataService.projectRegion.push(_this.projects[i].project_organization.region);
                    }
                }
            });
        }
    };
    //Collapse/Uncollapse filter panel
    FilterComponent.prototype.collapseFilterPanel = function () {
        if (this.isFilterCollapsed) {
            this.isFilterCollapsed = false;
        }
        else {
            this.isFilterCollapsed = true;
        }
    };
    //populate applied filters on change evenet
    FilterComponent.prototype.addFilter = function (filter, value) {
        switch (filter) {
            case "Type":
                this.appliedTypeFilters.push(value);
                document.getElementById('btnFilterType').style.backgroundColor = "#3498DB";
                this.isTypeFilterApplied = true;
                break;
            case "Health":
                this.appliedHealthFilters.push(value);
                document.getElementById('btnHealthType').style.backgroundColor = "#3498DB";
                this.isHealthFilterApplied = true;
                break;
            case "Manager":
                this.appliedManagerFilters.push(value);
                document.getElementById('btnManagerType').style.backgroundColor = "#3498DB";
                this.isManagerFilterApplied = true;
                break;
            case "LoB":
                this.appliedLoBFilters.push(value);
                document.getElementById('btnLobType').style.backgroundColor = "#3498DB";
                this.isLobFilterApplied = true;
                break;
            case "Region":
                this.appliedRegionFilters.push(value);
                document.getElementById('btnRegionType').style.backgroundColor = "#3498DB";
                this.isRegionFilterApplied = true;
                break;
            default:
                throw "unknown filter type";
        }
    };
    //remove filter value from applied filters when user clicks on remove button
    FilterComponent.prototype.removeAppliedFilter = function (filter, value) {
        var index = 0;
        switch (filter) {
            case "Type":
                index = this.appliedTypeFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedTypeFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if (this.appliedTypeFilters.length <= 0) {
                    document.getElementById('btnFilterType').style.backgroundColor = "#DDDDDD";
                    this.isTypeFilterApplied = false;
                }
                break;
            case "Health":
                index = this.appliedHealthFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedHealthFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if (this.appliedHealthFilters.length <= 0) {
                    document.getElementById('btnHealthType').style.backgroundColor = "#DDDDDD";
                    this.isHealthFilterApplied = true;
                }
                break;
            case "Manager":
                index = this.appliedManagerFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedManagerFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if (this.appliedManagerFilters.length <= 0) {
                    document.getElementById('btnManagerType').style.backgroundColor = "#DDDDDD";
                    this.isManagerFilterApplied = true;
                }
                break;
            case "LoB":
                index = this.appliedLoBFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedLoBFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if (this.appliedLoBFilters.length <= 0) {
                    document.getElementById('btnLobType').style.backgroundColor = "#DDDDDD";
                    this.isLobFilterApplied = true;
                }
                break;
            case "Region":
                index = this.appliedRegionFilters.indexOf(value);
                if (index !== -1) {
                    this.appliedRegionFilters.splice(index, 1);
                    var dynamicFilterElement = document.getElementById("dynamicFilterElement" + filter + value);
                    dynamicFilterElement.checked = false;
                }
                if (this.appliedRegionFilters.length <= 0) {
                    document.getElementById('btnRegionType').style.backgroundColor = "#DDDDDD";
                    this.isRegionFilterApplied = true;
                }
                break;
            default:
                throw "unknown filter type";
        }
    };
    //change event on Type checkbox, to add the select value in applied filters
    FilterComponent.prototype.typeAppliedFilter = function (event, filterType, filterValue) {
        if (event.target.checked) {
            this.addFilter(filterType, filterValue);
        }
        else {
            this.removeAppliedFilter(filterType, filterValue);
        }
    };
    FilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
