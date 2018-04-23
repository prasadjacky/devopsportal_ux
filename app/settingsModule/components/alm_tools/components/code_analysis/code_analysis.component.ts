import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'codeAnalysis',
    templateUrl: './code_analysis.component.html',
    styleUrls: ['./code_analysis.component.css']

})

export class CodeAnalysisComponent implements OnInit{

  @ViewChild('caForm') caForm;

  constructor(private appService: AppService,private http: Http){}
     
     public ca:AlmTool = {
        http_proxy:'',
        tool_category:'code_analysis',
        tool_instance_name:'',
        tool_url:'',
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

    public caObj:AlmTool;
    public viewObj:AlmTool = {
        http_proxy:'',
        tool_category:'code_analysis',
        tool_instance_name:'',
        tool_name:'',
        tool_url:'',
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
    public showValidations:boolean = false;
    public index:number; 
    public valid:boolean;
    public caArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb3').show();
            $('#sb3').hide();
            $('.message').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.caForm.valid) {
            return;
        }
        this.showValidations = false;
        this.caObj = {
            http_proxy:this.ca.http_proxy,
            tool_category:this.ca.tool_category,
            tool_instance_name:this.ca.tool_instance_name,
            tool_name:this.ca.tool_name,
            tool_url:this.ca.tool_url,
            tool_version:this.ca.tool_version,
            proxy_required:this.ca.proxy_required,
            tool_auth:{
                auth_type:this.ca.tool_auth.auth_type,
                auth_username:this.ca.tool_auth.auth_username,
                auth_password:this.ca.tool_auth.auth_password,
                auth_token:this.ca.tool_auth.auth_token
            }
        }
        if(this.ca.tool_auth.auth_type == 'password'){
            delete this.caObj.tool_auth.auth_token;
        }
        else{
            delete this.caObj.tool_auth.auth_password;
            delete this.caObj.tool_auth.auth_username;
        }
        console.log(this.caObj);
        this.postValidateCA();
    }

    onSave() {
        this.postCA();
        this.getCA();
        this.onCancel();
    }

    confirmDelete(ca:any){
        this.viewObj = ca;
    }

    onDelete(ca:any){ 
        this.deleteCA(ca);
    }

    onView(ca: any){
        this.viewObj = ca;
    }

    onEditSave(editCaForm: any){
       
        // this.editObj = {
        //     tool_instance_name:editCaForm.tool_instance_name,
        //     tool_name:editCaForm.tool_name,
        //     tool_version:editCaForm.tool_version,
        //     proxy_required:editCaForm.proxy_required,
        //     proxy_type:editCaForm.proxy_type,
        //     proxy_reference:editCaForm.proxy_reference,
        //     tool_auth:{
        //         auth_type:editCaForm.auth_type,
        //         auth_username:editCaForm.auth_username,
        //         auth_password:editCaForm.auth_password,
        //         auth_token:editCaForm.auth_token
        //     }
        // }

        // this.caArray.splice(this.index,1,this.editObj);
        // console.log(this.caArray)
        
    }

    onCancel(){
        this.ca.http_proxy='';
        this.ca.tool_instance_name = '';
        this.ca.tool_name = '';
        this.ca.tool_version = '';
        this.ca.proxy_required = false,
        this.ca.tool_auth.auth_type = '';
        this.ca.tool_auth.auth_username = '';
        this.ca.tool_auth.auth_password = '';
        this.ca.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getCA();
        this.caArray = this.appService.code_analysis;      
        this.proxyNames = this.appService.proxyNames;
    }

//---------api calling functions----------------------------------------------------------------------------------

    postValidateCA(){
        if (!this.caObj.proxy_required) delete this.caObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/validation/code_analysis`,this.caObj).subscribe(
            res => {
                console.log(res)
                if(res.status == 200){
                    this.valid = true;
                    console.log('success')
                    $('document').ready(function(){
                            $('#sb3').show();
                            $('#vb3').hide();
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

    postCA(){
        this.http.post(`${this.appService.URL}/api/tool`,this.caObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted ca')
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

    getCA(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=code_analysis`).subscribe(
           res => {
            
               this.caArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated code_analysis')
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

    deleteCA(ca:any){
       this.http.delete(`${this.appService.URL}/api/tool/${ca._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getCA();
                   console.log('successfulyl deleted ca '+ ca.tool_name)
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