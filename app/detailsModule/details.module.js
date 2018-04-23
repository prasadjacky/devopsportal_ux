"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_charts_1 = require("ng2-charts");
var forms_1 = require("@angular/forms");
var details_component_1 = require("./details.component");
var details_routing_1 = require("./details.routing");
var details_service_1 = require("./details.service");
var project_planning_component_1 = require("./components/project_planning/project_planning.component");
var builds_component_1 = require("./components/builds/builds.component");
var code_quality_component_1 = require("./components/code_quality/code_quality.component");
var deployment_component_1 = require("./components/deployment/deployment.component");
var incident_component_1 = require("./components/incident/incident.component");
var chart01_component_1 = require("./components/charts/chart01/chart01.component");
var chart02_component_1 = require("./components/charts/chart02/chart02.component");
var chart03_component_1 = require("./components/charts/chart03/chart03.component");
var chart04_component_1 = require("./components/charts/chart04/chart04.component");
var chart05_component_1 = require("./components/charts/chart05/chart05.component");
var chart06_component_1 = require("./components/charts/chart06/chart06.component");
var chart07_component_1 = require("./components/charts/chart07/chart07.component");
var chart08_component_1 = require("./components/charts/chart08/chart08.component");
var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                details_routing_1.DetailsRoutingModule,
                platform_browser_1.BrowserModule,
                ng2_charts_1.ChartsModule,
                forms_1.FormsModule
            ],
            declarations: [
                details_component_1.DetailsComponent,
                project_planning_component_1.ProjectPlanningComponent,
                builds_component_1.BuildsComponent,
                code_quality_component_1.CodeQualityComponent,
                deployment_component_1.DeploymentComponent,
                incident_component_1.IncidentComponent,
                chart01_component_1.Chart01Component,
                chart02_component_1.Chart02Component,
                chart03_component_1.Chart03Component,
                chart04_component_1.Chart04Component,
                chart05_component_1.Chart05Component,
                chart06_component_1.Chart06Component,
                chart07_component_1.Chart07Component,
                chart08_component_1.Chart08Component
            ],
            providers: [details_service_1.DetailsService
            ]
        })
    ], DetailsModule);
    return DetailsModule;
}());
exports.DetailsModule = DetailsModule;
