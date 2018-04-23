import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProjectSettingsRoutingModule } from './projectSettings.routing';

import { ProjectSettingsComponent } from './projectSettings.component';

//settingsComponents
import { GeneralComponent } from './components/general/general.component';
import { UsersComponent } from './components/users/users.component';
import { EnvironmentComponent } from './components/environment/environment.component';
import { AlmToolsComponent } from './components/alm_tools/alm_tools.component';

//generalcomponents
import { ProjectInformationComponent } from './components/general/components/project_information/project_information.component';

//users components
import { UserManagementComponent } from './components/users/components/user_management/user_management.component';

//environment
import { EnvironmentInformationComponent } from './components/environment/components/environment_information/environment_information.component';

//AlmTools components
import { BinaryRepositoryComponent } from './components/alm_tools/components/binary_repository/binary_repository.component';
import { SourceControlComponent } from './components/alm_tools/components/source_control/source_control.component';
import { CodeAnalysisComponent } from './components/alm_tools/components/code_analysis/code_analysis.component';
import { ContinuousIntegrationComponent } from './components/alm_tools/components/continuous_integration/continuous_integration.component';
import { DeploymentComponent } from './components/alm_tools/components/deployment/deployment.component';
import { PlanningComponent } from './components/alm_tools/components/planning/planning.component';
import { ReleaseComponent } from './components/alm_tools/components/release/release.component';
import { DevelopmentComponent } from './components/alm_tools/components/development/development.component';
import { TestingComponent } from './components/alm_tools/components/testing/testing.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ProjectSettingsRoutingModule
    ],
    declarations: [
        ProjectSettingsComponent,
        GeneralComponent,
        UsersComponent,
        EnvironmentComponent,
        AlmToolsComponent,
        ProjectInformationComponent,
        UserManagementComponent,
        EnvironmentInformationComponent,
        BinaryRepositoryComponent,
        SourceControlComponent,
        CodeAnalysisComponent,
        ContinuousIntegrationComponent,
        DeploymentComponent,
        PlanningComponent,
        ReleaseComponent,
        DevelopmentComponent,
        TestingComponent
    ],
})
export class ProjectSettingsModule { }
