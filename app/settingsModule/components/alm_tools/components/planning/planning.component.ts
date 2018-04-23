import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlmTool } from '../alm_tool';
import { AppService } from '../../../../../services/app.service';


@Component({
    moduleId: module.id,
    selector: 'planning',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.css']

})

export class PlanningComponent implements OnInit{
        
  @ViewChild('planningForm') planningForm;

  constructor(private appService: AppService,private http: Http){}
     
     public tool_category:string = 'planning';
     public proxy_required:boolean;
     public planning:AlmTool = {
        http_proxy:'',
        tool_category:'planning',
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
     }};

    public planningObj:AlmTool;
    public viewObj:AlmTool = {
        http_proxy:'',
        tool_category:'planning',
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
    }};
    
    public proxyNames:string[]=[];
    public index:number; 
    public valid:boolean;
    public showValidations:boolean=false;
    public planningArray: AlmTool[]=[];

    addObject(){
        $('document').ready(function(){
            $('#vb2').show();
            $('#sb2').hide();
            $('.message').hide();
        });
    }

    onValidate(event) {
        this.showValidations = true;
        if (!this.planningForm.valid) {
            return;
        }
        this.showValidations = false;

        this.planningObj = {
            http_proxy:this.planning.http_proxy,
            tool_category:this.planning.tool_category,
            tool_url:this.planning.tool_url,
            tool_instance_name:this.planning.tool_instance_name,
            tool_name:this.planning.tool_name,
            tool_version:this.planning.tool_version,
            proxy_required:this.planning.proxy_required,
            tool_auth:{
                auth_type:this.planning.tool_auth.auth_type,
                auth_username:this.planning.tool_auth.auth_username,
                auth_password:this.planning.tool_auth.auth_password,
                auth_token:this.planning.tool_auth.auth_token
            }
        };
        if(this.planning.tool_auth.auth_type == 'password'){
            delete this.planningObj.tool_auth.auth_token;
        }
        else{
            delete this.planningObj.tool_auth.auth_password;
            delete this.planningObj.tool_auth.auth_username;
        }
        console.log(this.planningObj)
        this.postValidatePlanning();
    }

    onSave() {
        this.postPlanning();
        this.getPlanning();
        this.onCancel();
        event.preventDefault();
    }

    confirmDelete(planning:any){
        this.viewObj = planning;
    }

    onDelete(planning){ 
        this.deletePlanning(planning);
    }

    onView(planning: any){
        this.viewObj = planning;
    }

    onEditSave(editPlanningForm: any){

        // this.editObj = {
        //     tool_instance_name:editPlanningForm.tool_instance_name,
        //     tool_name:editPlanningForm.tool_name,
        //     tool_version:editPlanningForm.tool_version,
        //     proxy_required:editPlanningForm.proxy_required,
        //     proxy_type:editPlanningForm.proxy_type,
        //     proxy_reference:editPlanningForm.proxy_reference,
        //     tool_auth:{
        //         auth_type:editPlanningForm.auth_type,
        //         auth_username:editPlanningForm.auth_username,
        //         password:editPlanningForm.auth_password,
        //         auth_token:editPlanningForm.auth_token
        //     }
        // }  
       
        // this.planningArray.splice(this.index,1,this.editObj);
        // console.log(this.planningArray)
        
    }

    onCancel(){
        this.planning.http_proxy = '';
        this.planning.tool_url = '';
        this.planning.tool_instance_name = '';
        this.planning.tool_name = '';
        this.planning.tool_version = '';
        this.planning.proxy_required = false,
        this.planning.tool_auth.auth_type = '';
        this.planning.tool_auth.auth_username = '';
        this.planning.tool_auth.auth_password = '';
        this.planning.tool_auth.auth_token = ''
        this.showValidations = false;
        this.valid = false;
    }

    ngOnInit(){
        this.getPlanning();      
        this.proxyNames = this.appService.proxyNames;
        // this.planningArray = this.appService.planning;
    }

//---------api calling functions----------------------------------------------------------------------------------

    postValidatePlanning(){
        if (!this.planningObj.proxy_required) delete this.planningObj['http_proxy'];
        this.http.post(`${this.appService.URL}/api/validation/planning`,this.planningObj).subscribe(
           res => {
               console.log(res)
               if(res.status == 200){
                   this.valid = true;
                   console.log('success')
                   $('document').ready(function(){
                        $('#sb2').show();
                        $('.message').show();
                        $('#vb2').hide();
                   })
               }
               else{
                   this.valid = false;
                    $('.message').show();
                   console.log('failure')
               }    
            },
          error =>{
              console.log(error);
              $('.message').show();
            }
       );
    }

    postPlanning(){
        this.http.post(`${this.appService.URL}/api/tool`,this.planningObj).subscribe(
           res => {
               if(res.status == 200){
                   console.log('successfully posted object')
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

    getPlanning(){
        this.http.get(`${this.appService.URL}/api/population/tool?tool_category=planning`).subscribe(
           res => {
            
               this.planningArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated planning')
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

    deletePlanning(planning:any){
       this.http.delete(`${this.appService.URL}/api/tool/${planning._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getPlanning();
                   console.log('successfulyl deleted planning '+ planning.tool_name)
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