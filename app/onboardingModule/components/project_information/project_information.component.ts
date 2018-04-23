import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'projectInformation',
    templateUrl: 'project_information.component.html',
    styleUrls: ['./project_information.component.css']
})

export class ProjectInformationComponent implements OnInit {
    @ViewChild('projectInformationForm') projectInformationForm;
    @ViewChild('project_key') project_key;
    public ProjectInformation;
    public managersAvailable = [];
    public showValidations = false;
    public keyExists = false;
    public keyExistsStr = '';
    constructor(private appService: AppService, private http: Http) { }
    pushManager(manager) {
        this.ProjectInformation.project_organization.manager = manager.user_full_name;
        (<any>$('#searchManager')).modal('hide');
    }
    onValidate() {
        return this.projectInformationForm.valid && !this.keyExists;
    }
    checkKey() {
        this.keyExistsStr =this.project_key.value.toUpperCase();
        if (this.keyExistsStr !== '') {
            $('#project_key').addClass('filled');
        } else {
            $('#project_key').removeClass('filled');
        }
        this.http.post(`${this.appService.URL}/api/validation/project?project_key=${this.keyExistsStr}`, new Headers().append('Content-Type', 'application/json'))
            .subscribe(res => {
                if (res.status === 200) {
                    this.keyExists = false;
                    this.ProjectInformation['project_key'] = this.keyExistsStr;
                }
            },
            err => {
                this.keyExists = true;
            })
    }
    ngOnInit() {
        this.ProjectInformation = this.appService.projectInformation;
        this.http.get(`${this.appService.URL}/api/user`)
            .subscribe(users => {
                this.managersAvailable = users.json()
            })
    }
}