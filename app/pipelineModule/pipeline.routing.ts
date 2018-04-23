import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth.guard';
import { PipelineComponent } from './pipeline.component';
import { BuildComponent } from './components/build/build.component';
import { SummaryComponent } from './components/summary/summary.component';
import { UatComponent } from './components/uat/uat.component';
import { ProdComponent } from './components/prod/prod.component';
const routes: Routes = [
    {
        path: 'pipeline', component: PipelineComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    },

    {
        path: 'build', component: BuildComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    },
    
    {
        path: 'summary', component: SummaryComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    },

    {
        path: 'uat', component: UatComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    },

    {
        path: 'prod', component: ProdComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    }
]

export const PipelineRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);