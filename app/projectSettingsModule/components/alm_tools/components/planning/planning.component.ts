import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';


@Component({
    moduleId: module.id,
    selector: 'planning',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.css']

})

export class PlanningComponent{
    constructor(private appService: AppService, private http:Http){}
    
    public _id;
    public enabled = false;
    public Planning:any={
        platform_tool:'',
        tool:'',
        workflow_type:'',
        planning_project_url:''
    }

    ngOnInit(){
       this._id= this.appService.selectedProjectId;
       this.getProjectPlanningApi() 
    }

//----------------------api calling functions------------------------------------------------------------------------

   getProjectPlanningApi(){
       this.http.get(`${this.appService.URL}/api/population/project_details?project_key=${this.appService.selectedProjectKey}`).subscribe(
           res => {
            
               var temp = JSON.parse(res['_body']);
               this.Planning={
                   platform_tool:temp.project_tools.planning.platform_tool.tool_instance_name,
                   workflow_type:temp.project_tools.planning.workflow_type,
                   tool:temp.project_tools.planning.tool,
                   planning_project_url:temp.project_tools.planning.planning_project_url,
               }

               if(res.status == 200){
                   console.log('successfully populated planning tool')
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