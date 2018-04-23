import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'binaryRepository',
    templateUrl: './binary_repository.component.html',
    styleUrls: ['./binary_repository.component.css']

})

export class BinaryRepositoryComponent{
    constructor(private appService: AppService, private http:Http){}
    
    public _id;
    public enabled = false;
    public BinaryRepository:any={
        tool:'',
        platform_tool:'',
        artifact_type:'',
        storage_path:''
    }

    ngOnInit(){
       this._id= this.appService.selectedProjectId;
       this.getProjectBinRepoApi() 
    }

//----------------------api calling functions------------------------------------------------------------------------

   getProjectBinRepoApi(){
       this.http.get(`${this.appService.URL}/api/population/project_details?project_key=${this.appService.selectedProjectKey}`).subscribe(
           res => {
            
               var temp = JSON.parse(res['_body']);
               this.BinaryRepository={
                   tool:temp.project_tools.binary_repo.tool,
                   platform_tool:temp.project_tools.binary_repo.platform_tool.tool_instance_name,
                   artifact_type:temp.project_tools.binary_repo.artifact_type,
                   storage_path:temp.project_tools.binary_repo.storage_path,
               }

               if(res.status == 200){
                   console.log('successfully populated binary_repo tool')
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