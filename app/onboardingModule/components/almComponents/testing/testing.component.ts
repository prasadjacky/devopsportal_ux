import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'testing',
    templateUrl: './testing.component.html',
    styleUrls: ['./testing.component.css']

})

export class TestingComponent implements OnInit {
    @ViewChild('testingForm') testingForm;
    public Testing;
    public showValidations = false;
    constructor(private appService: AppService) { }
    disabled = false;
    disabled_unit = false;
    disabled_functional = false;

    toggleCheckUnit() {
        this.Testing.unit['configured'] = !this.disabled_unit;
    }
    toggleCheckFunctional() {
        this.Testing.functional['configured'] = !this.disabled_functional;
    }
    onValidate() {
        this.disabled = this.disabled_functional && this.disabled_unit;
        return this.testingForm.valid
    }
    ngOnInit() {
        this.Testing = this.appService.alm.testing;
    }
    ngDoCheck(){
        this.Testing = this.appService.alm.testing;
    }
}