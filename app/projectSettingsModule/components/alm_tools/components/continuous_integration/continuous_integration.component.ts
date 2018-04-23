import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'continuousIntegration',
    templateUrl: './continuous_integration.component.html',
    styleUrls: ['./continuous_integration.component.css']

})

export class ContinuousIntegrationComponent {
    constructor(private appService: AppService, private http: Http) { }

    public _id;
    public ContinuousIntegration: any = {
        tool: '',
        coverage_framework: '',
        platform_tool: '',
        build_agent_label: '',
        trigger_type: '',
        ci_email: '',
        ci_project_name: '',
        ci_project_url: ''
    }

    ngOnInit() {
        this._id = this.appService.selectedProjectId;
        this.getProjectCiApi()
    }

    //----------------------api calling functions------------------------------------------------------------------------

    getProjectCiApi() {
        this.http.get(`${this.appService.URL}/api/population/project_details?project_key=${this.appService.selectedProjectKey}`).subscribe(
            res => {

                var temp = JSON.parse(res['_body']);
                this.ContinuousIntegration = {
                    tool: temp.project_tools.ci.tool,
                    platform_tool: temp.project_tools.ci.platform_tool.tool_instance_name,
                    coverage_framework: temp.project_tools.ci.coverage_framework,
                    trigger_type: temp.project_tools.ci.trigger_type,
                    ci_project_name: temp.project_tools.ci.ci_project_name,
                    ci_project_url: temp.project_tools.ci.ci_project_url,
                    build_agent_label: temp.project_tools.ci.build_agent_label,
                }

                if (res.status == 200) {
                    console.log('successfully populated ci tool')
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