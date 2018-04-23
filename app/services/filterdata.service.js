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
var app_service_1 = require("./app.service");
var Subject_1 = require("rxjs/Subject");
var FilterDataService = /** @class */ (function () {
    function FilterDataService(appService) {
        this.appService = appService;
        this.isFilterApplied = false;
        this.isTypeFilterApplied = false;
        this.isHealthFilterApplied = false;
        this.isManagerFilterApplied = false;
        this.isLobFilterApplied = false;
        this.isRegionFilterApplied = false;
        this.projectTypes = new Array();
        this.projectHealth = new Array();
        this.projectManagers = new Array();
        this.projectLob = new Array();
        this.projectRegion = new Array();
        this.projectTechnology = new Array();
        this.projects = [];
        this.projectKeys = new Array();
        this.buildsResponseData = [];
        this.planningResponseData = [];
        this.appliedTypeFilters = new Array();
        this.appliedHealthFilters = new Array();
        this.appliedManagerFilters = new Array();
        this.appliedLobFilters = new Array();
        this.appliedRegionFilters = new Array();
        this.appliedTechnologyFilters = new Array();
        this.appliedTimeFilter = new Object();
        this.projectsCount = 0;
        this.projectBuilds = 0;
        this.projectStories = 0;
        this.projectBugs = 0;
        this.technicalDebt = 0;
        this.buildSuccessRatio = 0;
        this.bugRatio = 0;
        this.testCoverage = 0;
        this.stableProjectCount = 0;
        this.warningProjectCount = 0;
        this.atRiskProjectCount = 0;
        this.appReleaseCount = 0;
        this.devProjectCount = 0;
        this.mainProjectCount = 0;
        // Observable string sources
        this.filterServiceProjectsLoadingEvent = new Subject_1.Subject();
        this.filterServiceProjectsFilterEvent = new Subject_1.Subject();
        this.filterServiceBuildsEvent = new Subject_1.Subject();
        this.filterServicePlanningEvent = new Subject_1.Subject();
        this.filterServiceENVTimeFilterEvent = new Subject_1.Subject();
        this.filterServiceStatusTimeFilterEvent = new Subject_1.Subject();
        this.filterServiceProjectCountEvent = new Subject_1.Subject();
        this.appReleaseCountUpdateEvent = new Subject_1.Subject();
        this.componentMethodCallSource = new Subject_1.Subject();
        // Observable string streams
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    // Service message commands
    FilterDataService.prototype.callComponentMethod = function () {
        this.componentMethodCallSource.next();
    };
    FilterDataService.prototype.funcIsFilterApplied = function () {
        if (this.isTypeFilterApplied) {
            this.isFilterApplied = true;
        }
        return this.isFilterApplied;
    };
    FilterDataService.prototype.initializeData = function () {
        var _this = this;
        if (this.appService.checkCredentials()) {
            this.appService.getProject().subscribe(function (projects) {
                _this.projects = projects;
                if (projects) {
                    _this.projectsCount = projects.length;
                    for (var i = 0; i < _this.projects.length; i++) {
                        _this.projectKeys.push(_this.projects[i].project_key);
                        //Push filter value in each filter category
                        //Push data into Project Type filter
                        if (_this.projectTypes.indexOf(_this.projects[i].project_type) == -1) {
                            _this.projectTypes.push(_this.projects[i].project_type);
                        }
                        //Push data into Project Health filter
                        if (_this.projectHealth.indexOf(_this.projects[i].project_health) == -1) {
                            _this.projectHealth.push(_this.projects[i].project_health);
                        }
                        //Push data into Project Manager filter
                        if (_this.projectManagers.indexOf(_this.projects[i].project_organization.manager) == -1) {
                            _this.projectManagers.push(_this.projects[i].project_organization.manager);
                        }
                        //Push data into Project LoB filter
                        if (_this.projectLob.indexOf(_this.projects[i].project_organization.line_of_business) == -1) {
                            _this.projectLob.push(_this.projects[i].project_organization.line_of_business);
                        }
                        //Push data into Project Region filter
                        if (_this.projectRegion.indexOf(_this.projects[i].project_organization.region) == -1) {
                            _this.projectRegion.push(_this.projects[i].project_organization.region);
                        }
                        //Push data into Project Technology filter
                        if (_this.projectTechnology.indexOf(_this.projects[i].project_organization.technology) == -1) {
                            _this.projectTechnology.push(_this.projects[i].project_organization.technology);
                        }
                    }
                    var obj = _this.projects.reduce(function (starter, project) {
                        starter.technicalDebtTotal += project.project_metrics != undefined ? project.project_metrics.technical_debt != undefined ? project.project_metrics.technical_debt : 0 : 0;
                        starter.buildSuccessRatioTotal += project.project_metrics != undefined ? project.project_metrics.build_success_ratio != undefined ? project.project_metrics.build_success_ratio : 0 : 0;
                        starter.bugRatioTotal += project.project_metrics != undefined ? project.project_metrics.bug_ratio != undefined ? project.project_metrics.bug_ratio : 0 : 0;
                        starter.testCoverageTotal += project.project_metrics != undefined ? project.project_metrics.test_coverage != undefined ? project.project_metrics.test_coverage : 0 : 0;
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
                    _this.technicalDebt = Math.round(obj.technicalDebtTotal / _this.projects.length);
                    _this.buildSuccessRatio = Math.round(obj.buildSuccessRatioTotal / _this.projects.length);
                    _this.bugRatio = Math.round(obj.bugRatioTotal / _this.projects.length);
                    _this.testCoverage = Math.round(obj.testCoverageTotal / _this.projects.length);
                    _this.stableProjectCount = obj.stableProjectCount;
                    _this.warningProjectCount = obj.warningProjectCount;
                    _this.atRiskProjectCount = obj.atRiskProjectCount;
                    _this.devProjectCount = obj.devCount;
                    _this.mainProjectCount = obj.maintenanceCount;
                }
                else {
                    _this.projectsCount = 0;
                    _this.technicalDebt = 0;
                    _this.buildSuccessRatio = 0;
                    _this.bugRatio = 0;
                    _this.testCoverage = 0;
                    _this.stableProjectCount = 0;
                    _this.warningProjectCount = 0;
                    _this.atRiskProjectCount = 0;
                    _this.devProjectCount = 0;
                    _this.mainProjectCount = 0;
                }
                _this.filterServiceProjectsLoadingEvent.next(_this.projects);
                _this.filterServiceProjectsFilterEvent.next(_this.projects);
                _this.filterServiceProjectCountEvent.next(_this.projects);
            });
        }
    };
    FilterDataService.prototype.initializeBuildsData = function () {
        var _this = this;
        if (this.appService.checkCredentials()) {
            if (this.projectKeys.length > 0) {
                for (var i = 0; i < this.projectKeys.length; i++) {
                    var buildCount = 0;
                    this.appService.getBuildsDatas(this.projectKeys[i]).subscribe(function (res) {
                        buildCount = res.projectBuildStatus.success + res.projectBuildStatus.failure + res.projectBuildStatus.unstable + res.projectBuildStatus.aborted;
                        _this.projectBuilds += buildCount;
                        _this.buildsResponseData.push(JSON.stringify(res.projectBuildStatus));
                    }, function (error) {
                        console.log(error);
                    });
                }
                this.filterServiceBuildsEvent.next(this.projectBuilds);
            }
        }
    };
    FilterDataService.prototype.initializeQualityData = function () {
        var _this = this;
        if (this.appService.checkCredentials()) {
            if (this.projectKeys.length > 0) {
                for (var i = 0; i < this.projectKeys.length; i++) {
                    var storiesCount = 0;
                    var bugsCount = 0;
                    var processedCount = 0;
                    this.appService.getProjectPlanningDatas(this.projectKeys[i]).subscribe(function (res) {
                        storiesCount += res.projectNumbers.storyCount;
                        bugsCount += res.projectNumbers.bugCount;
                        _this.projectBugs += bugsCount;
                        _this.projectStories += storiesCount;
                        _this.planningResponseData.push(res.projectNumbers);
                        processedCount++;
                        if (processedCount == _this.projectKeys.length - 1) {
                            _this.bugRatio = Math.floor((_this.projectBugs / (_this.projectBugs + _this.projectStories)) * 100);
                            console.log('Final Bug Ratio', _this.bugRatio);
                            _this.filterServicePlanningEvent.next(_this.bugRatio);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
        }
    };
    FilterDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], FilterDataService);
    return FilterDataService;
}());
exports.FilterDataService = FilterDataService;
