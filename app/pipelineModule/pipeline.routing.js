"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth.guard");
var pipeline_component_1 = require("./pipeline.component");
var build_component_1 = require("./components/build/build.component");
var summary_component_1 = require("./components/summary/summary.component");
var uat_component_1 = require("./components/uat/uat.component");
var prod_component_1 = require("./components/prod/prod.component");
var routes = [
    {
        path: 'pipeline', component: pipeline_component_1.PipelineComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    },
    {
        path: 'build', component: build_component_1.BuildComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    },
    {
        path: 'summary', component: summary_component_1.SummaryComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    },
    {
        path: 'uat', component: uat_component_1.UatComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    },
    {
        path: 'prod', component: prod_component_1.ProdComponent, canActivate: [auth_guard_1.AuthGuard], data: { expectedRoles: ['admin', 'user'] }
    }
];
exports.PipelineRoutingModule = router_1.RouterModule.forChild(routes);
