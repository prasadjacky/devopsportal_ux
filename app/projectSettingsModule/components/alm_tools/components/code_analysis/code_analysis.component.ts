import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'codeAnalysis',
    templateUrl: './code_analysis.component.html',
    styleUrls: ['./code_analysis.component.css']

})

export class CodeAnalysisComponent {
    constructor(private appService: AppService, private http: Http) { }

    public _id;
    public enabled = false;
    public CodeAnalysis: any = {
        platform_tool: '',
        tool: '',
        coverage_framework: '',
        code_analysis_project_url: ''
    }

    ngOnInit() {
        this._id = this.appService.selectedProjectId;
        this.getProjectCaApi()
    }

    //----------------------api calling functions------------------------------------------------------------------------

    getProjectCaApi() {
        this.http.get(`${this.appService.URL}/api/population/project_details?project_key=${this.appService.selectedProjectKey}`).subscribe(
            res => {

                var temp = JSON.parse(res['_body']);
                this.CodeAnalysis = {
                    tool: temp.project_tools.code_analysis.tool,
                    platform_tool: temp.project_tools.code_analysis.platform_tool.tool_instance_name,
                    coverage_framework: temp.project_tools.code_analysis.coverage_framework,
                    code_analysis_project_url: temp.project_tools.code_analysis.code_analysis_project_url,
                }

                if (res.status == 200) {
                    console.log('successfully populated code_analysis tool')
                }
                else {
                    console.log('failure')
                }
            },
            error => {
                console.log(error);
            }
        );
    }

}