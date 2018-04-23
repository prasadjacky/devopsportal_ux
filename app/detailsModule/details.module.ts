import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';
import { DetailsService } from './details.service'

import { ProjectPlanningComponent } from './components/project_planning/project_planning.component';
import { BuildsComponent } from './components/builds/builds.component';
import { CodeQualityComponent } from './components/code_quality/code_quality.component';
import { DeploymentComponent } from './components/deployment/deployment.component';
import { IncidentComponent } from './components/incident/incident.component';

import { Chart01Component } from './components/charts/chart01/chart01.component';
import { Chart02Component } from './components/charts/chart02/chart02.component';
import { Chart03Component } from './components/charts/chart03/chart03.component';
import { Chart04Component } from './components/charts/chart04/chart04.component';
import { Chart05Component } from './components/charts/chart05/chart05.component';
import { Chart06Component } from './components/charts/chart06/chart06.component';
import { Chart07Component } from './components/charts/chart07/chart07.component';
import { Chart08Component } from './components/charts/chart08/chart08.component';


@NgModule({
 	imports:[ 
  DetailsRoutingModule,
 	BrowserModule,
  ChartsModule,
  FormsModule
  ],

  declarations: [ 
    DetailsComponent,
  	ProjectPlanningComponent,
    BuildsComponent,
    CodeQualityComponent,
    DeploymentComponent,
    IncidentComponent,
    Chart01Component,
    Chart02Component,
    Chart03Component,
    Chart04Component,
    Chart05Component,
    Chart06Component,
    Chart07Component,
    Chart08Component
   ],
   providers: [DetailsService
   ]


})
export class DetailsModule { }	