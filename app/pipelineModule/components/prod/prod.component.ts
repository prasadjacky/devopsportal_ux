import { Component } from '@angular/core';
import { AppService } from './../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'prod',
    templateUrl: 'prod.component.html',
    styleUrls: ['./prod.component.css']
})

export class ProdComponent{
    public thisProject:any;
    public summary:any={
        "Type":''
    }
  	constructor(private appService: AppService) {
		 this.thisProject = this.appService.selectedProject;
      }
}