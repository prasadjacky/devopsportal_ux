"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_charts_1 = require("ng2-charts");
var pipeline_component_1 = require("./pipeline.component");
var summary_component_1 = require("./components/summary/summary.component");
var pipeline_routing_1 = require("./pipeline.routing");
var forms_1 = require("@angular/forms");
//nikhil
var build_component_1 = require("./components/build/build.component");
var uat_component_1 = require("./components/uat/uat.component");
var prod_component_1 = require("./components/prod/prod.component");
var minus_sign_pipe_1 = require("../resources/pipes/minus-sign-pipe");
var capitalize_pipe_1 = require("../resources/pipes/capitalize.pipe");
var ng2_pagination_1 = require("ng2-pagination");
var PipelineModule = /** @class */ (function () {
    function PipelineModule() {
    }
    PipelineModule = __decorate([
        core_1.NgModule({
            imports: [
                pipeline_routing_1.PipelineRoutingModule,
                platform_browser_1.BrowserModule,
                ng2_charts_1.ChartsModule,
                forms_1.FormsModule,
                ng2_pagination_1.Ng2PaginationModule
            ],
            declarations: [
                pipeline_component_1.PipelineComponent,
                build_component_1.BuildComponent,
                summary_component_1.SummaryComponent,
                uat_component_1.UatComponent,
                prod_component_1.ProdComponent,
                minus_sign_pipe_1.MinusSignToParens,
                capitalize_pipe_1.CapitalizePipe
            ]
        })
    ], PipelineModule);
    return PipelineModule;
}());
exports.PipelineModule = PipelineModule;
