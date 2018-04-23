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
var settings_component_1 = require("./settings.component");
var settings_routing_1 = require("./settings.routing");
//settingsComponents
var general_component_1 = require("./components/general/general.component");
var user_management_component_1 = require("./components/user_management/user_management.component");
var alm_tools_component_1 = require("./components/alm_tools/alm_tools.component");
//generalcomponents
var proxy_component_1 = require("./components/general/components/proxy/proxy.component");
//user_management components
var roles_component_1 = require("./components/user_management/components/roles/roles.component");
var users_component_1 = require("./components/user_management/components/users/users.component");
var user_directories_component_1 = require("./components/user_management/components/user_directories/user_directories.component");
//AlmTools components
var binary_repository_component_1 = require("./components/alm_tools/components/binary_repository/binary_repository.component");
var source_control_component_1 = require("./components/alm_tools/components/source_control/source_control.component");
var code_analysis_component_1 = require("./components/alm_tools/components/code_analysis/code_analysis.component");
var continuous_integration_component_1 = require("./components/alm_tools/components/continuous_integration/continuous_integration.component");
var deployment_component_1 = require("./components/alm_tools/components/deployment/deployment.component");
var planning_component_1 = require("./components/alm_tools/components/planning/planning.component");
var release_component_1 = require("./components/alm_tools/components/release/release.component");
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                settings_routing_1.SettingsRoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                settings_component_1.SettingsComponent,
                general_component_1.GeneralComponent,
                user_management_component_1.UserManagementComponent,
                alm_tools_component_1.AlmToolsComponent,
                proxy_component_1.ProxyComponent,
                roles_component_1.RolesComponent,
                users_component_1.UsersComponent,
                user_directories_component_1.UserDirectoriesComponent,
                binary_repository_component_1.BinaryRepositoryComponent,
                source_control_component_1.SourceControlComponent,
                code_analysis_component_1.CodeAnalysisComponent,
                continuous_integration_component_1.ContinuousIntegrationComponent,
                deployment_component_1.DeploymentComponent,
                planning_component_1.PlanningComponent,
                release_component_1.ReleaseComponent
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
