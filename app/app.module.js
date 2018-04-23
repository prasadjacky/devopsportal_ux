"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var filter_pipe_1 = require("./filter.pipe");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var charts_1 = require("ng2-charts/charts/charts");
var material_1 = require("@angular/material");
var details_module_1 = require("./detailsModule/details.module");
var pipeline_module_1 = require("./pipelineModule/pipeline.module");
var onboarding_module_1 = require("./onboardingModule/onboarding.module");
var template_module_1 = require("./templateModule/template.module");
var settings_module_1 = require("./settingsModule/settings.module");
var projectSettings_module_1 = require("./projectSettingsModule/projectSettings.module");
var user_component_1 = require("./components/user/user.component");
var authenticate_service_1 = require("./services/authenticate.service");
var auth_guard_1 = require("./auth.guard");
var app_component_1 = require("./app.component");
var home_component_1 = require("./components/home/home.component");
var projects_component_1 = require("./components/projects/projects.component");
var status_component_1 = require("./components/status/status.component");
var chart1_component_1 = require("./components/charts/chart1/chart1.component");
var chart2_component_1 = require("./components/charts/chart2/chart2.component");
var chart3_component_1 = require("./components/charts/chart3/chart3.component");
var chart4_component_1 = require("./components/charts/chart4/chart4.component");
var chart5_component_1 = require("./components/charts/chart5/chart5.component");
var chart6_component_1 = require("./components/charts/chart6/chart6.component");
var chart7_component_1 = require("./components/charts/chart7/chart7.component");
var chart8_component_1 = require("./components/charts/chart8/chart8.component");
var chart13_component_1 = require("./components/charts/chart13/chart13.component");
var filter_component_1 = require("./components/filter/filter.component");
var versionChart_component_1 = require("./components/dashboard/charts/versionChart/versionChart.component");
var appReleaseChart_component_1 = require("./components/dashboard/charts/appReleaseChart/appReleaseChart.component");
var envTypeReleaseChart_component_1 = require("./components/dashboard/charts/envTypeReleaseChart/envTypeReleaseChart.component");
var statusWiseReleaseChart_component_1 = require("./components/dashboard/charts/statusWiseReleaseChart/statusWiseReleaseChart.component");
var top10ReleaseChart_component_1 = require("./components/dashboard/charts/top10ReleaseChart/top10ReleaseChart.component");
var chart9_component_1 = require("./components/dashboard/charts/chart9/chart9.component");
var chart10_component_1 = require("./components/dashboard/charts/chart10/chart10.component");
var chart11_component_1 = require("./components/dashboard/charts/chart11/chart11.component");
var chart12_component_1 = require("./components/dashboard/charts/chart12/chart12.component");
var filterchart1_component_1 = require("./components/filter/charts/filterchart1/filterchart1.component");
var filterchart2_component_1 = require("./components/filter/charts/filterchart2/filterchart2.component");
var filterchart3_component_1 = require("./components/filter/charts/filterchart3/filterchart3.component");
var filterchart4_component_1 = require("./components/filter/charts/filterchart4/filterchart4.component");
var filterchart5_component_1 = require("./components/filter/charts/filterchart5/filterchart5.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var login_component_1 = require("./components/login/login.component");
var app_service_1 = require("./services/app.service");
var main_service_1 = require("./main.service");
var filterdata_service_1 = require("./services/filterdata.service");
var app_routing_1 = require("./app.routing");
var filterchart6_component_1 = require("./components/filter/charts/filterchart6/filterchart6.component");
var filterchart7_component_1 = require("./components/filter/charts/filterchart7/filterchart7.component");
var ng2_pagination_1 = require("ng2-pagination");
// enableProdMode();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.AppRoutingModule,
                charts_1.ChartsModule,
                details_module_1.DetailsModule,
                onboarding_module_1.OnboardingModule,
                template_module_1.TemplateModule,
                pipeline_module_1.PipelineModule,
                settings_module_1.SettingsModule,
                projectSettings_module_1.ProjectSettingsModule,
                forms_1.ReactiveFormsModule,
                ng2_pagination_1.Ng2PaginationModule,
                material_1.MdDialogModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                user_component_1.UserComponent,
                home_component_1.HomeComponent,
                status_component_1.StatusComponent,
                projects_component_1.ProjectsComponent,
                chart1_component_1.Chart1Component,
                chart2_component_1.Chart2Component,
                chart3_component_1.Chart3Component,
                chart4_component_1.Chart4Component,
                chart5_component_1.Chart5Component,
                chart6_component_1.Chart6Component,
                chart7_component_1.Chart7Component,
                chart8_component_1.Chart8Component,
                filter_component_1.FilterComponent,
                filterchart1_component_1.FilterChart1Component,
                filterchart2_component_1.FilterChart2Component,
                filterchart3_component_1.FilterChart3Component,
                filterchart4_component_1.FilterChart4Component,
                filterchart5_component_1.FilterChart5Component,
                filterchart6_component_1.FilterChart6Component,
                filterchart7_component_1.FilterChart7Component,
                versionChart_component_1.VersionChartComponent,
                chart9_component_1.Chart9Component,
                dashboard_component_1.DashboardComponent,
                chart10_component_1.Chart10Component,
                chart11_component_1.Chart11Component,
                chart12_component_1.Chart12Component,
                chart13_component_1.Chart13Component,
                filter_pipe_1.FilterPipe,
                appReleaseChart_component_1.AppReleaseChartComponent,
                envTypeReleaseChart_component_1.EnvTypeReleaseChartComponent,
                statusWiseReleaseChart_component_1.StatusWiseReleaseChartComponent,
                top10ReleaseChart_component_1.Top10ReleaseChartComponent,
            ],
            providers: [
                app_service_1.AppService,
                main_service_1.MainService,
                filterdata_service_1.FilterDataService,
                authenticate_service_1.AuthenticateService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
