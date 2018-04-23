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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var filterdata_service_1 = require("../../services/filterdata.service");
var dashboard_component_1 = require("../dashboard/dashboard.component");
var material_1 = require("@angular/material");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, dialog, appService, router, filterDataService) {
        /* function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        } */
        this.http = http;
        this.dialog = dialog;
        this.appService = appService;
        this.router = router;
        this.filterDataService = filterDataService;
        this.templateName = [];
        this.isRlmApplication = false;
        this.projects = this.filterDataService.projects;
        this.filteredProjects = [];
        this.TileFigures = {
            development: 0,
            maintainence: 0,
            stable: 0,
            warning: 0,
            atrisk: 0,
            total: 0
        };
        this.types = ["Weekly", "Montly", "Quarterly"];
        this.months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.years = [];
        this.selectedValue = "";
        this.filterSelected = null;
        this.newprojects = [];
        this.timeFilteringDropdownIsHidden = true;
        this.appEvent = new core_1.EventEmitter();
        // Close the dropdown if the user clicks outside of it
        $('#semanticDropdown').dropdown();
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
        if (sessionStorage.getItem("is_reloaded"))
            sessionStorage.setItem("is_reloaded", true);
        var selectedType = 'All';
        var selectedStatus = 'All';
        //  $(document).ready(function(){
        // $('[data-toggle="tooltip"]').tooltip(); 
        //});
        function getFilterElement(thisRow, thisTag) {
            var thisElem = thisRow.children('td.projectDetailsTab')[0].children[thisTag];
            // console.log(thisElem);
            return thisElem;
        }
        function filter(filterType, filterStatus) {
            if (filterType === void 0) { filterType = selectedType; }
            if (filterStatus === void 0) { filterStatus = selectedStatus; }
            showAllProjects();
            $('#ProjectsTableWrapper tbody tr').each(function (i, row) {
                if (filterType !== 'All' && filterStatus !== 'All') {
                    if (getFilterElement($(row), 0).outerHTML[79] === filterType[2]
                        && getFilterElement($(row), 2).className[20] === filterStatus[1]) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                }
                else if (filterType !== 'All' && filterStatus === 'All') {
                    if (getFilterElement($(row), 0).outerHTML[79] === filterType[2]) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                }
                else if (filterType === 'All' && filterStatus !== 'All') {
                    if (getFilterElement($(row), 2).className[20] === filterStatus[1]) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                }
                else {
                    $(this).show();
                }
            });
        }
        function switchTabs(thisTab, newTab) {
            $('#OnboardingButton').addClass('projectsButtonsHidden');
            $('#SearchButton').addClass('projectsButtonsHidden');
            thisTab.parent().children().removeClass('selected');
            thisTab.addClass('selected');
            thisTab.parent().siblings().children().addClass('hidden');
            $('.detailsRow').removeClass('selected');
            $('#GridView').removeClass('hidden');
            $(newTab).addClass('selected');
        }
        function switchTiles(thisTile) {
            thisTile.parent().siblings().addClass('selected');
            thisTile.removeClass('removed');
            thisTile.siblings().addClass('removed');
            return thisTile.get()[0].lastElementChild.innerHTML;
        }
        function resetTiles(thisTile) {
            thisTile.parent().removeClass('selected');
            thisTile.parent().siblings().children().removeClass('removed');
            return 'All';
        }
        function showAllProjects() {
            $('#GridView').addClass('hidden');
            $('#OnboardingButton').removeClass('projectsButtonsHidden');
            $('#SearchButton').removeClass('projectsButtonsHidden');
            $('.detailsRow').removeClass('selected');
            $('.selectableTab').siblings().removeClass('selected');
            $('#ProjectsTableWrapper tbody tr').children().removeClass('hidden');
        }
        $(document).ready(function () {
            // $('#ProjectType .tile').click(function () {
            //     filter(selectedType = switchTiles($(this)), selectedStatus);
            // });
            // $('#ProjectStatus .tile').click(function () {
            //     filter(selectedType, selectedStatus = switchTiles($(this)));
            // });
            // $('[data-toggle="tooltip"]').tooltip(); 
            $('#ProjectType i.material-icons.undo').click(function () {
                filter(selectedType = resetTiles($(this)), selectedStatus);
            });
            $('#ProjectStatus i.material-icons.undo').click(function () {
                filter(selectedType, selectedStatus = resetTiles($(this)));
            });
            // $('#ProjectsTable').on('click', '.projectDetailsTab', function () {
            //     switchTabs($(this), '#ProjectDetailsRow');
            // }); // Commented till functionality is added !!!add selectableTab class!!!
            $('#ProjectsTable').on('click', '.versionDetailsTab', function () {
                switchTabs($(this), '#VersionDetailsRow');
            });
            $('#ProjectsTable').on('click', '.velocityDetailsTab', function () {
                switchTabs($(this), '#VelocityDetailsRow');
            });
            $('#ProjectsTable').on('click', '.bugDetailsTab', function () {
                switchTabs($(this), '#BugDetailsRow');
            });
            $('#ProjectsTable').on('click', '.codeDetailsTab', function () {
                switchTabs($(this), '#CodeDetailsRow');
            });
            $('#SearchField').keyup(function () {
                $('.tile').removeClass('removed');
                $('.head').removeClass('selected');
                $('#ProjectsTableWrapper tbody tr').each(function (i, row) {
                    if (getFilterElement($(row), 1).innerHTML.toLowerCase().includes($('#SearchField').val().toLowerCase())) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                });
            });
            $('#GridView').click(function () {
                showAllProjects();
            });
            //      $('#personalYearPicker').datepicker({
            //       minViewMode: 2,
            //  format: 'yyyy',
            //  startDate: '2010',
            //  endDate: new Date()
            //   });
            //    $('#personalMonthPicker').datepicker({
            //        minViewMode: 1,
            //    autoclose: true,
            //    format: 'mm'
            //   });
        });
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        //$('[data-toggle="tooltip"]').tooltip();
    };
    HomeComponent.prototype.clearProject = function () {
        $('#templateModal').modal('hide');
        this.appService.clearFields();
    };
    HomeComponent.prototype.templateProject = function (templateName) {
        var _this = this;
        $('#templateModal').modal('hide');
        this.appService.clearFields();
        this.http.get('https://devops.ltimosaic.com/DemoPortalService/api/template').subscribe(function (res) {
            _this.allTemplates = res.json();
            _this.allTemplates.forEach(function (i) {
                if (templateName == i.template_name) {
                    _this.appService.alm = i.project_tools;
                }
            });
        });
    };
    HomeComponent.prototype.deleteTemplate = function (templateName) {
        var _this = this;
        console.log(templateName);
        /*  let myHeaders = new Headers();
         myHeaders.append('Content-Type', 'application/json');
         let myParams = new URLSearchParams();
         myParams.append('template_name', templateName);
         let options = new RequestOptions({ headers: myHeaders, params: myParams }); */
        this.http.post('https://devops.ltimosaic.com/DemoPortalService/api/delete/template?template_name=' + templateName, new Headers().append('Content-Type', 'application/json'))
            .subscribe(function (res) {
            console.log("Deleted Template");
            _this.templateName = _this.templateName.filter(function (name) { return name !== templateName; });
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.updateSelProj = function (p, id, key) {
        this.appService.emitNavChangeEvent(key);
        this.appService.setTrue = true;
        this.appService.selectedProject = p;
        this.appService.selectedProjectId = id;
        this.appService.selectedProjectKey = key;
        window.localStorage.setItem(this.appService.selectedProject.project_key, key);
        this.privatekey = window.localStorage.getItem(this.appService.selectedProject.project_key);
        this.appService.emitNavChangeEvent1(this.privatekey);
        this.appService.emitNavChangeEvent2(p.project_name, p.project_organization.manager);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterDataService.initializeData();
        this.http.get('https://devops.ltimosaic.com/DemoPortalService/api/template').subscribe(function (res) {
            _this.allTemplates = res.json();
            _this.allTemplates.forEach(function (i) {
                _this.templateName.push(i.template_name);
            });
        });
        // this.appService.getCodeCoverage().subscribe(codeCoverage => {
        //             this.codeCoverage = codeCoverage;})
        // this.appService.getSprint().subscribe(sprints => {
        //     this.sprints = sprints;
        // })
        // this.appService.getReleaseCompletion().subscribe(releaseCompletion => {
        //     this.releaseCompletion = releaseCompletion;
        // })
        //   this.appService. getCodeQualityData().subscribe(codeQuality => {
        //                 this.codeQuality = codeQuality;})
        var d = new Date("01 " + "July 2013");
        this.first = d.getFullYear();
        var s = new Date("01 " + "May 2018");
        this.second = s.getFullYear();
        for (var i = this.first; i <= this.second; i++) {
            this.years.push(i);
        }
        // if (this.appService.checkCredentials()) {
        //     this.appService.getProject().subscribe(projects => {
        //         this.projects = projects;
        //         for (var i = 0; i < this.projects.length; i++) {
        //             this.appService.keys = this.projects[i].project_key
        //             if (this.projects[i].project_type === "Development") {
        //                 this.TileFigures.development += 100 / this.projects.length;
        //             }
        //             if (this.projects[i].project_type === "Maintenance") {
        //                 this.TileFigures.maintainence += 100 / this.projects.length;
        //             }
        //             if (this.projects[i].project_health) {
        //                 this.TileFigures.total += 1;
        //             }
        //         }
        //         for (var i = 0; i < this.projects.length; i++) {
        //             if (this.projects[i].project_health === "Smooth") {
        //                 this.TileFigures.stable += 100 / this.TileFigures.total;
        //             }
        //             if (this.projects[i].project_health === "Warning") {
        //                 this.TileFigures.warning += 100 / this.TileFigures.total;
        //             }
        //             if (this.projects[i].project_health === "At Risk") {
        //                 this.TileFigures.atrisk += 100 / this.TileFigures.total;
        //             }
        //         }
        //         this.TileFigures.development = Math.floor(this.TileFigures.development);
        //         this.TileFigures.maintainence = Math.ceil(this.TileFigures.maintainence);
        //         this.TileFigures.stable = Math.floor(this.TileFigures.stable);
        //         this.TileFigures.warning = Math.ceil(this.TileFigures.warning);
        //         this.TileFigures.atrisk = Math.ceil(this.TileFigures.atrisk);
        //     });
        // }
        this.subscription = this.filterDataService.filterServiceProjectsLoadingEvent.subscribe(function (res) {
            _this.projects = res;
            if (_this.appService.checkCredentials()) {
                for (var i_1 = 0; i_1 < _this.projects.length; i_1++) {
                    _this.appService.keys = _this.projects[i_1].project_key;
                    if (_this.projects[i_1].project_type === "Development") {
                        _this.TileFigures.development += 100 / _this.projects.length;
                    }
                    if (_this.projects[i_1].project_type === "Maintenance") {
                        _this.TileFigures.maintainence += 100 / _this.projects.length;
                    }
                    if (_this.projects[i_1].project_health) {
                        _this.TileFigures.total += 1;
                    }
                }
                for (var i_2 = 0; i_2 < _this.projects.length; i_2++) {
                    if (_this.projects[i_2].project_health === "Stable") {
                        _this.TileFigures.stable += 100 / _this.TileFigures.total;
                    }
                    if (_this.projects[i_2].project_health === "Warning") {
                        _this.TileFigures.warning += 100 / _this.TileFigures.total;
                    }
                    if (_this.projects[i_2].project_health === "At Risk") {
                        _this.TileFigures.atrisk += 100 / _this.TileFigures.total;
                    }
                }
                _this.TileFigures.development = Math.floor(_this.TileFigures.development);
                _this.TileFigures.maintainence = Math.ceil(_this.TileFigures.maintainence);
                _this.TileFigures.stable = Math.floor(_this.TileFigures.stable);
                _this.TileFigures.warning = Math.ceil(_this.TileFigures.warning);
                _this.TileFigures.atrisk = Math.ceil(_this.TileFigures.atrisk);
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    HomeComponent.prototype.onChange = function (value) {
        this.selectedValue = value;
        this.appService.setWeek(value);
    };
    HomeComponent.prototype.onChangeYear = function (value) {
        this.selectedValueYear = value;
        this.appService.setYear(value);
    };
    HomeComponent.prototype.onChangeMonth = function (value) {
        this.selectedValueMonth = value;
        for (var i = 0; i <= this.months.length; i++) {
            if (value == this.months[i]) {
                this.appService.setMonth(i + 1);
            }
        }
    };
    HomeComponent.prototype.filterProjectTable2 = function (value) {
        var _this = this;
        this.newprojects = [];
        var newObj = {
        //"project_type": { $in: this.filterDataService.appliedTypeFilters },
        //"project_health": { $in: this.filterDataService.appliedHealthFilters }
        };
        if (this.filterDataService.appliedTypeFilters.length > 0) {
            newObj["project_type"] = { $in: this.filterDataService.appliedTypeFilters };
        }
        if (this.filterDataService.appliedHealthFilters.length > 0) {
            newObj["project_health"] = { $in: this.filterDataService.appliedHealthFilters };
        }
        if (this.filterDataService.appliedTechnologyFilters.length > 0) {
            newObj["project_organization.technology"] = { $in: this.filterDataService.appliedTechnologyFilters };
        }
        if (this.filterDataService.appliedManagerFilters.length > 0) {
            newObj["project_organization.manager"] = { $in: this.filterDataService.appliedManagerFilters };
        }
        if (this.filterDataService.appliedLobFilters.length > 0) {
            newObj["project_organization.line_of_business"] = { $in: this.filterDataService.appliedLobFilters };
        }
        if (this.filterDataService.appliedRegionFilters.length > 0) {
            newObj["project_organization.region"] = { $in: this.filterDataService.appliedRegionFilters };
        }
        this.appService.getProjectWithFilters(newObj).subscribe(function (projects) {
            if (projects) {
                _this.projects = projects;
                var obj = _this.projects.reduce(function (starter, project) {
                    starter.technicalDebtTotal += project.project_metrics != undefined ? project.project_metrics.technical_debt != undefined ? project.project_metrics.technical_debt : 0 : 0;
                    starter.buildSuccessRatioTotal += project.project_metrics != undefined ? project.project_metrics.build_success_ratio != undefined ? project.project_metrics.build_success_ratio : 0 : 0;
                    starter.bugRatioTotal += project.project_metrics != undefined ? project.project_metrics.bug_ratio != undefined ? project.project_metrics.bug_ratio : 0 : 0;
                    starter.testCoverageTotal += project.project_metrics != undefined ? project.project_metrics.test_coverage != undefined ? project.project_metrics.test_coverage : 0 : 0;
                    project.project_health == 'Stable' ? starter.stableProjectCount++ : starter.stableProjectCount;
                    project.project_health == 'Warning' ? starter.warningProjectCount++ : starter.warningProjectCount;
                    project.project_health == 'At Risk' ? starter.atRiskProjectCount++ : starter.atRiskProjectCount;
                    return starter;
                }, {
                    technicalDebtTotal: 0,
                    buildSuccessRatioTotal: 0,
                    bugRatioTotal: 0,
                    testCoverageTotal: 0,
                    stableProjectCount: 0,
                    warningProjectCount: 0,
                    atRiskProjectCount: 0
                });
                _this.filterDataService.technicalDebt = Math.round(obj.technicalDebtTotal / _this.projects.length);
                _this.filterDataService.buildSuccessRatio = Math.round(obj.buildSuccessRatioTotal / _this.projects.length);
                _this.filterDataService.bugRatio = Math.round(obj.bugRatioTotal / _this.projects.length);
                _this.filterDataService.testCoverage = Math.round(obj.testCoverageTotal / _this.projects.length);
                _this.filterDataService.stableProjectCount = obj.stableProjectCount;
                _this.filterDataService.warningProjectCount = obj.warningProjectCount;
                _this.filterDataService.atRiskProjectCount = obj.atRiskProjectCount;
                _this.filterDataService.projectsCount = _this.projects.length;
            }
            else {
                _this.projects = [];
                _this.filterDataService.technicalDebt = 0;
                _this.filterDataService.buildSuccessRatio = 0;
                _this.filterDataService.bugRatio = 0;
                _this.filterDataService.testCoverage = 0;
                _this.filterDataService.stableProjectCount = 0;
                _this.filterDataService.warningProjectCount = 0;
                _this.filterDataService.atRiskProjectCount = 0;
                _this.filterDataService.projectsCount = 0;
            }
            _this.filterDataService.filterServiceProjectsFilterEvent.next(projects);
            _this.dashboardComponent.updateProjectsCount();
        });
    };
    HomeComponent.prototype.goBack = function () {
        this.filterSelected = null;
    };
    HomeComponent.prototype.filterProjectTable = function (appliedTypeFilters) {
        var _this = this;
        if (this.appService.checkCredentials()) {
            this.appService.getProject().subscribe(function (projects) {
                _this.projects = projects;
                _this.filteredProjects = [];
                if (appliedTypeFilters != undefined) {
                    if (appliedTypeFilters.length > 0) {
                        for (var i = 0; i < _this.projects.length; i++) {
                            for (var j = 0; j < appliedTypeFilters.length; j++) {
                                if (_this.projects[i].project_type == appliedTypeFilters[j]) {
                                    //this.filteredProjects = this.projects.splice(i, 1);
                                    _this.filteredProjects.push(_this.projects[i]);
                                }
                            }
                        }
                        _this.projects = _this.filteredProjects;
                        _this.filterDataService.projectsCount = _this.projects.length;
                        _this.filterDataService.filterServiceProjectsFilterEvent.next();
                        _this.dashboardComponent.updateProjectsCount();
                    }
                    else {
                        _this.projects = projects;
                        _this.filterDataService.projectsCount = _this.projects.length;
                        _this.filterDataService.filterServiceProjectsFilterEvent.next();
                        _this.dashboardComponent.updateProjectsCount();
                    }
                }
            });
        }
    };
    HomeComponent.prototype.myFunction = function () {
        //document.getElementById("myDropdown").classList.toggle("show");
        if (this.timeFilteringDropdownIsHidden) {
            this.timeFilteringDropdownIsHidden = false;
        }
        else {
            this.timeFilteringDropdownIsHidden = true;
        }
    };
    HomeComponent.prototype.timeFilterOnKPI = function (event) {
        //console.log(event);
    };
    HomeComponent.prototype.openDialog = function () {
        // const dialogRef = this.dialog.open(TemplateComponent, {
        //     width: '250px'
        // });
    };
    __decorate([
        core_1.ViewChild(dashboard_component_1.DashboardComponent),
        __metadata("design:type", dashboard_component_1.DashboardComponent)
    ], HomeComponent.prototype, "dashboardComponent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "appEvent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            encapsulation: core_1.ViewEncapsulation.Emulated
        }),
        __metadata("design:paramtypes", [http_1.Http, material_1.MdDialog, app_service_1.AppService, router_1.Router, filterdata_service_1.FilterDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
