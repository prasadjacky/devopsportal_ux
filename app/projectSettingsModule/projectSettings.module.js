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
var projectSettings_routing_1 = require("./projectSettings.routing");
var projectSettings_component_1 = require("./projectSettings.component");
//settingsComponents
var general_component_1 = require("./components/general/general.component");
var users_component_1 = require("./components/users/users.component");
var environment_component_1 = require("./components/environment/environment.component");
var alm_tools_component_1 = require("./components/alm_tools/alm_tools.component");
//generalcomponents
var project_information_component_1 = require("./components/general/components/project_information/project_information.component");
//users components
var user_management_component_1 = require("./components/users/components/user_management/user_management.component");
//environment
var environment_information_component_1 = require("./components/environment/components/environment_information/environment_information.component");
//AlmTools components
var binary_repository_component_1 = require("./components/alm_tools/components/binary_repository/binary_repository.component");
var source_control_component_1 = require("./components/alm_tools/components/source_control/source_control.component");
var code_analysis_component_1 = require("./components/alm_tools/components/code_analysis/code_analysis.component");
var continuous_integration_component_1 = require("./components/alm_tools/components/continuous_integration/continuous_integration.component");
var deployment_component_1 = require("./components/alm_tools/components/deployment/deployment.component");
var planning_component_1 = require("./components/alm_tools/components/planning/planning.component");
var release_component_1 = require("./components/alm_tools/components/release/release.component");
var development_component_1 = require("./components/alm_tools/components/development/development.component");
var testing_component_1 = require("./components/alm_tools/components/testing/testing.component");
var ProjectSettingsModule = /** @class */ (function () {
    function ProjectSettingsModule() {
    }
    ProjectSettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                projectSettings_routing_1.ProjectSettingsRoutingModule
            ],
            declarations: [
                projectSettings_component_1.ProjectSettingsComponent,
                general_component_1.GeneralComponent,
                users_component_1.UsersComponent,
                environment_component_1.EnvironmentComponent,
                alm_tools_component_1.AlmToolsComponent,
                project_information_component_1.ProjectInformationComponent,
                user_management_component_1.UserManagementComponent,
                environment_information_component_1.EnvironmentInformationComponent,
                binary_repository_component_1.BinaryRepositoryComponent,
                source_control_component_1.SourceControlComponent,
                code_analysis_component_1.CodeAnalysisComponent,
                continuous_integration_component_1.ContinuousIntegrationComponent,
                deployment_component_1.DeploymentComponent,
                planning_component_1.PlanningComponent,
                release_component_1.ReleaseComponent,
                development_component_1.DevelopmentComponent,
                testing_component_1.TestingComponent
            ],
        })
    ], ProjectSettingsModule);
    return ProjectSettingsModule;
}());
exports.ProjectSettingsModule = ProjectSettingsModule;
