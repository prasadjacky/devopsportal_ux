import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'binaryRepository',
    templateUrl: './binary_repository.component.html',
    styleUrls: ['./binary_repository.component.css']

})

export class BinaryRepositoryComponent implements OnInit {
    change: boolean;
    artifact_name:any;
    @ViewChild('binaryRepositoryForm') binaryRepositoryForm;
    public BinaryRepository;
    public showValidations = false;
    constructor(private appService: AppService, private http:Http) { }
    disabled = false;
    ToolInstance;

   toggleCheck() {
        this.BinaryRepository['configured'] = !this.disabled;
    }
    onValidate() {
        if (this.disabled) {
            return this.disabled;
        } else {
            return this.binaryRepositoryForm.valid
        }
    }
    ngOnInit() {
        this.change=false;
        this.BinaryRepository = this.appService.alm.binary_repo;
        this.http.get(`${this.appService.URL}/api/population/tool_instance?tool_category=binary_repo&tool_name=Artifactory`)
            .subscribe(res => {
                this.ToolInstance = res.json()
            })
    }
    onChange(event: String){
        this.change=true;
    }
    ngDoCheck(){
        this.BinaryRepository = this.appService.alm.binary_repo;
        if(!this.change){
            this.BinaryRepository['artifact_name']=this.appService.projectInformation.project_name+'-Snapshot-0.0.1';
        }        
    }
}