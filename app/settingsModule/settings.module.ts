import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SettingsComponent } from './settings.component';

import { SettingsRoutingModule } from './settings.routing';


//settingsComponents
import { GeneralComponent } from './components/general/general.component';
import { UserManagementComponent } from './components/user_management/user_management.component';
import { AlmToolsComponent } from './components/alm_tools/alm_tools.component';

    //generalcomponents
    import { ProxyComponent } from './components/general/components/proxy/proxy.component';

    //user_management components
    import { RolesComponent } from './components/user_management/components/roles/roles.component';
    import { UsersComponent } from './components/user_management/components/users/users.component';
    import { UserDirectoriesComponent } from './components/user_management/components/user_directories/user_directories.component';

    //AlmTools components
    
    import { BinaryRepositoryComponent } from './components/alm_tools/components/binary_repository/binary_repository.component';
    import { SourceControlComponent } from './components/alm_tools/components/source_control/source_control.component';
    import { CodeAnalysisComponent } from './components/alm_tools/components/code_analysis/code_analysis.component';
    import { ContinuousIntegrationComponent } from './components/alm_tools/components/continuous_integration/continuous_integration.component';
    import { DeploymentComponent } from './components/alm_tools/components/deployment/deployment.component';
    import { PlanningComponent } from './components/alm_tools/components/planning/planning.component';
    import { ReleaseComponent } from './components/alm_tools/components/release/release.component';
    

@NgModule({
    imports: [
        SettingsRoutingModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        SettingsComponent,

        GeneralComponent,
        UserManagementComponent,
        AlmToolsComponent,

        ProxyComponent,
        RolesComponent,
        UsersComponent,
        UserDirectoriesComponent,

        BinaryRepositoryComponent,
        SourceControlComponent,
        CodeAnalysisComponent,
        ContinuousIntegrationComponent,
        DeploymentComponent,
        PlanningComponent,
        ReleaseComponent
    ]
})
export class SettingsModule { }	