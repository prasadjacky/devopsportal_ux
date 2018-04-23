import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'binaryRepository',
    templateUrl: './binary_repository.component.html',
    styleUrls: ['./binary_repository.component.css']

})

export class BinaryRepositoryComponent implements OnInit{

   @ViewChild('brForm') brForm;

   constructor(private appService: AppService,private http: Http){}
     
     public br:AlmTool = {
        http_proxy:'',
        tool_category:'binary_repo',
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

    public brObj:AlmTool;
    public viewObj:AlmTool = {
        http_proxy:'',
        tool_category:'binary_repo',
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

    public proxyNames:string[]=[];
    public showValidations:boolean = false
    public index:number; 
    public valid:boolean;
    public brArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb4').show();
            $('.message').hide();
            $('#sb4').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.brForm.valid) {
            return;
        }
        this.showValidations = false;
        this.brObj = {
            http_proxy:this.br.http_proxy,
            tool_category:this.br.tool_category,            
            tool_url:this.br.tool_url,
            tool_instance_name:this.br.tool_instance_name,
            tool_name:this.br.tool_name,
            tool_version:this.br.tool_version,
            proxy_required:this.br.proxy_required,
            tool_auth:{
                auth_type:this.br.tool_auth.auth_type,
                auth_username:this.br.tool_auth.auth_username,
                auth_password:this.br.tool_auth.auth_password,
                auth_token:this.br.tool_auth.auth_token
            }
        }
        if(this.br.tool_auth.auth_type == 'password'){
            delete this.brObj.tool_auth.auth_token;
        }
        else{
            delete this.brObj.tool_auth.auth_password;
            delete this.brObj.tool_auth.auth_username;
        }
        console.log(this.brObj);
        this.postValidateBR();
    }

    onSave(event) {
        this.postBR();
        this.getBR();
        this.onCancel();
        event.preventDefault();
    }

    confirmDelete(br:any){
        this.viewObj = br;
    }

    onDelete(br:any){ 
        this.deleteBR(br);
    }

    onView(br: any){
        this.viewObj = br;
    }


    onEditSave(editBrForm: any){

        // this.editObj = {
        //     tool_instance_name:editBrForm.tool_instance_name,
        //     tool_name:editBrForm.tool_name,
        //     tool_version:editBrForm.tool_version,
        //     proxy_required:editBrForm.proxy_required,
        //     tool_auth:{
        //         auth_type:editBrForm.auth_type,
        //         auth_username:editBrForm.auth_username,
        //         auth_password:editBrForm.auth_password,
        //         auth_token:editBrForm.auth_token
        //     }
        // }
       
        // this.brArray.splice(this.index,1,this.editObj);
        // console.log(this.brArray)
        
    }

    onCancel(){
        this.br.http_proxy = '';
        this.br.tool_url = '';
        this.br.tool_instance_name = '';
        this.br.tool_name = '';
        this.br.tool_version = '';
        this.br.proxy_required = false,
        this.br.tool_auth.auth_type = '';
        this.br.tool_auth.auth_username = '';
        this.br.tool_auth.auth_password = '';
        this.br.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getBR();
        this.brArray = this.appService.binary_repository;      
        this.proxyNames = this.appService.proxyNames;
    }

//---------api calling functions--------------------------------------------------------------------------------------

    postValidateBR(){
        if (!this.brObj.proxy_required) delete this.brObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/validation/binary_repo`,this.brObj).subscribe(
            res => {
                console.log(res)
                if(res.status == 200){
                    this.valid = true;
                    console.log('success')
                    $('document').ready(function(){
                            $('#sb4').show();
                            $('#vb4').hide();       
                            $('.message').show();
                    })
                }
                else{
                    $('.message').show();
                    this.valid = false;
                    console.log('failure')
                }    
                },
            error =>{
                $('.message').show();
                console.log(error);
                }
        );
    }

    postBR(){
        this.http.post(`${this.appService.URL}/api/tool`,this.brObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted binary_repo')
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

    getBR(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=binary_repo`).subscribe(
           res => {
            
               this.brArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated binary_repo')
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

    deleteBR(br:any){
       this.http.delete(`${this.appService.URL}/api/tool/${br._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getBR();
                   console.log('successfulyl deleted br '+ br.tool_name)
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