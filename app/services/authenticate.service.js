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
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var user_component_1 = require("../components/user/user.component");
var app_service_1 = require("../services/app.service");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
var users = [
    new user_component_1.UserComponent('admin', 'admin', 'admin'),
    new user_component_1.UserComponent('user', 'user123', 'user')
];
var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(_router, http, appService) {
        this._router = _router;
        this.http = http;
        this.appService = appService;
        this.isAdmin = new BehaviorSubject_1.BehaviorSubject(false);
        this.isLoggedIn = new BehaviorSubject_1.BehaviorSubject(false);
        this.isIA = this.isAdmin.asObservable();
        this.isAuthenticatedUser = false;
        this.userProjectLoadEvent = new Subject_1.Subject();
        this.simpleObservable = new Observable_1.Observable(function (observer) {
            // observable execution
            observer.next("true");
            observer.complete();
        });
    }
    AuthenticateService.prototype.logout = function () {
        this.isAuthenticatedUser = false;
        localStorage.removeItem("user");
        localStorage.removeItem("authUser");
        this._router.navigate(['login']);
    };
    AuthenticateService.prototype.home = function () {
        this._router.navigate(['']);
    };
    AuthenticateService.prototype.login = function (user) {
        var project;
        var authenticatedUser = users.find(function (u) { return u.username === user.user_id; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            exports.User = authenticatedUser;
            localStorage.setItem("authUser", JSON.stringify(authenticatedUser));
            this.isLoggedIn.next(true);
            if (exports.User.role === "admin") {
                this.isAdmin.next(true);
                this._router.navigate(['Dashboard']);
            }
            else {
                this.isAdmin.next(false);
                //Set Project details
                // this.http
                //   .get('http://localhost:8006/DevOpsPortalService/api/project/5a7c0b3fa90a681bc5dd7b02')
                //   .subscribe(res => {            
                //     project = res;
                //     console.log(project._body);
                //     this.updateSelProj(project, project._id, project.project_key);
                //     this.userProjectLoadEvent.next(project);
                //   });
                project = {
                    "_id": "5a7c0b3fa90a681bc5dd7b02",
                    "updatedAt": "2018-02-08T08:38:06.543Z",
                    "createdAt": "2018-02-08T08:33:03.799Z",
                    "project_name": "ES_App",
                    "project_key": "10136",
                    "project_type": "Development",
                    "project_health": "Stable",
                    "__v": 0,
                    "project_tools": {
                        "deployment": {
                            "deployment_environments": []
                        }
                    },
                    "project_metrics": {
                        "release_completion": 36,
                        "sprint_velocity": 49,
                        "technical_debt": 60,
                        "bug_ratio": 28,
                        "test_coverage": 55,
                        "release_stability": "Stable",
                        "work_completion": 28,
                        "build_success_ratio": 92
                    },
                    "project_deployment_set": [],
                    "project_build_set": [],
                    "project_environment_set": [
                        "5a7c0b60a90a681bc5dd7ecd",
                        "5a7c0b60a90a681bc5dd7eea",
                        "5a7c0b60a90a681bc5dd7f03"
                    ],
                    "project_organization": {
                        "manager": "Amruta Shetye",
                        "line_of_business": "Trade & Finance",
                        "region": "India",
                        "technology": "IIS"
                    }
                };
                this.updateSelProj(project, project._id, project.project_key);
                this._router.navigate(['details']);
            }
            this.isAuthenticatedUser = true;
            return true;
        }
        this.isLoggedIn.next(false);
        this.isAuthenticatedUser = false;
        return false;
    };
    AuthenticateService.prototype.isAuth = function () {
        var authUser = JSON.parse(localStorage.getItem("authUser"));
        if (exports.User === undefined) {
            exports.User = authUser;
            if (exports.User.role === "admin") {
                this.isAdmin.next(true);
            }
            this.isLoggedIn.next(true);
        }
        return exports.User !== null;
    };
    AuthenticateService.prototype.updateSelProj = function (p, id, key) {
        this.appService.emitNavChangeEvent(key);
        this.appService.setTrue = true;
        this.appService.selectedProject = p;
        this.appService.selectedProjectId = id;
        this.appService.selectedProjectKey = key;
        window.localStorage.setItem(this.appService.selectedProject.project_key, key);
        this.privatekey = window.localStorage.getItem(this.appService.selectedProject.project_key);
        this.appService.emitNavChangeEvent1(this.privatekey);
        this.appService.emitNavChangeEvent2(p.project_name, p.project_organization.manager);
        this.userProjectLoadEvent.next(p);
    };
    AuthenticateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, http_1.Http, app_service_1.AppService])
    ], AuthenticateService);
    return AuthenticateService;
}());
exports.AuthenticateService = AuthenticateService;
