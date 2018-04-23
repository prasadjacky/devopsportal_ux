import { Http } from '@angular/http';
import { Environment } from './environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'environments',
    templateUrl: 'environments.component.html',
    styleUrls: ['./environments.component.css']
})

export class EnvironmentsComponent implements OnInit {
    constructor(private appService: AppService, private http: Http) { }
    @ViewChild('environmentsForm') environmentsForm;
    showValidations = false;
    Env: string[] = ['dev', 'prod', 'pre-prod'];
    Environment = {
        environment_name: '',
        environment_type: '',
        environment_sequence: '',
        environment_approver: '',
        environment_approver_name: '',
        environment_project_key: '',
        app_server: {
            server_type: 'VM',
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
    appServerDisabled: true;
    databaseDisabled: true;
    approversAvailable;
    EmptyEnv = false;
    pushApprover(approver) {
        this.Environment.environment_approver = approver._id;
        this.Environment.environment_approver_name = approver.user_full_name;
        (<any>$('#searchApprover')).modal('hide')
        // $('#lr').remove('#lr');
    }
    onValidate() {
        if (this.Environments.length === 0) {
            this.EmptyEnv = true;
        } else {
            this.EmptyEnv = false;
        }
        return this.Environments.length
    }
    ngOnInit() {
        this.Environment = this.appService.Environment;
        // this.appServerDisabled = this.appService.flags.environment.appServerDisabled;
        // this.databaseDisabled = this.appService.flags.environment.databaseDisabled;
        this.Environment.app_server.server_type = this.appService.alm.deployment.deployment_type;
        this.http.get(`${this.appService.URL}/api/user`)
            .subscribe(users => {
                this.approversAvailable = users.json()
            })
        var that = this;
        var arr = this.Environments;
        $(document).ready(function () {
            (<any>$("#sortable")).sortable({
                start: function (event, ui) {
                    ui.item.startPos = ui.item.index();
                },
                update: function (event, ui) {
                    var a = ui.item.startPos;
                    var b = ui.item.index();
                    sortArray(a, b);
                }
            });
        });
        function sortArray(a, b) {
            var c = arr[a];
            arr[a] = arr[b];
            arr[b] = c;
            console.log(arr);
            // that.Environments = arr
            console.log(that.Environments);
            for (var i = 0; i < that.Environments.length; i++) {
                that.Environments[i].environment_sequence = `${i}`;
            }
            console.log(that.Environments);
        }
        // function saveArray() {
        //     for (var i = 0; i < arr.length; i++) {
        //         console.log(arr);
        //     }
        // }
    }
    onCreate() {
        this.showValidations = true;
        this.EmptyEnv = false;
        if (!this.environmentsForm.valid) return;
        this.Environment.environment_sequence = `${this.Environments.length}`;
        this.Environments.push(this.Environment);
        console.log(this.Environments);
        this.appService.Environments = this.Environments;
        this.showValidations = false;
        this.Environment = {
            environment_name: '',
            environment_type: '',
            environment_sequence: '0',
            environment_approver: '',
            environment_approver_name: '',
            environment_project_key: '',
            app_server: {
                server_type: this.appService.alm.deployment.deployment_type,
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
        }
    }
}