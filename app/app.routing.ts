import { LoadChildren } from '@angular/router/src/config';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path: "login", component: LoginComponent
	}, /* {
		path: "", component: LoginComponent
	}, */ {
		path: "Dashboard", component: HomeComponent, canActivate: [AuthGuard], data: {expectedRoles: ['admin']}
	}, {
		path: "details", loadChildren: 'detailsModule/details.module#DetailsModule', canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
	}, {
		path: "onboarding", loadChildren: 'onboardingModule/onboarding.module#OnboardingModule', canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
	}, {
		path: "pipeline", loadChildren: 'pipelineModule/pipeline.module#PipelineModule', canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
	}, {
		path: "settings", loadChildren: 'settingsModule/settings.module#SettingsModule', canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
	}, {
		path: "project_settings", loadChildren: 'projectSettingsModule/projectSettings.module#ProjectSettingsModule', canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
	}, {
		path: "templates", loadChildren: 'templateModule/template.module#TemplateModule', canActivate: [AuthGuard], data: {expectedRoles: ['admin','user']}
	}, 
	 {
		path: '**', component : LoginComponent
	},
	{
		path: '', redirectTo: 'login', pathMatch: 'full'
	  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);