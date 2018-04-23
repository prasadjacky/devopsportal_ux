import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'project_information',
    templateUrl: 'project_information.component.html',
    styleUrls: ['./project_information.component.css']
})

export class ProjectInformationComponent {
    constructor(private appService: AppService, private http:Http){}

    public ProjectInformation: any = {
        project_name: '',
        project_type: '',
        project_key: '',
        project_organization: {
            manager:''
        }
    }
    public _id;

    ngOnInit() {
        this._id = this.appService.selectedProjectId
        this.getProjectInformationApi();
    }


//----------------------api calling functions------------------------------------------------------------------------

   getProjectInformationApi(){
       this.http.get(`${this.appService.URL}/api/project/${this._id}`).subscribe(
           res => {
            
               this.ProjectInformation = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated project information')
               }
               else{
                   console.log('failure')
               }    
            },
          error =>{
              console.log(error);
            }
       );
   } 

}