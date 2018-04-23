import { FilterPipe } from './filter.pipe';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/charts/charts';
import { MdDialogModule } from '@angular/material';
import { DetailsModule } from './detailsModule/details.module';
import { PipelineModule } from './pipelineModule/pipeline.module';
import { OnboardingModule } from './onboardingModule/onboarding.module';
import { TemplateModule } from './templateModule/template.module';
import { SettingsModule } from './settingsModule/settings.module';
import { ProjectSettingsModule } from './projectSettingsModule/projectSettings.module';
import { UserComponent } from './components/user/user.component';
import { AuthenticateService } from './services/authenticate.service';
import { AuthGuard } from './auth.guard';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StatusComponent } from './components/status/status.component';

import { Chart1Component } from './components/charts/chart1/chart1.component';
import { Chart2Component } from './components/charts/chart2/chart2.component';
import { Chart3Component } from './components/charts/chart3/chart3.component';
import { Chart4Component } from './components/charts/chart4/chart4.component';
import { Chart5Component } from './components/charts/chart5/chart5.component';
import { Chart6Component } from './components/charts/chart6/chart6.component';
import { Chart7Component } from './components/charts/chart7/chart7.component';
import { Chart8Component } from './components/charts/chart8/chart8.component';
import { Chart13Component } from './components/charts/chart13/chart13.component';

import { FilterComponent } from './components/filter/filter.component';
import { VersionChartComponent } from './components/dashboard/charts/versionChart/versionChart.component';
import { AppReleaseChartComponent } from './components/dashboard/charts/appReleaseChart/appReleaseChart.component';
import { EnvTypeReleaseChartComponent } from './components/dashboard/charts/envTypeReleaseChart/envTypeReleaseChart.component';
import { StatusWiseReleaseChartComponent } from './components/dashboard/charts/statusWiseReleaseChart/statusWiseReleaseChart.component';
import { Top10ReleaseChartComponent } from './components/dashboard/charts/top10ReleaseChart/top10ReleaseChart.component';
import { Chart9Component } from './components/dashboard/charts/chart9/chart9.component';
import { Chart10Component } from './components/dashboard/charts/chart10/chart10.component';
import { Chart11Component } from './components/dashboard/charts/chart11/chart11.component';
import { Chart12Component } from './components/dashboard/charts/chart12/chart12.component';
import { FilterChart1Component } from './components/filter/charts/filterchart1/filterchart1.component';
import { FilterChart2Component } from './components/filter/charts/filterchart2/filterchart2.component';
import { FilterChart3Component } from './components/filter/charts/filterchart3/filterchart3.component';
import { FilterChart4Component } from './components/filter/charts/filterchart4/filterchart4.component';
import { FilterChart5Component } from './components/filter/charts/filterchart5/filterchart5.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LoginComponent } from './components/login/login.component';

import { AppService } from './services/app.service';
import { MainService } from './main.service';
import { FilterDataService } from './services/filterdata.service';

import { AppRoutingModule } from './app.routing';
import { FilterChart6Component } from './components/filter/charts/filterchart6/filterchart6.component';
import { FilterChart7Component } from './components/filter/charts/filterchart7/filterchart7.component';
import { Ng2PaginationModule } from 'ng2-pagination';
// enableProdMode();
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,        
        AppRoutingModule,
        ChartsModule,
        DetailsModule,
        OnboardingModule,
        TemplateModule,
        PipelineModule,
        SettingsModule,
        ProjectSettingsModule,
        ReactiveFormsModule,
        Ng2PaginationModule,
        MdDialogModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        HomeComponent,
        StatusComponent,
        ProjectsComponent,
        Chart1Component,
        Chart2Component,
        Chart3Component,
        Chart4Component,
        Chart5Component,
        Chart6Component,
        Chart7Component,
        Chart8Component,
        FilterComponent,
        FilterChart1Component,
        FilterChart2Component,
        FilterChart3Component,
        FilterChart4Component,
        FilterChart5Component,
        FilterChart6Component,
        FilterChart7Component,
        VersionChartComponent,
        Chart9Component,
        DashboardComponent,
        Chart10Component,
        Chart11Component,
        Chart12Component,
        Chart13Component,
        FilterPipe,
        AppReleaseChartComponent,
        EnvTypeReleaseChartComponent,
        StatusWiseReleaseChartComponent,
        Top10ReleaseChartComponent,
    ],
    providers: [
        AppService,
        MainService,
        FilterDataService,
        AuthenticateService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
