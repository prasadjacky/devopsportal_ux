import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../../../services/app.service';
import { Proxy } from './proxy';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'proxy',
    templateUrl: 'proxy.component.html',
    styleUrls: ['./proxy.component.css']
})

export class ProxyComponent implements OnInit{

    @ViewChild('proxySettingsForm') proxySettingsForm;

    constructor(private appService: AppService, private http:Http ){}

    public proxySettings:Proxy = {
        _id:'',
        http_proxy_name:'',
        http_proxy_host:'',
        http_proxy_port:null,
        http_proxy_auth:{
             auth_required:false,
             auth_username:'',
             auth_password:''
        }
    };

    public proxyObj:Proxy;
    public editObj:Proxy = {
        _id:'',
        http_proxy_name:'',
        http_proxy_host:'',
        http_proxy_port:null,
        http_proxy_auth:{
             auth_required:false,
             auth_username:'',
             auth_password:''
        }
    };
    
    public showValidations = false;
    public index:number; 
    public proxyArray: Proxy[]=[];

    onSave(event) {

        this.showValidations = true;
        if (!this.proxySettingsForm.valid) {
            return;
        }
        this.showValidations = false;
        (<any>$('#myProxyModal')).modal('hide');


         this.proxyObj = {
            _id:'',
            http_proxy_name:this.proxySettings.http_proxy_name,
            http_proxy_host:this.proxySettings.http_proxy_host,
            http_proxy_port:this.proxySettings.http_proxy_port,
            http_proxy_auth:{
                auth_required:this.proxySettings.http_proxy_auth.auth_required,
                auth_username:this.proxySettings.http_proxy_auth.auth_username,
                auth_password:this.proxySettings.http_proxy_auth.auth_password
            }
        }   
        this.postProxyApi(this.proxyObj);
        this.onCancel();
        event.preventDefault();
    }

    onDelete(proxy:any){ 
        this.deleteProxy(proxy);
    }

    onEdit(proxy: any){
        this.editObj = proxy;
    }

    onEditSave(event){
        this.editObj = {
            _id:this.editObj._id,
            http_proxy_name:this.editObj.http_proxy_name,
            http_proxy_host:this.editObj.http_proxy_host,
            http_proxy_port:this.editObj.http_proxy_port,
            http_proxy_auth:{
                auth_required:this.editObj.http_proxy_auth.auth_required,
                auth_username:this.editObj.http_proxy_auth.auth_username,
                auth_password:this.editObj.http_proxy_auth.auth_password
            }
        } 
        console.log(this.editObj)
        this.editProxy(this.editObj); 
    }

    onCancel(){
        this.proxySettings.http_proxy_name = '';
        this.proxySettings.http_proxy_host = '';
        this.proxySettings.http_proxy_port = null;
        this.proxySettings.http_proxy_auth.auth_required = false;
        this.proxySettings.http_proxy_auth.auth_username = '';
        this.proxySettings.http_proxy_auth.auth_password = '';
        this.showValidations = false;
    }

    ngOnInit(){
        this.getProxyApi();
    }


//---------api calling functions--------------------------------------------------------------------------------------

    getProxyApi(){

        this.http.get(`${this.appService.URL}/api/http_proxy`).subscribe(
           res => {
               this.proxyArray = JSON.parse(res['_body']);
               if(res.status == 200){
                   console.log('successfully populated proxy')
                   for(var i=0;i<this.proxyArray.length;i++){
                        this.appService.proxyNames.push(this.proxyArray[i].http_proxy_name);
                   }
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

    postProxyApi(proxyObj:any){
        delete proxyObj._id;
        this.http.post(`${this.appService.URL}/api/http_proxy`,proxyObj).subscribe(
           res => {
               if(res.status == 200){
                   this.getProxyApi()
                   console.log('successfully posted proxy')
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

    deleteProxy(proxy:any){
       this.http.delete(`${this.appService.URL}/api/http_proxy/${proxy._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getProxyApi();
                   console.log('successfulyl deleted user '+ proxy.http_proxy_name)
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

   editProxy(proxy:any){
       console.log(proxy._id)
       this.http.get(`${this.appService.URL}/api/http_proxy/${proxy._id}`).subscribe(
           res => {
               if(res.status == 200){
                   this.getProxyApi();
                   console.log('successfulyl deleted user '+ proxy.http_proxy_name)
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