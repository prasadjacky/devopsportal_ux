import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'deployment',
    templateUrl: './deployment.component.html',
    styleUrls: ['./deployment.component.css']

})

export class DeploymentComponent implements OnInit{
    
    @ViewChild('deploymentForm') deploymentForm;

    constructor(private appService: AppService,private http: Http){}
     
     public deployment:AlmTool = {
        http_proxy:'',
        tool_category:'deployment',
        tool_url:'',
        tool_instance_name:'',
        tool_name:'',
        tool_version:'',
        proxy_required:false,
        tool_auth:{
            auth_type:'',
            auth_username:'',
            auth_password:'',
            auth_token:''
        }
    };

    public deploymentObj:AlmTool;
    public viewObj:AlmTool = {
        http_proxy:'',
        tool_category:'deployment',
        tool_url:'',
        tool_instance_name:'',
        tool_name:'',
        tool_version:'',
        proxy_required:false,
        tool_auth:{
            auth_type:'',
            auth_username:'',
            auth_password:'',
            auth_token:''
        }
    };
    
    
    public proxyNames:string[]=[];
    public showValidations:boolean = false
    public index:number; 
    public valid:boolean;
    public deploymentArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb6').show();
            $('#sb6').hide();
            $('.message').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.deploymentForm.valid) {
            return;
        }
        this.showValidations = false;
        this.deploymentObj = {
            http_proxy:this.deployment.http_proxy,
            tool_category:this.deployment.tool_category,
            tool_url:this.deployment.tool_url,
            tool_instance_name:this.deployment.tool_instance_name,
            tool_name:this.deployment.tool_name,
            tool_version:this.deployment.tool_version,
            proxy_required:this.deployment.proxy_required,
            tool_auth:{
                auth_type:this.deployment.tool_auth.auth_type,
                auth_username:this.deployment.tool_auth.auth_username,
                auth_password:this.deployment.tool_auth.auth_password,
                auth_token:this.deployment.tool_auth.auth_token
            }
        }
        if(this.deployment.tool_auth.auth_type == 'password'){
            delete this.deploymentObj.tool_auth.auth_token;
        }
        else{
            delete this.deploymentObj.tool_auth.auth_password;
            delete this.deploymentObj.tool_auth.auth_username;
        }
        console.log(this.deploymentObj);
        this.postValidateDeployment(); 
    }

    onSave(event) {
        this.postDeployment();
        this.getDeployment();
        this.onCancel();
        event.preventDefault();
    }

    confirmDelete(deployment:any){
        this.viewObj = deployment;
    }

    onDelete(deployment){ 
        this.deleteDeployment(deployment)
    }

    onView(deployment: any){
        this.viewObj = deployment;
    }

    onEditSave(editDeploymentForm: any){

        // this.editObj = {
        //     tool_instance_name:editDeploymentForm.tool_instance_name,
        //     tool_name:editDeploymentForm.tool_name,
        //     tool_version:editDeploymentForm.tool_version,
        //     proxy_required:editDeploymentForm.proxy_required,
        //     tool_auth:{
        //         auth_type:editDeploymentForm.auth_type,
        //         auth_username:editDeploymentForm.auth_username,
        //         auth_password:editDeploymentForm.auth_password,
        //         auth_token:editDeploymentForm.auth_token
        //     }
        // }
       
        // this.deploymentArray.splice(this.index,1,this.editObj);
        // console.log(this.deploymentArray)
        
    }

    onCancel(){
        this.deployment.tool_url = '';
        this.deployment.http_proxy = '';
        this.deployment.tool_instance_name = '';
        this.deployment.tool_name = '';
        this.deployment.tool_version = '';
        this.deployment.proxy_required = false,
        this.deployment.tool_auth.auth_type = '';
        this.deployment.tool_auth.auth_username = '';
        this.deployment.tool_auth.auth_password = '';
        this.deployment.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getDeployment();
        // this.deploymentArray = this.appService.deployment;      
        this.proxyNames = this.appService.proxyNames;
    }

//---------api calling functions----------------------------------------------------------------------------------

    postValidateDeployment(){
        if (!this.deploymentObj.proxy_required) delete this.deploymentObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/validation/deployment`,this.deploymentObj).subscribe(
           res => {
               console.log(res)
               if(res.status == 200){
                   this.valid = true;
                   console.log('success')
                   $('document').ready(function(){
                        $('#sb6').show();
                        $('#vb6').hide();
                        $('.message').show();
                   })
               }
               else{
                   this.valid = false;
                    $('.message').show();
                   console.log('failure')
               }    
            },
          error =>{
              $('.message').show();
              console.log(error);
            }
       );
    }

    postDeployment(){
        this.http.post(`${this.appService.URL}/api/tool`,this.deploymentObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted deployment')
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

    getDeployment(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=deployment`).subscribe(
           res => {
            
               this.deploymentArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated deployment')
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

    deleteDeployment(deployment:any){
       this.http.delete(`${this.appService.URL}/api/tool/${deployment._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getDeployment();
                   console.log('successfulyl deleted deployment '+ deployment.tool_name)
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