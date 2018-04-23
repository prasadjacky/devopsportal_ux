import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'sourceControl',
    templateUrl: './source_control.component.html',
    styleUrls: ['./source_control.component.css']

})

export class SourceControlComponent implements OnInit{

    @ViewChild('scForm') scForm;

    constructor(private appService: AppService, private http: Http){}
     
     public valid:boolean;
     public sc:AlmTool = {
        http_proxy:'',
        tool_category:'scm',
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

    public scObj:AlmTool;
    public viewObj:AlmTool = {
        http_proxy:'',
        tool_category:'scm',
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
    public scArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb').show();
            $('#sb').hide();
            $('.message').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.scForm.valid) {
            return;
        }
        this.showValidations = false;

        this.scObj = {
            http_proxy:this.sc.http_proxy,
            tool_category:this.sc.tool_category,
            tool_url:this.sc.tool_url,
            tool_instance_name:this.sc.tool_instance_name,
            tool_name:this.sc.tool_name,
            tool_version:this.sc.tool_version,
            proxy_required:this.sc.proxy_required,
            tool_auth:{
                auth_type:this.sc.tool_auth.auth_type,
                auth_username:this.sc.tool_auth.auth_username,
                auth_password:this.sc.tool_auth.auth_password,
                auth_token:this.sc.tool_auth.auth_token
            }
        }

        if(this.sc.tool_auth.auth_type == 'password'){
            delete this.scObj.tool_auth.auth_token;
        }
        else{
            delete this.scObj.tool_auth.auth_password;
            delete this.scObj.tool_auth.auth_username;
        }

        this.postValidateScm();
    } 

    onSave(){
        this.postScm()
        this.getScm();
        this.onCancel();
        event.preventDefault();
    }

    confirmDelete(sc:any){
        this.viewObj = sc;
    }

    onDelete(sc:any){ 
        this.deleteScm(sc);
    }

    onView(sc:any){
        this.viewObj = sc;
        console.log(this.viewObj.tool_url)
    }

    // onEditSave(editScForm: any){

    //     this.editObj = {
    //         tool_instance_name:editScForm.tool_instance_name,
    //         tool_name:editScForm.tool_name,
    //         tool_version:editScForm.tool_version,
    //         proxy_required:editScForm.proxy_required,
    //         proxy_type:editScForm.proxy_type,
    //         proxy_reference:editScForm.proxy_reference,
    //         tool_auth:{
    //             auth_type:editScForm.auth_type,
    //            .auth_username:editScForm.auth_username,
    //            .auth_password:editScForm.auth_password,
    //            .auth_token:editScForm.auth_token
    //         }
    //     }   
       
    //     this.scArray.splice(this.index,1,this.editObj);
    //     console.log(this.editObj)
    //     console.log(this.scArray)
        
    // }

    onCancel(){
        this.sc.http_proxy = '';
        this.sc.tool_url = '';
        this.sc.tool_instance_name = '';
        this.sc.tool_name = '';
        this.sc.tool_version = '';
        this.sc.proxy_required = false,
        this.sc.tool_auth.auth_type = '';
        this.sc.tool_auth.auth_username = '';
        this.sc.tool_auth.auth_password = '';
        this.sc.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getScm();
        this.proxyNames = this.appService.proxyNames;
    }
    //---------api calling functions----------------------------------------------------------------------------------

    postValidateScm(){
        if (!this.scObj.proxy_required) delete this.scObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/validation/scm`,this.scObj).subscribe(
            res => {
                if(res.status == 200){
                    this.valid = true;
                    $('document').ready(function(){
                            $('#sb').show();
                            $('.message').show();
                            $('#vb').hide();
                    })
                }
                else{
                    this.valid = false;
                    $('.message').show();
                }    
                },
            error =>{
                $('.message').show();
                console.log(error);
                }
        );
    }

    postScm(){
        delete this.scObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/tool`,this.scObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted scm')
                   this.scArray.push(this.scObj);
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

    getScm(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=scm`).subscribe(
           res => {
               this.scArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated scm')
                   console.log(this.scArray[0])
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

    deleteScm(sc:any){
       this.http.delete(`${this.appService.URL}/api/tool/${sc._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getScm();
                   console.log('successfulyl deleted sc '+ sc.tool_name)
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