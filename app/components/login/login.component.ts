import { Component, ContentChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AppService } from '../../services/app.service';
import {AuthenticateService} from "../../services/authenticate.service";
import {UserComponent} from "../user/user.component";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const IA = new BehaviorSubject(false);
export const LI = new BehaviorSubject(false);
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthenticateService]
})
export class LoginComponent {
    public user = new UserComponent('','','');
    passwordError: string;
    userIdError: string;
    loginFormGroup: FormGroup;
    errorMessage: string = '';
    loginResponse= {
         "user_valid": true,
         "password_valid": true
     };
    constructor(private formBuilder: FormBuilder,private router: Router, private http: Http, private appService: AppService,  private _service:AuthenticateService) {
        this.loginFormGroup = this.formBuilder.group({
            user_id:[null,Validators.required],
            password:[null,Validators.required],
            domain:[null,Validators.required]
        })       
    }

    checkUsername(event: String){
        this.errorMessage ='';
        if(event==''){
            this.userIdError = "Please provide proper username";
        }
        else{
            this.userIdError = "";
        }
    }
    checkPassword(event: String){
        this.errorMessage ='';
        if(event==''){
            this.passwordError = "Please provide password";
        }
        else{
            this.passwordError = "";
        }
    }
  
    login(){
        if(this.loginFormGroup.value.user_id=='' || this.loginFormGroup.value.user_id==undefined){
            this.userIdError = "Please provide proper username";
        }
        else if(this.loginFormGroup.value.password=='' || this.loginFormGroup.value.password==undefined){
            this.passwordError= "Please provide password";
        }
        else{
            this.user=this.loginFormGroup.value;
            if(!this._service.login(this.user)) {
                this.errorMessage = 'Invalid credentials!!Please try again.';
              } else {
                LI.next(true); 
                if(this._service.isAdmin.value){
                  IA.next(true);
                }else{
                  IA.next(false)
                }
              }
            }
               /* this.loginFormGroup.value.user_id = `${this.loginFormGroup.value.domain}\\${this.loginFormGroup.value.user_id}`;
            this.http.post(`${this.appService.URL}/api/login`, this.loginFormGroup.value).subscribe(
                res => {
                    console.log(res);
                    // let loginResponse = res.json();
                    // this.loginResponse = loginResponse;
                    if (res.status === 200) {
                        this.appService.login();
                        this.router.navigate(['Dashboard']);
                    }
                },
                err => {
                    if (err.status === 403){
                        this.errorMessage = "Please check credentials";
                    }
                    else if (err.status === 500){
                        this.errorMessage = "Please check net connection";
                    }
                    else{
                        this.errorMessage = "Please check credentials";
                    }
                    console.log(err);
                }
            );  */
        }     
}    