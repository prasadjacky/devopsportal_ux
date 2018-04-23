import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template.component';

import { TemplateRoutingModule } from './template.routing';

@NgModule({
    imports: [
        BrowserModule,
        TemplateRoutingModule
    ],
    declarations: [
        TemplateComponent
    ]
})

export class TemplateModule { }	