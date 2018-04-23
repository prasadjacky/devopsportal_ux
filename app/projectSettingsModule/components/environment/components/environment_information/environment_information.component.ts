import { Environment } from './environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from '../../../../../services/app.service';


@Component({
    moduleId: module.id,
    selector: 'environment_information',
    templateUrl: 'environment_information.component.html',
    styleUrls: ['./environment_information.component.css']
})

export class EnvironmentInformationComponent implements OnInit {
    constructor(private appService: AppService, private http:Http){}
    public environment: Environment = {
        environment_name: '',
        environment_type: '',
        environment_sequence: '',
        environment_approver: '',
        app_server: {
            server_type: '',
            vm_server: {
                server_ip: '',
                auth_type: '',
                auth_username: '',
                auth_password: '',
                app_server_path: ''
            },
            container_server: {
                host_ip: '',
                host_auth_type: '',
                host_auth_username: '',
                host_auth_password: '',
                image_name: '',
                container_name: '',
                ports: ''
            }
        },
        database: {
            server_ip: '',
            auth_type: 'password',
            auth_username: '',
            auth_password: '',
            auth_key: '',
            db_name: '',
            db_url: '',
            db_username: '',
            db_password: ''
        }
    }
    public environmentObj: Environment;
    public Environments: Environment[] = [];
    public key;
    
    onSelect(event){
        for(var i=0;i<this.Environments.length;i++){
            if(event == this.Environments[i]['environment_name']){
                this.environment = this.Environments[i]
            }
        }
    }

    ngOnInit() {
        this.key = this.appService.selectedProjectKey;
        this.getEnvironmentsApi();
    }

//----------------------api calling functions------------------------------------------------------------------------

   getEnvironmentsApi(){
       this.http.get(`${this.appService.URL}/api/population/project_environments/?project_key=${this.key}`).subscribe(
           res => {
            
               if(res['_body'] != null){
                    this.Environments = JSON.parse(res['_body']);
                    if(this.Environments.length == 1){
                        this.environment = this.Environments[0];
                    }
               }

               if(res.status == 200){
                   console.log('successfully populated project environment')
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