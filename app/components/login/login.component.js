"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_service_1 = require("../../services/app.service");
var authenticate_service_1 = require("../../services/authenticate.service");
var user_component_1 = require("../user/user.component");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
exports.IA = new BehaviorSubject_1.BehaviorSubject(false);
exports.LI = new BehaviorSubject_1.BehaviorSubject(false);
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, http, appService, _service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.appService = appService;
        this._service = _service;
        this.user = new user_component_1.UserComponent('', '', '');
        this.errorMessage = '';
        this.loginResponse = {
            "user_valid": true,
            "password_valid": true
        };
        this.loginFormGroup = this.formBuilder.group({
            user_id: [null, forms_1.Validators.required],
            password: [null, forms_1.Validators.required],
            domain: [null, forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.checkUsername = function (event) {
        this.errorMessage = '';
        if (event == '') {
            this.userIdError = "Please provide proper username";
        }
        else {
            this.userIdError = "";
        }
    };
    LoginComponent.prototype.checkPassword = function (event) {
        this.errorMessage = '';
        if (event == '') {
            this.passwordError = "Please provide password";
        }
        else {
            this.passwordError = "";
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.loginFormGroup.value.user_id == '' || this.loginFormGroup.value.user_id == undefined) {
            this.userIdError = "Please provide proper username";
        }
        else if (this.loginFormGroup.value.password == '' || this.loginFormGroup.value.password == undefined) {
            this.passwordError = "Please provide password";
        }
        else {
            this.user = this.loginFormGroup.value;
            if (!this._service.login(this.user)) {
                this.errorMessage = 'Invalid credentials!!Please try again.';
            }
            else {
                exports.LI.next(true);
                if (this._service.isAdmin.value) {
                    exports.IA.next(true);
                }
                else {
                    exports.IA.next(false);
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
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [authenticate_service_1.AuthenticateService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, http_1.Http, app_service_1.AppService, authenticate_service_1.AuthenticateService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
