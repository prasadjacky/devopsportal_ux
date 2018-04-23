import { Http } from '@angular/http';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'sourceControl',
    templateUrl: './source_control.component.html',
    styleUrls: ['./source_control.component.css']
})

export class SourceControlComponent implements OnInit {
    repo_name: any;
    change: boolean;
    @ViewChild('sourceControlForm') sourceControlForm;
    SourceControl: Object;
    ToolInstance;
    showValidations = false;
    constructor(private appService: AppService, private http: Http) { 
        /* this.SourceControl = this.appService.alm.scm;
        this.repo_name=this.appService.alm.scm.repo_name;
        console.log("repo_name");
        console.log(this.repo_name); */
    }
    onValidate() {
        return this.sourceControlForm.valid;
    }
    ngOnInit() {
        this.change=false;
        this.SourceControl = this.appService.alm.scm;
        this.http.get(`${this.appService.URL}/api/population/tool_instance?tool_category=scm&tool_name=Bitbucket`)
            .subscribe(res => {
                this.ToolInstance = res.json()
            })
    }
    onChange(event: String){
        this.change=true;
    }
    ngDoCheck(){
        this.SourceControl = this.appService.alm.scm;
        if(!this.change){
            this.SourceControl['repo_name']=this.appService.projectInformation.project_name+'-repo';
        }
    }
}