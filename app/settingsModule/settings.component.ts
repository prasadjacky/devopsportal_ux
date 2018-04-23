import { AppService } from '../services/app.service';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class SettingsComponent implements OnInit {

    constructor(private appService: AppService){}
    ngOnInit() {
        this.appService.checkCredentials();
    }
}