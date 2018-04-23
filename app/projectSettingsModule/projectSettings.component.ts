import { AppService } from '../services/app.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'projectSettings',
    templateUrl: 'projectSettings.component.html',
    styleUrls: ['./projectSettings.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProjectSettingsComponent implements OnInit {
    constructor(private appService: AppService){}
    ngOnInit() {
        this.appService.checkCredentials();
    }
}