"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var auth_guard_1 = require("./auth.guard");
var routes = [
    {
        path: "login", component: login_component_1.LoginComponent
    },
    {
        path: "Dashboard", component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin'] }
    }, {
        path: "details", loadChildren: 'detailsModule/details.module#DetailsModule', canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }, {
        path: "onboarding", loadChildren: 'onboardingModule/onboarding.module#OnboardingModule', canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }, {
        path: "pipeline", loadChildren: 'pipelineModule/pipeline.module#PipelineModule', canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }, {
        path: "settings", loadChildren: 'settingsModule/settings.module#SettingsModule', canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }, {
        path: "project_settings", loadChildren: 'projectSettingsModule/projectSettings.module#ProjectSettingsModule', canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }, {
        path: "templates", loadChildren: 'templateModule/template.module#TemplateModule', canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    },
    {
        path: '**', component: login_component_1.LoginComponent
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }
];
exports.AppRoutingModule = router_1.RouterModule.forRoot(routes);
