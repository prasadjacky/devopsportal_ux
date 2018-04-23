import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'build',
    templateUrl: './build.component.html',
    styleUrls: ['./build.component.css']
})

export class BuildComponent implements OnInit {
    @ViewChild('buildForm') buildForm;
    public Build;
    public showValidations = false;
    constructor(private appService: AppService) { }

    onValidate() {
        return this.buildForm.valid
    }
    ngOnInit() {
        this.Build = this.appService.alm.development;
    }
    ngDoCheck(){
        this.Build = this.appService.alm.development;
    }
}