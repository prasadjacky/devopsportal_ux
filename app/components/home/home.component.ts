import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { Http, RequestOptions, URLSearchParams  } from '@angular/http';
import { FilterDataService } from '../../services/filterdata.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { MdDialog } from '@angular/material';
import {TemplateComponent} from '../../templateModule/template.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.Emulated

})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    templateName: any[]=[];
    allTemplates: any;
    isRlmApplication: Boolean = false;
    ngAfterViewInit() {
        //$('[data-toggle="tooltip"]').tooltip();
    }
    projects = this.filterDataService.projects;
    filteredProjects = [];
    TileFigures = {
        development: 0,
        maintainence: 0,
        stable: 0,
        warning: 0,
        atrisk: 0,
        total: 0
    }
    public types = ["Weekly", "Montly", "Quarterly"]
    public months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    public years: any[] = [];
    public selectedValue: any = "";
    public selectedValueMonth: any;
    public selectedValueYear: any;
    public first;
    public second;
    public sprints: any;
    public bugRatio: any;
    public codeCoverage: any;
    public releaseCompletion: any;
    public codeQuality: any;
    public filterSelected: any = null;
    public newprojects: any[] = [];
    public timeFilteringDropdownIsHidden = true;
    @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;
    subscription: Subscription;
    constructor(private http: Http,public dialog: MdDialog, private appService: AppService, private router: Router, private filterDataService: FilterDataService) {
        /* function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        } */

        // Close the dropdown if the user clicks outside of it
        $('#semanticDropdown').dropdown();
        window.onclick = function (event) {
            if (!(<HTMLInputElement>event.target).matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        if (sessionStorage.getItem("is_reloaded"))
            sessionStorage.setItem("is_reloaded", true);

        let selectedType = 'All';
        let selectedStatus = 'All';
        //  $(document).ready(function(){
        // $('[data-toggle="tooltip"]').tooltip(); 
        //});
        function getFilterElement(thisRow, thisTag) {
            let thisElem = thisRow.children('td.projectDetailsTab')[0].children[thisTag]
            // console.log(thisElem);
            return thisElem;
        }
        function filter(filterType = selectedType, filterStatus = selectedStatus) {
            showAllProjects();
            $('#ProjectsTableWrapper tbody tr').each(function (i, row) {
                if (filterType !== 'All' && filterStatus !== 'All') {
                    if (getFilterElement($(row), 0).outerHTML[79] === filterType[2]
                        && getFilterElement($(row), 2).className[20] === filterStatus[1]) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                } else if (filterType !== 'All' && filterStatus === 'All') {
                    if (getFilterElement($(row), 0).outerHTML[79] === filterType[2]) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                } else if (filterType === 'All' && filterStatus !== 'All') {
                    if (getFilterElement($(row), 2).className[20] === filterStatus[1]) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                } else {
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
                    } else {
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

    clearProject() {
        $('#templateModal').modal('hide');
        this.appService.clearFields();
    }
    templateProject(templateName:String) {
        $('#templateModal').modal('hide');
        this.appService.clearFields();
        this.http.get('https://devops.ltimosaic.com/DemoPortalService/api/template').subscribe(res => {
            this.allTemplates = res.json();
            this.allTemplates.forEach(i => {
                if(templateName==i.template_name){
                    this.appService.alm=i.project_tools;
                }
                
            });
        });
    }
    deleteTemplate(templateName:string){
        console.log(templateName);
       /*  let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        let myParams = new URLSearchParams();
        myParams.append('template_name', templateName);	
        let options = new RequestOptions({ headers: myHeaders, params: myParams }); */
        this.http.post('https://devops.ltimosaic.com/DemoPortalService/api/delete/template?template_name='+templateName, new Headers().append('Content-Type', 'application/json'))
            .subscribe(res => {
                        console.log("Deleted Template");
                        this.templateName = this.templateName.filter(name => name !== templateName);
                }, err => {
                    console.log(err);
            });        
    }
    public privatekey;
    public privatename;
    updateSelProj(p, id, key) {
        this.appService.emitNavChangeEvent(key)
        this.appService.setTrue = true;
        this.appService.selectedProject = p;
        this.appService.selectedProjectId = id;
        this.appService.selectedProjectKey = key;
        window.localStorage.setItem(this.appService.selectedProject.project_key, key);
        this.privatekey = window.localStorage.getItem(this.appService.selectedProject.project_key)
        this.appService.emitNavChangeEvent1(this.privatekey)
        this.appService.emitNavChangeEvent2(p.project_name, p.project_organization.manager)
    }

    ngOnInit() {

    this.filterDataService.initializeData();

    this.http.get('https://devops.ltimosaic.com/DemoPortalService/api/template').subscribe(res => {
        this.allTemplates = res.json();
        this.allTemplates.forEach(i => {
            this.templateName.push(i.template_name);
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
        this.subscription = this.filterDataService.filterServiceProjectsLoadingEvent.subscribe((res) => {
            this.projects = res;
            if (this.appService.checkCredentials()) {
                for (let i = 0; i < this.projects.length; i++) {
                    this.appService.keys = this.projects[i].project_key
                    if (this.projects[i].project_type === "Development") {
                        this.TileFigures.development += 100 / this.projects.length;
                    }
                    if (this.projects[i].project_type === "Maintenance") {
                        this.TileFigures.maintainence += 100 / this.projects.length;
                    }
                    if (this.projects[i].project_health) {
                        this.TileFigures.total += 1;
                    }
                }
                for (let i = 0; i < this.projects.length; i++) {
                    if (this.projects[i].project_health === "Stable") {
                        this.TileFigures.stable += 100 / this.TileFigures.total;
                    }
                    if (this.projects[i].project_health === "Warning") {
                        this.TileFigures.warning += 100 / this.TileFigures.total;
                    }
                    if (this.projects[i].project_health === "At Risk") {
                        this.TileFigures.atrisk += 100 / this.TileFigures.total;
                    }
                }
                this.TileFigures.development = Math.floor(this.TileFigures.development);
                this.TileFigures.maintainence = Math.ceil(this.TileFigures.maintainence);
                this.TileFigures.stable = Math.floor(this.TileFigures.stable);
                this.TileFigures.warning = Math.ceil(this.TileFigures.warning);
                this.TileFigures.atrisk = Math.ceil(this.TileFigures.atrisk);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    onChange(value) {
        this.selectedValue = value;
        this.appService.setWeek(value)
    }

    onChangeYear(value) {
        this.selectedValueYear = value;
        this.appService.setYear(value)
    }
    onChangeMonth(value) {
        this.selectedValueMonth = value;
        for (var i = 0; i <= this.months.length; i++) {
            if (value == this.months[i]) {
                this.appService.setMonth(i + 1)
            }
        }
    }

    filterProjectTable2(value) {
        this.newprojects = [];
        var newObj = {
            //"project_type": { $in: this.filterDataService.appliedTypeFilters },
            //"project_health": { $in: this.filterDataService.appliedHealthFilters }
        }
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
        this.appService.getProjectWithFilters(newObj).subscribe(projects => {         
            if (projects) {
                this.projects = projects;
                let obj = this.projects.reduce((starter, project) => {
                    starter.technicalDebtTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.technical_debt  !=  undefined  ?  project.project_metrics.technical_debt  :  0  :  0;
                    starter.buildSuccessRatioTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.build_success_ratio  !=  undefined  ?  project.project_metrics.build_success_ratio  :  0  :  0;
                    starter.bugRatioTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.bug_ratio  !=  undefined  ?  project.project_metrics.bug_ratio  :  0  :  0;
                    starter.testCoverageTotal  +=  project.project_metrics  !=  undefined  ?  project.project_metrics.test_coverage  !=  undefined  ?  project.project_metrics.test_coverage  :  0  :  0;
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
                this.filterDataService.technicalDebt = Math.round(obj.technicalDebtTotal / this.projects.length);
                this.filterDataService.buildSuccessRatio = Math.round(obj.buildSuccessRatioTotal / this.projects.length);
                this.filterDataService.bugRatio = Math.round(obj.bugRatioTotal / this.projects.length);
                this.filterDataService.testCoverage = Math.round(obj.testCoverageTotal / this.projects.length);
                this.filterDataService.stableProjectCount = obj.stableProjectCount;
                this.filterDataService.warningProjectCount = obj.warningProjectCount;
                this.filterDataService.atRiskProjectCount = obj.atRiskProjectCount;
                this.filterDataService.projectsCount = this.projects.length;
            } else {
                this.projects = [];
                this.filterDataService.technicalDebt = 0;
                this.filterDataService.buildSuccessRatio = 0;
                this.filterDataService.bugRatio = 0;
                this.filterDataService.testCoverage = 0;
                this.filterDataService.stableProjectCount = 0;
                this.filterDataService.warningProjectCount = 0;
                this.filterDataService.atRiskProjectCount = 0;
                this.filterDataService.projectsCount = 0;
            }
            this.filterDataService.filterServiceProjectsFilterEvent.next(projects);
            this.dashboardComponent.updateProjectsCount();
        });
    }
    goBack() {
        this.filterSelected = null;
    }
    @Output() appEvent = new EventEmitter();
    filterProjectTable(appliedTypeFilters) {
        if (this.appService.checkCredentials()) {
            this.appService.getProject().subscribe(projects => {
                this.projects = projects;
                this.filteredProjects = [];
                if (appliedTypeFilters != undefined) {
                    if (appliedTypeFilters.length > 0) {
                        for (var i = 0; i < this.projects.length; i++) {
                            for (var j = 0; j < appliedTypeFilters.length; j++) {
                                if (this.projects[i].project_type == appliedTypeFilters[j]) {
                                    //this.filteredProjects = this.projects.splice(i, 1);
                                    this.filteredProjects.push(this.projects[i]);
                                }
                            }
                        }
                        this.projects = this.filteredProjects;
                        this.filterDataService.projectsCount = this.projects.length;
                        this.filterDataService.filterServiceProjectsFilterEvent.next();
                        this.dashboardComponent.updateProjectsCount();
                    } else {
                        this.projects = projects;
                        this.filterDataService.projectsCount = this.projects.length;
                        this.filterDataService.filterServiceProjectsFilterEvent.next();
                        this.dashboardComponent.updateProjectsCount();
                    }
                }
            });
        }
    }
    myFunction() {
        //document.getElementById("myDropdown").classList.toggle("show");
        if (this.timeFilteringDropdownIsHidden) {
            this.timeFilteringDropdownIsHidden = false;
        } else {
            this.timeFilteringDropdownIsHidden = true;
        }
    }

    timeFilterOnKPI(event){
        //console.log(event);
    }
    openDialog(): void {
        // const dialogRef = this.dialog.open(TemplateComponent, {
        //     width: '250px'
        // });
      }
}