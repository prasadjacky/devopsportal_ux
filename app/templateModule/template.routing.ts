import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { TemplateComponent } from './template.component';

const routes: Routes = [
    {
        path: 'templates', component: TemplateComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    }
]

export const TemplateRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);