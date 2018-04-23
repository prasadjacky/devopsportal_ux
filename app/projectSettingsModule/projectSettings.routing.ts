import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ProjectSettingsComponent } from './projectSettings.component';

const routes: Routes = [
    {
        path: 'project_settings', component: ProjectSettingsComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    }
]

export const ProjectSettingsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);