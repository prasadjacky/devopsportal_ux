import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';


@Component({
    moduleId: module.id,
    selector: 'deployment',
    templateUrl: './deployment.component.html',
    styleUrls: ['./deployment.component.css']

})

export class DeploymentComponent implements OnInit{
    constructor(private appService: AppService, private http:Http){}
    
    public _id;
    public Deployment:any ={
        application_name: '',
        deployment_type: '',
        tool: '',
        configured: false,
        deployment_environments:[]
    }
    public Database:any = {
        tool_version:'',
        tool: '',
        configured: false
    };

    public AppServer:any = {
        tool_version: '',
        tool: '',
        configured: false
    };
    
    ngOnInit(){
       this._id= this.appService.selectedProjectId;
       this.getProjectCiApi() 
    }

//----------------------api calling functions------------------------------------------------------------------------

   getProjectCiApi(){
       this.http.get(`${this.appService.URL}/api/project/${this._id}`).subscribe(
           res => {
            
               var temp = JSON.parse(res['_body']);
               this.Deployment={
                   tool:temp.project_tools.deployment.tool,
                   application_name:temp.project_tools.deployment.application_name,
                   deployment_type:temp.project_tools.deployment.deployment_type,
                   configured:temp.project_tools.deployment.configured,
                   deployment_environments:temp.project_tools.deployment.deployment_environments,
               }

               this.Database={
                   tool:temp.project_tools.database.tool,
                   tool_version:temp.project_tools.database.tool_version,
                   configured:temp.project_tools.database.configured,
               }

               this.AppServer={
                   tool:temp.project_tools.app_server.tool,
                   tool_version:temp.project_tools.app_server.tool_version,
                   configured:temp.project_tools.app_server.configured,
               }

               if(res.status == 200){
                   console.log('successfully populated deployment tool')
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