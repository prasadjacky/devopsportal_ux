import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'continuousIntegration',
    templateUrl: './continuous_integration.component.html',
    styleUrls: ['./continuous_integration.component.css']

})

export class ContinuousIntegrationComponent implements OnInit{
    
   @ViewChild('ciForm') ciForm;

   constructor(private appService: AppService,private http: Http){}
     
     public ci:AlmTool = {
        tool_url:'',
        http_proxy:'',
        tool_category:'ci',
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

    public ciObj:AlmTool;
    public viewObj:AlmTool = {
        tool_url:'',
        http_proxy:'',
        tool_category:'ci',
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
    public ciArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb5').show();
            $('#sb5').hide();
            $('.message').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.ciForm.valid) {
            return;
        }
        this.showValidations = false;
        this.ciObj = {
            http_proxy:this.ci.http_proxy,
            tool_category:this.ci.tool_category,
            tool_url:this.ci.tool_url,
            tool_instance_name:this.ci.tool_instance_name,
            tool_name:this.ci.tool_name,
            tool_version:this.ci.tool_version,
            proxy_required:this.ci.proxy_required,
            tool_auth:{
                auth_type:this.ci.tool_auth.auth_type,
                auth_username:this.ci.tool_auth.auth_username,
                auth_password:this.ci.tool_auth.auth_password,
                auth_token:this.ci.tool_auth.auth_token
            }
        }
        if(this.ci.tool_auth.auth_type == 'password'){
            delete this.ciObj.tool_auth.auth_token;
        }
        else{
            delete this.ciObj.tool_auth.auth_password;
            delete this.ciObj.tool_auth.auth_username;
        }
        this.postValidateCI(); 
    }

    onSave(event) {
        this.postCI(); 
        this.getCI(); 
        this.onCancel(); 
        event.preventDefault();
    }

    confirmDelete(ci:any){
        this.viewObj = ci;
    }

    onDelete(ci:any){ 
        this.deleteCI(ci);
    }

    onView(ci: any){
        this.viewObj = ci;
    }


    onEditSave(editCiForm: any){

        // this.editObj = {
        //     tool_instance_name:editCiForm.tool_instance_name,
        //     tool_name:editCiForm.tool_name,
        //     tool_version:editCiForm.tool_version,
        //     proxy_required:editCiForm.proxy_required,
        //     tool_auth:{
        //         auth_type:editCiForm.auth_type,
        //         auth_username:editCiForm.auth_username,
        //         auth_password:editCiForm.auth_password,
        //         auth_token:editCiForm.auth_token
        //     }
        // }
       
        // this.ciArray.splice(this.index,1,this.editObj);
        // console.log(this.ciArray)
        
    }

    onCancel(){
        this.ci.http_proxy = '';
        this.ci.tool_url = '';
        this.ci.tool_instance_name = '';
        this.ci.tool_name = '';
        this.ci.tool_version = '';
        this.ci.proxy_required = false,
        this.ci.tool_auth.auth_type = '';
        this.ci.tool_auth.auth_username = '';
        this.ci.tool_auth.auth_password = '';
        this.ci.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getCI();
        // this.ciArray = this.appService.continuous_integration;      
        this.proxyNames = this.appService.proxyNames;
    }

//---------api calling functions----------------------------------------------------------------------------------
   
    postValidateCI(){
        if (!this.ciObj.proxy_required) delete this.ciObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/validation/ci`,this.ciObj).subscribe(
            res => {
                console.log(res)
                if(res.status == 200){
                    this.valid = true;
                    console.log('success')
                    $('document').ready(function(){
                            $('#sb5').show();
                            $('#vb5').hide();
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

    postCI(){
        this.http.post(`${this.appService.URL}/api/tool`,this.ciObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted ci')
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

    getCI(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=ci`).subscribe(
           res => {
            
               this.ciArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated ci')
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

    deleteCI(ci:any){
       this.http.delete(`${this.appService.URL}/api/tool/${ci._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getCI();
                   console.log('successfulyl deleted ci '+ ci.tool_name)
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