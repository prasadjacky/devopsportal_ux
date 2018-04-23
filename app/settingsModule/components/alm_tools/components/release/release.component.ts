import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css']

})

export class ReleaseComponent implements OnInit{
    
    @ViewChild('releaseForm') releaseForm;

    constructor(private appService: AppService,private http: Http){}
     
     public valid:boolean;
     public release:AlmTool = {
        http_proxy:'',
        tool_category:'release',
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

    public releaseObj:AlmTool;
    public viewObj:AlmTool = {
        http_proxy:'',
        tool_category:'release',
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
    public showValidations:boolean = false;
    public index:number;
    public releaseArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb7').show();
            $('#sb7').hide();
            $('.message').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.releaseForm.valid) {
            return;
        }
        this.showValidations = false;
        this.releaseObj = {
            http_proxy:this.release.http_proxy,
            tool_category:this.release.tool_category,
            tool_url:this.release.tool_url,
            tool_instance_name:this.release.tool_instance_name,
            tool_name:this.release.tool_name,
            tool_version:this.release.tool_version,
            proxy_required:this.release.proxy_required,
            tool_auth:{
                auth_type:this.release.tool_auth.auth_type,
                auth_username:this.release.tool_auth.auth_username,
                auth_password:this.release.tool_auth.auth_password,
                auth_token:this.release.tool_auth.auth_token
            }
        }
        if(this.release.tool_auth.auth_type == 'password'){
            delete this.releaseObj.tool_auth.auth_token;
        }
        else{
            delete this.releaseObj.tool_auth.auth_password;
            delete this.releaseObj.tool_auth.auth_username;
        }
        this.postValidateRelease();
    }

    onSave(event) {  
        this.postRelease();
        this.getRelease();
        this.onCancel();
        event.preventDefault();
    }

    confirmDelete(release:any){
        this.viewObj = release;
    }

    onDelete(release:any){ 
        this.deleteRelease(release);
    }

    onView(release: any){
        this.viewObj = release;
    }

    onEditSave(editReleaseForm: any){

        // this.editObj = {
        //     tool_instance_name:editReleaseForm.tool_instance_name,
        //     tool_name:editReleaseForm.tool_name,
        //     tool_version:editReleaseForm.tool_version,
        //     proxy_required:editReleaseForm.proxy_required,
        //     proxy_type:editReleaseForm.proxy_type,
        //     proxy_reference:editReleaseForm.proxy_reference,
        //     tool_auth:{
        //         auth_type:editReleaseForm.auth_type,
        //         auth_username:editReleaseForm.auth_username,
        //         auth_password:editReleaseForm.auth_password,
        //         auth_token:editReleaseForm.auth_token
        //     }
        // }    
       
        // this.releaseArray.splice(this.index,1,this.editObj);
        // console.log(this.releaseArray)
        
    }

    onCancel(){
        this.release.tool_url = '';
        this.release.tool_instance_name = '';
        this.release.tool_name = '';
        this.release.tool_version = '';
        this.release.proxy_required = false,
        this.release.tool_auth.auth_type = '';
        this.release.tool_auth.auth_username = '';
        this.release.tool_auth.auth_password = '';
        this.release.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getRelease();
        // this.releaseArray = this.appService.release;        
        this.proxyNames = this.appService.proxyNames;
    }


//---------api calling functions----------------------------------------------------------------------------------

    postValidateRelease(){
        this.http.post(`${this.appService.URL}/api/validation/release`,this.releaseObj).subscribe(
            res => {
                console.log(res)
                if(res.status == 200){
                    this.valid = true;
                    console.log('success')
                    $('document').ready(function(){
                            $('#sb7').show();
                            $('#vb7').hide();
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

    postRelease(){
        this.http.post(`${this.appService.URL}/api/tool`,this.releaseObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted release')
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

    getRelease(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=release`).subscribe(
           res => {
            
               this.releaseArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated release')
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

    deleteRelease(release:any){
       this.http.delete(`${this.appService.URL}/api/tool/${release._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getRelease();
                   console.log('successfulyl deleted release '+ release.tool_name)
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