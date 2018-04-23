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
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts");
var onboarding_component_1 = require("./onboarding.component");
var onboarding_routing_1 = require("./onboarding.routing");
var project_information_component_1 = require("./components/project_information/project_information.component");
var user_management_component_1 = require("./components/user_management/user_management.component");
var environments_component_1 = require("./components/environments/environments.component");
var alm_component_1 = require("./components/alm/alm.component");
var onboarding_summary_component_1 = require("./components/onboarding_summary/onboarding_summary.component");
//almComponents
var source_control_component_1 = require("./components/almComponents/source_control/source_control.component");
var binary_repository_component_1 = require("./components/almComponents/binary_repository/binary_repository.component");
var build_component_1 = require("./components/almComponents/build/build.component");
var code_analysis_component_1 = require("./components/almComponents/code_analysis/code_analysis.component");
var continuous_integration_component_1 = require("./components/almComponents/continuous_integration/continuous_integration.component");
var planning_component_1 = require("./components/almComponents/planning/planning.component");
var testing_component_1 = require("./components/almComponents/testing/testing.component");
var deployment_component_1 = require("./components/almComponents/deployment/deployment.component");
var release_component_1 = require("./components/almComponents/release/release.component");
var OnboardingModule = /** @class */ (function () {
    function OnboardingModule() {
    }
    OnboardingModule = __decorate([
        core_1.NgModule({
            imports: [
                onboarding_routing_1.OnboardingRoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                project_information_component_1.ProjectInformationComponent,
                onboarding_component_1.OnboardingComponent,
                user_management_component_1.UserManagementComponent,
                environments_component_1.EnvironmentsComponent,
                alm_component_1.AlmComponent,
                onboarding_summary_component_1.OnboardingSummaryComponent,
                source_control_component_1.SourceControlComponent,
                binary_repository_component_1.BinaryRepositoryComponent,
                build_component_1.BuildComponent,
                code_analysis_component_1.CodeAnalysisComponent,
                continuous_integration_component_1.ContinuousIntegrationComponent,
                planning_component_1.PlanningComponent,
                testing_component_1.TestingComponent,
                deployment_component_1.DeploymentComponent,
                release_component_1.ReleaseComponent
            ]
        })
    ], OnboardingModule);
    return OnboardingModule;
}());
exports.OnboardingModule = OnboardingModule;
