"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth.guard");
var settings_component_1 = require("./settings.component");
var routes = [
    {
        path: 'settings', component: settings_component_1.SettingsComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }
];
exports.SettingsRoutingModule = router_1.RouterModule.forChild(routes);
