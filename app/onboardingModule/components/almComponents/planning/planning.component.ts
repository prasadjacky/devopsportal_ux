import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'planning',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.css']
})

export class PlanningComponent implements OnInit {
    @ViewChild('planningForm') planningForm;
    disabled = false;
    Planning: Object;
    showValidations = false;
    ToolInstance = [];
    constructor(private appService: AppService, private http:Http) { }
    toggleCheck() {
        this.Planning['configured'] = !this.disabled;
    }
    onValidate() {
        if (this.disabled) {
            return this.disabled;
        } else {
            return this.planningForm.valid
        }
    }
    ngOnInit() {
        this.Planning = this.appService.alm.planning;
        this.http.get(`${this.appService.URL}/api/population/tool_instance?tool_category=planning&tool_name=JIRA`)
            .subscribe(res => {
                this.ToolInstance = res.json()
            })
    }

    ngDoCheck(){
        this.Planning = this.appService.alm.planning;
    }
}