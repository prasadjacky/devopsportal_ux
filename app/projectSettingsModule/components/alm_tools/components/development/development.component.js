"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_service_1 = require("../../../../../services/app.service");
var DevelopmentComponent = /** @class */ (function () {
    function DevelopmentComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.Development = {
            platform: '',
            platform_version: '',
            build_tool: '',
            build_tool_version: '',
            build_proxy_required: false
        };
    }
    DevelopmentComponent.prototype.ngOnInit = function () {
        this._id = this.appService.selectedProjectId;
        this.getProjectDevelopmentApi();
    };
    //----------------------api calling functions------------------------------------------------------------------------
    DevelopmentComponent.prototype.getProjectDevelopmentApi = function () {
        var _this = this;
        this.http.get(this.appService.URL + "/api/project/" + this._id).subscribe(function (res) {
            var temp = JSON.parse(res['_body']);
            _this.Development = {
                platform: temp.project_tools.development.platform,
                platform_version: temp.project_tools.development.platform_version,
                build_tool: temp.project_tools.development.build_tool,
                build_tool_version: temp.project_tools.development.build_tool_version,
                build_proxy_required: temp.project_tools.development.build_proxy_required
            };
            if (res.status == 200) {
                console.log('successfully populated development tool');
            }
            else {
                console.log('failure');
            }
        }, function (error) {
            console.log(error);
        });
    };
    DevelopmentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'development',
            templateUrl: './development.component.html',
            styleUrls: ['./development.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], DevelopmentComponent);
    return DevelopmentComponent;
}());
exports.DevelopmentComponent = DevelopmentComponent;
