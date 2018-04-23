"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth.guard");
var onboarding_component_1 = require("./onboarding.component");
var routes = [
    {
        path: 'onboarding', component: onboarding_component_1.OnboardingComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }
];
exports.OnboardingRoutingModule = router_1.RouterModule.forChild(routes);
