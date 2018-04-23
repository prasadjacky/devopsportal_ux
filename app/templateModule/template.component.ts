import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppService } from '../services/app.service';
// import { MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'templateselector',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {
    ngOnInit() {
	}

	constructor(private appService: AppService){
	}
	clearProject() {
        this.appService.clearFields();
    }
}
