import { AuthenticateService } from './../services/authenticate.service';
import { AppService } from '../services/app.service';
import { Component } from '@angular/core';
import { LoginComponent, LI, IA } from "../components/login/login.component";
// import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  moduleId: module.id,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  isAdmin: boolean;
  /* isAdmin=false; */
  // public productID;
  thisProject = {
    project_name: '',
    project_key: '',
    project_organization: {
      manager: ''
    }
  };
  // constructor(private appService: AppService,route: ActivatedRoute) {
  //    this.productID = route.snapshot.params['id'];
  //  }
  constructor(private appService: AppService,private _location: Location, private authenticateService: AuthenticateService) {


    if (sessionStorage.getItem("is_reloaded")) {
      sessionStorage.setItem("is_reloaded", true);
    }
    this.authenticateService.userProjectLoadEvent.subscribe(project =>{
      console.log('Project load event', project);
      this.thisProject = project;
    });
  }
  ngOnInit() {
    this.authenticateService.userProjectLoadEvent.subscribe(project =>{
      console.log('Project load event', project);
      this.thisProject = project;
    });
    
     IA.subscribe(res => {
      this.isAdmin = res;
    }) 
    this.appService.checkCredentials();
    this.thisProject = this.appService.selectedProject;
  }
  goBack() {
    this._location.back();
  }
}