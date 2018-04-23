import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css']

})

export class ReleaseComponent implements OnInit {
    @ViewChild('releaseForm') releaseForm;
    public disabled = false;
    public Release;
    public showValidations = false;
    ToolInstance;
    constructor(private appService: AppService,private http:Http) { }

    onValidate() {
        if (this.disabled) {
            return this.disabled;
        } else {
            return this.releaseForm.valid
        }
    }
    toggleCheck() {
        this.Release['configured'] = !this.disabled;
    }
    ngOnInit() {
        // this.Release = this.appService.alm.release;
        this.http.get(`${this.appService.URL}/api/population/tool_instance?tool_category=release&tool_name=JIRA`)
            .subscribe(res => {
                this.ToolInstance = res.json()
            })
    }
    onSave() {
        // this.appService.alm.release = this.Release;
    }
}