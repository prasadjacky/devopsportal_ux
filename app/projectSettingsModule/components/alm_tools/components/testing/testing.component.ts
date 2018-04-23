import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'testing',
    templateUrl: './testing.component.html',
    styleUrls: ['./testing.component.css']

})

export class TestingComponent{
    constructor(private appService: AppService, private http:Http){}
    
    public _id;
    public enabled = false;
    public Testing:any={
        unit:{
            framework:'',
            framework_version:''
        },
        functional:{
            driver:'',
            framework:'',
            mode:'',
        }
    }

    ngOnInit(){
       this._id= this.appService.selectedProjectId;
       this.getProjectTestingApi() 
    }

//----------------------api calling functions------------------------------------------------------------------------

   getProjectTestingApi(){
       this.http.get(`${this.appService.URL}/api/project/${this._id}`).subscribe(
           res => {
            
               var temp = JSON.parse(res['_body']);
               this.Testing={
                   unit:{
                    framework:temp.project_tools.testing.unit.framework,
                    framework_version:temp.project_tools.testing.unit.framework_version,
                   },
                   functional:{
                    mode:temp.project_tools.testing.functional.mode,
                    driver:temp.project_tools.testing.functional.driver,
                    framework:temp.project_tools.testing.functional.framework
                   }
               }

               if(res.status == 200){
                   console.log('successfully populated testing tool')
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