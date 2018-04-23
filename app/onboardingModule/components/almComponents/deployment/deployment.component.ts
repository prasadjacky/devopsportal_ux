import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';
@Component({
    moduleId: module.id,
    selector: 'deployment',
    templateUrl: './deployment.component.html',
    styleUrls: ['./deployment.component.css']

})

export class DeploymentComponent implements OnInit {
    @ViewChild('deploymentForm') deploymentForm;
    public Deployment;
    public AppServer;
    public Database;
    public showValidations = false;
    constructor(private appService: AppService) { }
    disabledDeployment = false;
    disabledAppServer = false;
    disabledDatabase = false;

    toggleCheckDeployment() {
        this.Deployment['configured'] = !this.disabledDeployment;
    }
    toggleCheckAppServer() {
        this.AppServer['configured'] = !this.disabledAppServer;
    }
    toggleCheckDatabase() {
        this.Database['configured'] = !this.disabledDatabase;
    }
    onValidate() {
        if (this.disabledDeployment) {
            return true;
        } else {
            return this.deploymentForm.valid;
        }
    }
    ngOnInit() {
        this.Deployment = this.appService.alm.deployment;
        this.AppServer = this.appService.alm.app_server;
        this.Database = this.appService.alm.database;
    }
    ngDoCheck(){
        this.Deployment = this.appService.alm.deployment;
        this.AppServer = this.appService.alm.app_server;
        this.Database = this.appService.alm.database;
    }
}