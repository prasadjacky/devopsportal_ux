import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { PipelineComponent } from './pipeline.component';
import { SummaryComponent } from './components/summary/summary.component';

import { PipelineRoutingModule } from './pipeline.routing';
import { FormsModule }   from '@angular/forms';
//nikhil
import { BuildComponent } from './components/build/build.component';
import { UatComponent } from './components/uat/uat.component';
import { ProdComponent } from './components/prod/prod.component';
import { MinusSignToParens } from '../resources/pipes/minus-sign-pipe';
import {CapitalizePipe} from "../resources/pipes/capitalize.pipe";
 import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
    imports: [
        PipelineRoutingModule,
        BrowserModule,
        ChartsModule,
        FormsModule ,
        Ng2PaginationModule
        
    ],
    declarations: [
        PipelineComponent,
        BuildComponent,
        SummaryComponent,
        UatComponent,
        ProdComponent,
        MinusSignToParens,
        CapitalizePipe
    ]
})
export class PipelineModule { }	