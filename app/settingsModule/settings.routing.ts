import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
        path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    }
]

export const SettingsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);