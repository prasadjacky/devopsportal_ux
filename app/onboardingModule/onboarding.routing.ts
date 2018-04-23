import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
    {
        path: 'onboarding', component: OnboardingComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
    }
]

export const OnboardingRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);