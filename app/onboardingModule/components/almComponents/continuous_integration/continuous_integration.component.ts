import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'continuousIntegration',
    templateUrl: './continuous_integration.component.html',
    styleUrls: ['./continuous_integration.component.css']

})

export class ContinuousIntegrationComponent implements OnInit {
    change: boolean;
    @ViewChild('continuousintegrationForm') continuousintegrationForm;
    public ContinuousIntegration;
    public showValidations = false;
    ToolInstance;

    constructor(private appService: AppService, private http:Http) { }

    onValidate() {
        return this.continuousintegrationForm.valid
    }
    ngOnInit() {
        this.change=false;
        this.ContinuousIntegration = this.appService.alm.ci;
        this.http.get(`${this.appService.URL}/api/population/tool_instance?tool_category=ci&tool_name=Jenkins`)
            .subscribe(res => {
                this.ToolInstance = res.json()
            })
    }
    onChange(event: String){
        this.change=true;
    }
    ngDoCheck(){
        this.ContinuousIntegration = this.appService.alm.ci;
        if(!this.change){
            this.ContinuousIntegration['build_agent_label']='agent-'+this.appService.projectInformation.project_name;
        }
    }
}