import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserComponent } from '../components/user/user.component';
import { AppService } from '../services/app.service';
import { Observable } from "rxjs/Observable"
import { Http } from '@angular/http';

export var User;
var users = [
  new UserComponent('admin', 'admin', 'admin'),
  new UserComponent('user', 'user123', 'user')
];

@Injectable()
export class AuthenticateService {
  isAdmin = new BehaviorSubject<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isIA = this.isAdmin.asObservable();
  isAuthenticatedUser = false;
  userProjectLoadEvent = new Subject<any>();
  simpleObservable = new Observable((observer) => {
    // observable execution
    observer.next("true");
    observer.complete()
  })
  constructor(private _router: Router, private http: Http, private appService: AppService) { }


  logout() {
    this.isAuthenticatedUser = false;
    localStorage.removeItem("user");
    localStorage.removeItem("authUser");
    this._router.navigate(['login']);
  }
  home() {
    this._router.navigate(['']);
  }

  login(user) {
    var project;
    let authenticatedUser = users.find(u => u.username === user.user_id);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      User = authenticatedUser;
      localStorage.setItem("authUser", JSON.stringify(authenticatedUser));
      this.isLoggedIn.next(true);
      if (User.role === "admin") {
        this.isAdmin.next(true);
        this._router.navigate(['Dashboard']);
      } else {
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
  }

  isAuth() {
    let authUser = JSON.parse(localStorage.getItem("authUser"));
    if (User === undefined) {
      User = authUser;
      if(User.role === "admin"){
        this.isAdmin.next(true);
      }
      this.isLoggedIn.next(true);
    }
    
    return User !== null;
  }

  public privatekey;
  public privatename;
  updateSelProj(p, id, key) {
    this.appService.emitNavChangeEvent(key)
    this.appService.setTrue = true;
    this.appService.selectedProject = p;
    this.appService.selectedProjectId = id;
    this.appService.selectedProjectKey = key;
    window.localStorage.setItem(this.appService.selectedProject.project_key, key);
    this.privatekey = window.localStorage.getItem(this.appService.selectedProject.project_key)
    this.appService.emitNavChangeEvent1(this.privatekey)
    this.appService.emitNavChangeEvent2(p.project_name, p.project_organization.manager)
    this.userProjectLoadEvent.next(p);
  }
}