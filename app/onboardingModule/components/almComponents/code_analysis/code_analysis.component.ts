import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'codeAnalysis',
    templateUrl: './code_analysis.component.html',
    styleUrls: ['./code_analysis.component.css']

})

export class CodeAnalysisComponent implements OnInit {
    @ViewChild('codeAnalysisForm') codeAnalysisForm;
    public CodeAnalysis;
    public showValidations = false;
    constructor(private appService: AppService,private http:Http) { }
    disabled = false;
    disabledCC = false;
    ToolInstance;

   toggleCheck() {
        this.CodeAnalysis['configured'] = !this.disabled;
    }
    toggleCheckCC() {
        this.CodeAnalysis['coverage_framework_configured'] = this.disabledCC;
    }
    onValidate() {
        if (this.disabled) {
            return this.disabled;
        } else {
            return this.codeAnalysisForm.valid
        }
    }
    ngOnInit() {
        this.CodeAnalysis = this.appService.alm.code_analysis;
        this.http.get(`${this.appService.URL}/api/population/tool_instance?tool_category=code_analysis&tool_name=SonarQube`)
            .subscribe(res => {
                this.ToolInstance = res.json()
            })
    }
    ngDoCheck(){
        this.CodeAnalysis = this.appService.alm.code_analysis;
    }
}