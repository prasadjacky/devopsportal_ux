import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { OnboardingComponent } from './onboarding.component';

import { OnboardingRoutingModule } from './onboarding.routing';


import { ProjectInformationComponent } from './components/project_information/project_information.component';
import { UserManagementComponent } from './components/user_management/user_management.component';
import { EnvironmentsComponent } from './components/environments/environments.component';
import { AlmComponent } from './components/alm/alm.component';
import { OnboardingSummaryComponent } from './components/onboarding_summary/onboarding_summary.component';

//almComponents
import { SourceControlComponent } from './components/almComponents/source_control/source_control.component';
import { BinaryRepositoryComponent } from './components/almComponents/binary_repository/binary_repository.component';
import { BuildComponent } from './components/almComponents/build/build.component';
import { CodeAnalysisComponent } from './components/almComponents/code_analysis/code_analysis.component';
import { ContinuousIntegrationComponent } from './components/almComponents/continuous_integration/continuous_integration.component';
import { PlanningComponent } from './components/almComponents/planning/planning.component';
import { TestingComponent } from './components/almComponents/testing/testing.component';
import { DeploymentComponent } from './components/almComponents/deployment/deployment.component';
import { ReleaseComponent } from './components/almComponents/release/release.component';

@NgModule({
    imports: [
        OnboardingRoutingModule,
        BrowserModule,
        FormsModule,
        ChartsModule
    ],
    declarations: [
        ProjectInformationComponent,
        OnboardingComponent,
        UserManagementComponent,
        EnvironmentsComponent,
        AlmComponent,
        OnboardingSummaryComponent,

        SourceControlComponent,
        BinaryRepositoryComponent,
        BuildComponent,
        CodeAnalysisComponent,
        ContinuousIntegrationComponent,
        PlanningComponent,
        TestingComponent,
        DeploymentComponent,
        ReleaseComponent
    ]
})
export class OnboardingModule { }	