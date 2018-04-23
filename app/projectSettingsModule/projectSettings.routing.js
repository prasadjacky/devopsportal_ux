"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth.guard");
var projectSettings_component_1 = require("./projectSettings.component");
var routes = [
    {
        path: 'project_settings', component: projectSettings_component_1.ProjectSettingsComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }
];
exports.ProjectSettingsRoutingModule = router_1.RouterModule.forChild(routes);
