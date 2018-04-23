import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'sourceControl',
    templateUrl: './source_control.component.html',
    styleUrls: ['./source_control.component.css']

})

export class SourceControlComponent {
    constructor(private appService: AppService, private http: Http) { }

    public _id;
    public SourceControl: any = {
        platform_tool: '',
        repo_name: '',
        tool: '',
        repo_url: '',
        scm_project_url: ''
    }

    ngOnInit() {
        this._id = this.appService.selectedProjectId;
        this.getProjectScmApi()
    }

    //----------------------api calling functions------------------------------------------------------------------------

    getProjectScmApi() {
        this.http.get(`${this.appService.URL}/api/population/project_details?project_key=${this.appService.selectedProjectKey}`).subscribe(
            res => {

                var temp = JSON.parse(res['_body']);
                this.SourceControl = {
                    platform_tool: temp.project_tools.scm.platform_tool.tool_instance_name,
                    repo_name: temp.project_tools.scm.repo_name,
                    tool: temp.project_tools.scm.tool,
                    repo_url: temp.project_tools.scm.repo_url,
                    scm_project_url: temp.project_tools.scm.scm_project_url
                }

                if (res.status == 200) {
                    console.log('successfully populated scm tool')
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