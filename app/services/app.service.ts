import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Project } from '../components/projects/projects/projects';
import { Summary } from '../pipelineModule/components/summary/summary';
import { User } from '../onboardingModule/components/user_management/user';
import { Environment } from '../onboardingModule/components/environments/environment';
import { Proxy } from '../settingsModule/components/general/components/proxy/proxy';
import { UserDirectory } from '../settingsModule/components/user_management/components/user_directories/user_directories';
import { Roles } from '../settingsModule/components/user_management/components/roles/roles';
import { Users } from '../settingsModule/components/user_management/components/users/users';
import { AlmTool } from '../settingsModule/components/alm_tools/components/alm_tool';

import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {
    private pipeLineSelected: any;
    status = new EventEmitter<string>();
    keysss = new EventEmitter<string>()
    privateKey: any;
    privatename: any;
    manager: any;
    week = new EventEmitter<string>();
    month: any;
    year: any;
    weeks: any;
    appEvent = new Subject<string>();

    emitNavChangeEvent(number) {
        this.keysss.emit(number);
    }
    getNavChangeEmitter() {
        return this.keysss;
    }

    setWeek(value) {
        //  console.log(value)
        this.week.emit(value);
        this.weeks = value
        //    alert(value)
    }

    getWeek() {
        return this.week;

    }
    // setWeeks(value){
    //     this.weeks=value;
    //      console.log(this.weeks)
    // }
    // getWeeks(){
    //     return this.weeks;
    // }
    setMonth(value) {
        this.month = value;
    }

    getMonth() {
        return this.month;
    }

    setYear(value) {
        this.year = value;
    }

    getYear() {
        return this.year;
    }

    emitNavChangeEvent1(value) {
        window.localStorage.setItem(this.privateKey, value)

    }
    emitNavChangeEvent2(name, manager) {
        window.sessionStorage.setItem("privatename", name)
        sessionStorage.setItem("manager", manager)
    }

    getNavChangeEmitter1() {
        return window.localStorage.getItem(this.privateKey);
    }
    getNavChangeEmitter2() {
        return window.sessionStorage.getItem("privatename");
    }

    getNavChangeEmitter3() {
        return sessionStorage.getItem("manager");
    }

    isAuthenticatedUser = true;
    changeStatus(value: string) {
        this.status.emit(value);
    }

    URL = "https://devops.ltimosaic.com/DemoPortalService";    
    // URL = "http://localhost:8006/DemoPortalService";    
    // URL = "http://localhost:8006/DevOpsPortalService";

    public url = 'app/resources/data/';

    constructor(private http: Http, private router: Router) {

        if (sessionStorage.getItem("is_reloaded")) {
            this.selectedProject.project_key = this.getNavChangeEmitter1();
            this.selectedProject.project_name = this.getNavChangeEmitter2();
            this.selectedProject.project_organization.manager = this.getNavChangeEmitter3();
            sessionStorage.setItem("is_reloaded", true);
        }
    }

    //chirags service-------------
    // getProject(url) {
    //         return this.http.get(this.url + url)
    //             .map(res => res.json())
    //             .map(data => {
    //                 return data;
    //             });
    //     }

    //Project Settings---------------------------------------------------------------------------------------------------
    public selectedProject = {
        project_name: '',
        project_key: '',
        project_organization: {
            manager: ''
        }
    };
    public selectedProjectId: string;
    public selectedProjectKey: string;
    public keys: any[];
    public setTrue: boolean;

    //settingsModule-----------------------------------------------------------------------------------------------------

    public userDirectoryNames: string[] = [];
    public proxyNames: string[] = [];

    //UserManagement Setting Module(Users)
    public usersArray: Users[] = [];

    //UserManagement Setting Module(Roles)
    public roles: Roles[] = [];

    //Alm tools(souce_control)
    public souce_control: AlmTool[] = [];

    //Alm tools(souce_control)
    public planning: AlmTool[] = [];

    //Alm tools(code_analysis)
    public code_analysis: AlmTool[] = [];

    //Alm tools(binary_repository)
    public binary_repository: AlmTool[] = [];

    //Alm tools(continuous_integration)
    public continuous_integration: AlmTool[] = [];

    //Alm tools(deployment)
    public deployment: AlmTool[] = [];

    //Alm tools(release)
    public release: AlmTool[] = [];

    //pipelineModule summary Service------------------------------------------------------------------------------------
    getSummary() {
        return this.http.get('app/resources/data/summarydata.json')
            .map(res => <Summary[]>res.json().data)
            .map(data => { return data; });
    }

    getCommit() {
        return this.http.get('app/resources/data/commits.json')
            .map(res => <Summary[]>res.json().data)
            .map(data => { return data; });
    }

    setPipeLine(pipelineId) {
        this.pipeLineSelected = pipelineId
        window.sessionStorage.setItem("pipeLineSelected", pipelineId)
    }

    getPipeLine() {
        return this.pipeLineSelected;
    }
    getPipeLines() {
        return window.sessionStorage.getItem("pipeLineSelected");
    }
    //Release Service---------------------------------------------------------------------------------------------------    
    getReleases() {
        return this.http.get('app/resources/data/releases.json')
            .map(res => res.json().data)
            .map(data => { return data; });
    }

    //Details Module Services-------------------------------------------------------------------------------------------
    // getCodeQualityData() {
    //     return this.http.get('app/detailsModule/resources/code_quality.json')
    //         .map(res => res.json().data)
    //         .map(data => { return data; });
    // }
    getCodeQualityData() {

        return this.http.get(this.URL + '/api/presentation/project_code_quality?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }
    getCodeQualityDatas(value) {

        return this.http.get(this.URL + '/api/presentation/project_code_quality?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }
    // getProjectPlanningData() {
    //     return this.http.get('app/detailsModule/resources/project_planning.json')
    //         .map(res => res.json())
    //         .map(data => { return data; });
    // }
    getProjectPlanningData() {
        return this.http.get(this.URL + '/api/presentation/project_planning?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }

    getProjectPlanningDatas(value) {
        return this.http.get(this.URL + '/api/presentation/project_planning?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }
    // getBuildsData() {
    //     return this.http.get('app/detailsModule/resources/project_builds.json')
    //         .map(res => res.json().data)
    //         .map(data => { return data; });
    // }
    getBuildsData() {
        return this.http.get(this.URL + '/api/presentation/project_builds?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }
    getBuildsDatas(value) {
        return this.http.get(this.URL + '/api/presentation/project_builds?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }

    //projects Service--------------------------------------------------------------------------------------------------
    // getProject() {
    //     return this.http.get('app/resources/data/projects-medium.json')
    //     // return this.http.get(`${this.URL}/api/project`)
    //         .map(res => <Project[]>res.json())
    //         .map(data => {
    //             return data;
    //         });
    // }
    getProject() {
        return this.http.get(this.URL + '/api/presentation/projects')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }
    getProjectWithFilters(appliedFiltersQueryObj) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.URL + '/api/presentation/projects', appliedFiltersQueryObj, options)
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }
    getReleaseCompletion() {
        // console.log(this.keys)
        return this.http.get(this.URL + '/api/presentation/release_completion?project_key=cbs')

            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }
    getBugRatio(value) {
        return this.http.get(this.URL + '/api/presentation/bug_trend?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }
    getDeployments() {
        return this.http.get(this.URL + '/api/presentation/project_deployments?project_key=' + 'cbs' + '')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => res.json())
            .map(data => { return data; });
    }
    getDeploymentsTrend() {
        return this.http.get(this.URL + '/api/presentation/project_deployments_trend?project_key=demo')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => res.json())
            .map(data => { return data; });
    }
    getDeployment(value) {
        return this.http.get(this.URL + '/api/presentation/project_deployments?project_key=' + 'cbs' + '')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => res.json())
            .map(data => { return data; });
    }
    getDeploymentsTrendWithDateRange(dateRange) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.URL + '/api/presentation/project_deployments_trend', dateRange, options)
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => res.json())
            .map(data => { return data; });
    }
    getDeploymentsTrendByEnvType(filterProps) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.URL + '/api/presentation/project_deployments_trend_all', filterProps, options)
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => res.json())
            .map(data => { return data; });
    }
    getCodeCoverage(value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }
    getSprint() {
        return this.http.get(this.URL + '/api/presentation/sprint_trend?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }
    getChart2() {
        return this.http.get('app/resources/data/chart2data.json')
            .map(res => res.json().data)
            .map(data => { return data; });
    }
    getChart3(value) {
        return this.http.get(this.URL + '/api/presentation/sprint_trend?project_key=cbs')
            .map(res => res.json())
            .map(data => { return data; });
    }
    // getChart3() {
    //     return this.http.get('app/resources/data/chart3data.json')
    //         .map(res => res.json().data)
    //         .map(data => { return data; });
    // }
    getChart4() {
        return this.http.get('app/resources/data/chart4data.json')
            .map(res => res.json().data)
            .map(data => { return data; });
    }

    //pipeline module

    //  getPipeLineContent(){
    //      return this.http.get('app/resources/data/pipeline.json') 
    //          .map(res => res.json())
    //        .map(release => { return release; 
    //        });
    // }

    // getPipelineBuild(){
    //     return this.http.get('app/resources/data/pipeline-build.json') 
    //         .map(res => res.json())
    //         .map(release => { return release; 
    //        });
    // }

    // getChangeSet(){
    //     return this.http.get('app/resources/data/changeset.json') 
    //         .map(res => res.json())
    //         .map(release => { return release; 
    //        });
    // }

    public uatSelected: any;

    getUatIndex(uatSelected) {
        this.uatSelected = uatSelected;
    }

    setUatIndex() {
        return this.uatSelected;
    }
    //  public projectKey:string='AJ';
    getPipeLineContent() {
        return this.http.get(this.URL + '/api/presentation/pipeline_summary?project_key=cbs')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getPipeLineContents(value) {
        //   console.log(this.URL + '/api/presentation/pipeline_summary?project_key='+value+'')
        return this.http.get(this.URL + '/api/presentation/pipeline_summary?project_key=cbs')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getPipelineBuild() {
        return this.http.post(this.URL + '/api/pipeline_build?pipeline_id=' + this.pipeLineSelected + '&project_key=cbs', '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getPipelineBuilds(value) {
        return this.http.post(this.URL + '/api/pipeline_build?pipeline_id=' + value + '&project_key=cbs', '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }


    getChangeSet() {
        return this.http.post(this.URL + '/api/pipeline_commit?pipeline_id=' + this.pipeLineSelected + '&project_key=cbs', '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getChangeSets(value) {
        return this.http.post(this.URL + '/api/pipeline_commit?pipeline_id=' + value + '&project_key=cbs', '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }

    getWeekly(value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs&parent_filter=month&child_filter=week&year_filter=' + this.getYear() + '&month_filter=' + this.getMonth() + '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getMonthly(value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs&parent_filter=year&child_filter=month&year_filter=' + this.getYear() + '&month_filter=' + this.getMonth() + '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getQuarterly(value) {
        return this.http.get(this.URL + '/api/presentation/coverage_trend?project_key=cbs&parent_filter=year&child_filter=quarter&year_filter=' + this.getYear() + '&month_filter=' + this.getMonth() + '')
            .map(res => res.json())
            .map(release => {
                return release;
            });
    }
    getVersionControll(value) {
        return this.http.get(this.URL + '/api/presentation/release_completion?project_key=cbs')
            // return this.http.get(`${this.URL}/api/project`)
            .map(res => <Project[]>res.json())
            .map(data => {
                return data;
            });
    }

    //onboardingModule services----------------------------------------------------------------------------------------

    //project information object
    public projectInformation: any = {
        project_name: '',
        project_type: '',
        project_key: '',
        project_organization: {
            manager: '',
            line_of_business: '',
            region: '',
            technology: ''
        },
        /* lob: '',
        region: '',
        technology: '', */
    }

    //user manangement object
    public users: User[] = [];

    //environment object
    public Environment = {
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
    }
    public Environments = [];
    public flags: {
        environment: {
            appServerDisabled: false,
            databaseDisabled: false
        }
    }

    public alm: any = {
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
    }

    clearFields() {
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
        }
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
        }
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
        }
        this.users = [];
    }

    api(thisAPI) {
        var headers = new Headers();
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
                return this.http.post(`${this.URL}/api/onboarding/project`, this.projectInformation, headers);
            case 2:
                console.log("Users POST REQ");
                return this.http.post(`${this.URL}/api/onboarding/user?project_key=` + this.projectInformation.project_key, this.users, headers);
            case 3:
                console.log("ALM Tools POST REQ");
                return this.http.post(`${this.URL}/api/onboarding/alm_tool?project_key=` + this.projectInformation.project_key, this.alm, headers);
            case 4:
                console.log("Environments POST REQ");
                // return this.http.request('/xyz');
                for (var i = 0; i < this.Environments.length; i++) {
                    this.Environments[i].environment_project_key = `${this.projectInformation.project_key}`
                }
                return this.http.post(`${this.URL}/api/onboarding/environment?project_key=` + this.projectInformation.project_key, this.Environments, headers)
            case 5:
                console.log("Planning Tool POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/planning?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(`${this.URL}/api/onboarding/planning?project_key=` + this.projectInformation.project_key, headers)
            case 6:
                console.log("SCM POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/scm?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(`${this.URL}/api/onboarding/scm?project_key=` + this.projectInformation.project_key, headers)
            case 7:
                console.log("Code Analysis POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/code_analysis?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(`${this.URL}/api/onboarding/code_analysis?project_key=` + this.projectInformation.project_key, headers)
            case 8:
                console.log("Continuous Integration POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/ci?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(`${this.URL}/api/onboarding/ci?project_key=` + this.projectInformation.project_key, headers)
            case 9:
                console.log("Deployment Tool POST REQ");
                // return this.http.post('http://localhost:3003/api/onboarding/deployment?project_key=' + this.projectInformation.project_key, headers)
                return this.http.post(`${this.URL}/api/onboarding/deployment?project_key=` + this.projectInformation.project_key, headers)
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
    }

    checkCredentials() {
        if (!this.isAuthenticatedUser) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    }

    logout() {
        this.isAuthenticatedUser = false;
    }

    login() {
        this.isAuthenticatedUser = true;
    }

}