import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'development',
    templateUrl: './development.component.html',
    styleUrls: ['./development.component.css']

})

export class DevelopmentComponent{
    constructor(private appService: AppService, private http:Http){}
    
    public _id;
    public Development:any={
        platform:'',
        platform_version:'',
        build_tool:'',
        build_tool_version:'',
        build_proxy_required:false
    }

    ngOnInit(){
       this._id= this.appService.selectedProjectId;
       this.getProjectDevelopmentApi() 
    }

//----------------------api calling functions------------------------------------------------------------------------

   getProjectDevelopmentApi(){
       this.http.get(`${this.appService.URL}/api/project/${this._id}`).subscribe(
           res => {
            
               var temp = JSON.parse(res['_body']);
               this.Development={
                   platform:temp.project_tools.development.platform,
                   platform_version:temp.project_tools.development.platform_version,
                   build_tool:temp.project_tools.development.build_tool,
                   build_tool_version:temp.project_tools.development.build_tool_version,
                   build_proxy_required:temp.project_tools.development.build_proxy_required
               }

               if(res.status == 200){
                   console.log('successfully populated development tool')
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