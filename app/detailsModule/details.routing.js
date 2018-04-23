"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var details_component_1 = require("./details.component");
var auth_guard_1 = require("../auth.guard");
var routes = [
    {
        path: 'details', component: details_component_1.DetailsComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
        // path: 'details/:id', component: DetailsComponent
    }
];
exports.DetailsRoutingModule = router_1.RouterModule.forChild(routes);
