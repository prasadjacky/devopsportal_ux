"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth.guard");
var template_component_1 = require("./template.component");
var routes = [
    {
        path: 'templates', component: template_component_1.TemplateComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }
];
exports.TemplateRoutingModule = router_1.RouterModule.forChild(routes);
