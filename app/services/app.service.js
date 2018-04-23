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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var AppService = /** @class */ (function () {
    function AppService(http, router) {
        this.http = http;
        this.router = router;
        this.status = new core_1.EventEmitter();
        this.keysss = new core_1.EventEmitter();
        this.week = new core_1.EventEmitter();
        this.appEvent = new Subject_1.Subject();
        this.isAuthenticatedUser = true;
        this.URL = "https://devops.ltimosaic.com/DemoPortalService";
        // URL = "http://localhost:8006/DemoPortalService";    
        // URL = "http://localhost:8006/DevOpsPortalService";
        this.url = 'app/resources/data/';
        //chirags service-------------
        // getProject(url) {
        //         return this.http.get(this.url + url)
        //             .map(res => res.json())
        //             .map(data => {
        //                 return data;
        //             });
        //     }
        //Project Settings---------------------------------------------------------------------------------------------------
        this.selectedProject = {
            project_name: '',
            project_key: '',
            project_organization: {
                manager: ''
            }
        };
        //settingsModule-----------------------------------------------------------------------------------------------------
        this.userDirectoryNames = [];
        this.proxyNames = [];
        //UserManagement Setting Module(Users)
        this.usersArray = [];
        //UserManagement Setting Module(Roles)
        this.roles = [];
        //Alm tools(souce_control)
        this.souce_control = [];
        //Alm tools(souce_control)
        this.planning = [];
        //Alm tools(code_analysis)
        this.code_analysis = [];
        //Alm tools(binary_repository)
        this.binary_repository = [];
        //Alm tools(continuous_integration)
        this.continuous_integration = [];
        //Alm tools(deployment)
        this.deployment = [];
        //Alm tools(release)
        this.release = [];
        //onboardingModule services----------------------------------------------------------------------------------------
        //project information object
        this.projectInformation = {
            project_name: '',
            project_type: '',
            project_key: '',
            project_organization: {
                manager: '',
                line_of_business: '',
                region: '',
                technology: ''
            },
        };
        //user manangement object
        this.users = [];
        //environment object
        this.Environment = {
            environment_name: '',
            environment_type: '',
            environment_sequence: '0',
            environment_approver: '',
            environment_approver_name: '',
            environment_project_key: '',
            app_server: {
                server_type: '',
                vm_server: {
                    server_ip: '',
                    auth_type: 'password',
                    auth_username: '',
                    auth_password: '',
                    app_server_path: ''
                },
                container_server: {
                    host_ip: '',
                    host_auth_type: 'password',
                    host_auth_username: '',
                    host_auth_password: '',
                    image_name: '',
                    container_name: '',
                    ports: ''
                },
                serverless_server: {
                    stack_name: ''
                }
            },
            database: {
                server_ip: '',
                auth_type: 'password',
                auth_username: '',
                auth_password: '',
                auth_key: '',
                db_name: '',
                db_url: '',
                db_username: '',
                db_password: ''
            }
            // ,
            // serverless:{
            //     stack_name:''
            // }
        };
        this.Environments = [];
        this.alm = {
            scm: {
                configured: true,
                tool: '',
                scm_type: 'git',
                repo_name: this.projectInformation.project_name + '-repo',
                platform_tool: ''
            },
            planning: {
                configured: true,
                tool: '',
                workflow_type: '',
                platform_tool: ''
            },
            development: {
                configured: true,
                platform: '',
                platform_version: '',
                build_tool: '',
                build_tool_version: '',
                build_proxy_required: ''
            },
            testing: {
                unit: {
                    configured: true,
                    framework: '',
                    framework_version: ''
                },
                functional: {
                    configured: true,
                    driver: '',
                    framework: '',
                    mode: ''
                }
            },
            code_analysis: {
                configured: true,
                tool: '',
                coverage_framework_configured: false,
                coverage_framework: '',
                platform_tool: ''
            },
            binary_repo: {
                configured: true,
                tool: '',
                artifact_name: this.projectInformation.project_name + '-Snapshot-0.0.1',
                artifact_type: '',
                storage_path: '',
                platform_tool: '',
                bucket_name: '',
                template_file: '',
            },
            ci: {
                configured: true,
                tool: '',
                ci_email: '',
                trigger_type: '',
                build_agent_label: '',
                platform_tool: ''
            },
            deployment: {
                configured: true,
                tool: '',
                deployment_type: '',
                application_name: ''
            },
            app_server: {
                configured: true,
                tool: '',
                tool_version: ''
            },
            database: {
                configured: true,
                tool: '',
                tool_version: ''
                // },
                // release: {
                //     configured: true,
                //     tool: '',
                //     platform_tool: ''
            }
        };
        if (sessionStorage.getItem("is_reloaded")) {
            this.selectedProject.project_key = this.getNavChangeEmitter1();
            this.selectedProject.project_name = this.getNavChangeEmitter2();
            this.selectedProject.project_organization.manager = this.getNavChangeEmitter3();
            sessionStorage.setItem("is_reloaded", true);
        }
    }
    AppService.prototype.emitNavChangeEvent = function (number) {
        this.keysss.emit(number);
    };
    AppService.prototype.getNavChangeEmitter = function () {
        return this.keysss;
    };
    AppService.prototype.setWeek = function (value) {
        //  console.log(value)
        this.week.emit(value);
        this.weeks = value;
        //    alert(value)
    };
    AppService.prototype.getWeek = function () {
        return this.week;
    };
    // setWeeks(value){
    //     this.weeks=value;
    //      console.log(this.weeks)
    // }
    // getWeeks(){
    //     return this.weeks;
    // }
    AppService.prototype.setMonth = function (value) {
        this.month = value;
    };
    AppService.prototype.getMonth = function () {
        return this.month;
    };
    AppService.prototype.setYear = function (value) {
        this.year = value;
    };
    AppService.prototype.getYear = function () {
        return this.year;
    };
    AppService.prototype.emitNavChangeEvent1 = function (value) {
        window.localStorage.setItem(this.privateKey, value);
    };
    AppService.prototype.emitNavChangeEvent2 = function (name, manager) {
        window.sessionStorage.setItem("privatename", name);
        sessionStorage.setItem("manager", manager);
    };
    AppService.prototype.getNavChangeEmitter1 = function () {
        return window.localStorage.getItem(this.privateKey);
    };
    AppService.prototype.getNavChangeEmitter2 = function () {
        return window.sessionStorage.getItem("privatename");
    };
    AppService.prototype.getNavChangeEmitter3 = function () {
        return sessionStorage.getItem("manager");
    };
    AppService.prototype.changeStatus = function (value) {
        this.status.emit(value);
    };
    //pipelineModule summary Service------------------------------------------------------------------------------------
    AppService.prototype.getSummary = function () {
        return this.http.get('app/resources/data/summarydata.json')
            .map(function (res) { return res.json().data; })
            .map(function (data) { return data; });
    };
    AppService.prototype.getCommit = function () {
        return this.http.get('app/resources/data/commits.json')
            .map(function (res) { return res.json().data; })
            .map(function (data) { return data; });
    };
    AppService.prototype.setPipeLine = function (pipelineId) {
        this.pipeLineSelected = pipelineId;
        window.sessionStorage.setItem("pipeLineSelected", pipelineId);
    };
    AppService.prototype.getPipeLine = function () {
        return this.pipeLineSelected;
    };
    AppService.prototype.getPipeLines = function () {
        return window.sessionStorage.getItem("pipeLineSelected");
    };
    //Release Service---------------------------------------------------------------------------------------------------    
    AppService.prototype.getReleases = function () {
        return this.http.get('app/resources/data/releases.json')
            .map(function (res) { return res.json().data; })
            .map(function (data) { return data; });
    };
    //Details Module Services-------------------------------------------------------------------------------------------
    // getCodeQualityData() {
    //     return this.http.get('app/detailsModule/resources/code_quality.json')
    //         .map(res => res.json().data)
    //         .map(data => { return data; });
    // }
    AppService.prototype.getCodeQualityData = function () {
        return this.http.get(this.URL + '/api/presentation/project_code_quality?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getCodeQualityDatas = function (value) {
        return this.http.get(this.URL + '/api/presentation/project_code_quality?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    // getProjectPlanningData() {
    //     return this.http.get('app/detailsModule/resources/project_planning.json')
    //         .map(res => res.json())
    //         .map(data => { return data; });
    // }
    AppService.prototype.getProjectPlanningData = function () {
        return this.http.get(this.URL + '/api/presentation/project_planning?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getProjectPlanningDatas = function (value) {
        return this.http.get(this.URL + '/api/presentation/project_planning?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    // getBuildsData() {
    //     return this.http.get('app/detailsModule/resources/project_builds.json')
    //         .map(res => res.json().data)
    //         .map(data => { return data; });
    // }
    AppService.prototype.getBuildsData = function () {
        return this.http.get(this.URL + '/api/presentation/project_builds?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getBuildsDatas = function (value) {
        return this.http.get(this.URL + '/api/presentation/project_builds?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    //projects Service--------------------------------------------------------------------------------------------------
    // getProject() {
    //     return this.http.get('app/resources/data/projects-medium.json')
    //     // return this.http.get(`${this.URL}/api/project`)
    //         .map(res => <Project[]>res.json())
    //         .map(data => {
    //             return data;
    //         });
    // }
    AppService.prototype.getProject = function () {
        return this.http.get(this.URL + '/api/presentation/projects')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.getProjectWithFilters = function (appliedFiltersQueryObj) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.URL + '/api/presentation/projects', appliedFiltersQueryObj, options)
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.getReleaseCompletion = function () {
        // console.log(this.keys)
        return this.http.get(this.URL + '/api/presentation/release_completion?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.getBugRatio = function (value) {
        return this.http.get(this.URL + '/api/presentation/bug_trend?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.getDeployments = function () {
        return this.http.get(this.URL + '/api/presentation/project_deployments?project_key=' + 'cbs' + '')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getDeploymentsTrend = function () {
        return this.http.get(this.URL + '/api/presentation/project_deployments_trend?project_key=demo')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getDeployment = function (value) {
        return this.http.get(this.URL + '/api/presentation/project_deployments?project_key=' + 'cbs' + '')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getDeploymentsTrendWithDateRange = function (dateRange) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.URL + '/api/presentation/project_deployments_trend', dateRange, options)
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getDeploymentsTrendByEnvType = function (filterProps) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.URL + '/api/presentation/project_deployments_trend_all', filterProps, options)
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    AppService.prototype.getCodeCoverage = function (value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.getSprint = function () {
        return this.http.get(this.URL + '/api/presentation/sprint_trend?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.getChart2 = function () {
        return this.http.get('app/resources/data/chart2data.json')
            .map(function (res) { return res.json().data; })
            .map(function (data) { return data; });
    };
    AppService.prototype.getChart3 = function (value) {
        return this.http.get(this.URL + '/api/presentation/sprint_trend?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (data) { return data; });
    };
    // getChart3() {
    //     return this.http.get('app/resources/data/chart3data.json')
    //         .map(res => res.json().data)
    //         .map(data => { return data; });
    // }
    AppService.prototype.getChart4 = function () {
        return this.http.get('app/resources/data/chart4data.json')
            .map(function (res) { return res.json().data; })
            .map(function (data) { return data; });
    };
    AppService.prototype.getUatIndex = function (uatSelected) {
        this.uatSelected = uatSelected;
    };
    AppService.prototype.setUatIndex = function () {
        return this.uatSelected;
    };
    //  public projectKey:string='AJ';
    AppService.prototype.getPipeLineContent = function () {
        return this.http.get(this.URL + '/api/presentation/pipeline_summary?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getPipeLineContents = function (value) {
        //   console.log(this.URL + '/api/presentation/pipeline_summary?project_key='+value+'')
        return this.http.get(this.URL + '/api/presentation/pipeline_summary?project_key=cbs')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getPipelineBuild = function () {
        return this.http.post(this.URL + '/api/pipeline_build?pipeline_id=' + this.pipeLineSelected + '&project_key=cbs', '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getPipelineBuilds = function (value) {
        return this.http.post(this.URL + '/api/pipeline_build?pipeline_id=' + value + '&project_key=cbs', '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getChangeSet = function () {
        return this.http.post(this.URL + '/api/pipeline_commit?pipeline_id=' + this.pipeLineSelected + '&project_key=cbs', '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getChangeSets = function (value) {
        return this.http.post(this.URL + '/api/pipeline_commit?pipeline_id=' + value + '&project_key=cbs', '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getWeekly = function (value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs&parent_filter=month&child_filter=week&year_filter=' + this.getYear() + '&month_filter=' + this.getMonth() + '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getMonthly = function (value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs&parent_filter=year&child_filter=month&year_filter=' + this.getYear() + '&month_filter=' + this.getMonth() + '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getQuarterly = function (value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs&parent_filter=year&child_filter=quarter&year_filter=' + this.getYear() + '&month_filter=' + this.getMonth() + '')
            .map(function (res) { return res.json(); })
            .map(function (release) {
            return release;
        });
    };
    AppService.prototype.getVersionControll = function (value) {
        return this.http.get(this.URL + '/api/presentation/release_completion?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        });
    };
    AppService.prototype.clearFields = function () {
        this.alm = {
            scm: {
                configured: true,
                tool: '',
                scm_type: 'git',
                repo_name: '',
                platform_tool: ''
            },
            planning: {
                configured: true,
                tool: '',
                workflow_type: '',
                platform_tool: ''
            },
            development: {
                configured: true,
                platform: '',
                platform_version: '',
                build_tool: '',
                build_tool_version: '',
                build_proxy_required: ''
            },
            testing: {
                unit: {
                    configured: true,
                    framework: '',
                    framework_version: ''
                },
                functional: {
                    configured: true,
                    driver: '',
                    framework: '',
                    mode: ''
                }
            },
            code_analysis: {
                configured: true,
                tool: '',
                coverage_framework_configured: false,
                coverage_framework: '',
                platform_tool: ''
            },
            binary_repo: {
                configured: true,
                tool: '',
                artifact_name: '',
                artifact_type: '',
                storage_path: '',
                platform_tool: '',
                bucket_name: '',
                template_file: '',
            },
            ci: {
                configured: true,
                tool: '',
                ci_email: '',
                trigger_type: '',
                build_agent_label: '',
                platform_tool: ''
            },
            deployment: {
                configured: true,
                tool: '',
                deployment_type: '',
                application_name: ''
            },
            app_server: {
                configured: true,
                tool: '',
                tool_version: ''
            },
            database: {
                configured: true,
                tool: '',
                tool_version: ''
                // },
                // release: {
                //     configured: true,
                //     tool: '',
                //     platform_tool: ''
            }
        };
        this.Environment = {
            environment_name: '',
            environment_type: '',
            environment_sequence: '0',
            environment_approver: '',
            environment_approver_name: '',
            environment_project_key: '',
            app_server: {
                server_type: '',
                vm_server: {
                    server_ip: '',
                    auth_type: 'password',
                    auth_username: '',
                    auth_password: '',
                    app_server_path: ''
                },
                container_server: {
                    host_ip: '',
                    host_auth_type: 'password',
                    host_auth_username: '',
                    host_auth_password: '',
                    image_name: '',
                    container_name: '',
                    ports: ''
                },
                serverless_server: {
                    stack_name: ''
                }
            },
            database: {
                server_ip: '',
                auth_type: 'password',
                auth_username: '',
                auth_password: '',
                auth_key: '',
                db_name: '',
                db_url: '',
                db_username: '',
                db_password: ''
            }
            // ,
            // serverless:{
            //     stack_name:''
            // }
        };
        this.Environments = [];
        this.projectInformation = {
            project_name: '',
            project_type: '',
            project_key: '',
            project_organization: {
                manager: '',
                line_of_business: '',
                region: '',
                technology: ''
            },
            project_health: 'At Risk',
            project_metrics: {
                release_completion: 0,
                sprint_velocity: 0,
                technical_debt: 0,
                bug_ratio: 0,
                test_coverage: 0,
                release_stability: 'At Risk',
                work_completion: 0,
                build_success_ratio: 0
            }
            /* lob: '',
            region: '',
            technology: '', */
        };
        this.users = [];
    };
    AppService.prototype.api = function (thisAPI) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlenconded' });
        // let options = new RequestOptions({ headers: headers });
        // console.log('Sending');
        // console.log(thisAPI);
        // setTimeout(function () {
        // }, (Math.floor(Math.random() * 6) + 1) * 500);
        console.log(thisAPI);
        switch (thisAPI) {
            case 1:
                console.log("Project Info POST REQ");
                return this.http.post(this.URL + "/api/onboarding/project", this.projectInformation, headers);
            case 2:
                console.log("Users POST REQ");
                return this.http.post(this.URL + "/api/onboarding/user?project_key=" + this.projectInformation.project_key, this.users, headers);
            case 3:
                console.log("ALM Tools POST REQ");
                return this.http.post(this.URL + "/api/onboarding/alm_tool?project_key=" + this.projectInformation.project_key, this.alm, headers);
            case 4:
                console.log("Environments POST REQ");
                // return this.http.request('/xyz');
                for (var i = 0; i < this.Environments.length; i++) {
                    this.Environments[i].environment_project_key = "" + this.projectInformation.project_key;
                }
                return this.http.post(this.URL + "/api/onboarding/environment?project_key=" + this.projectInformation.project_key, this.Environments, headers);
            case 5:
                console.log("Planning Tool POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/planning?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(this.URL + "/api/onboarding/planning?project_key=" + this.projectInformation.project_key, headers);
            case 6:
                console.log("SCM POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/scm?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(this.URL + "/api/onboarding/scm?project_key=" + this.projectInformation.project_key, headers);
            case 7:
                console.log("Code Analysis POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/code_analysis?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(this.URL + "/api/onboarding/code_analysis?project_key=" + this.projectInformation.project_key, headers);
            case 8:
                console.log("Continuous Integration POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/ci?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(this.URL + "/api/onboarding/ci?project_key=" + this.projectInformation.project_key, headers);
            case 9:
                console.log("Deployment Tool POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/deployment?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(this.URL + "/api/onboarding/deployment?project_key=" + this.projectInformation.project_key, headers);
            default:
                // console.clear();
                // console.log(this.projectInformation);
                // console.log(this.users);
                // console.log(this.alm);
                // console.log(this.Environment);
                return this.http.request('/');
        }
        // console.log(this.projectInformation);
        // return this.http.post('http://localhost:3000/', JSON.stringify(this.projectInformation), headers)
    };
    AppService.prototype.checkCredentials = function () {
        if (!this.isAuthenticatedUser) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    };
    AppService.prototype.logout = function () {
        this.isAuthenticatedUser = false;
    };
    AppService.prototype.login = function () {
        this.isAuthenticatedUser = true;
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
