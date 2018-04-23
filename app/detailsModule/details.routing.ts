import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { AuthGuard } from '../auth.guard';

const routes : Routes = [
	
    {
         path: 'details', component: DetailsComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
        // path: 'details/:id', component: DetailsComponent
    }
]

export const DetailsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);