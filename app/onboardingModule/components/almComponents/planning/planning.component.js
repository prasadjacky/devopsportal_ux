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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var app_service_1 = require("../../../../services/app.service");
var PlanningComponent = /** @class */ (function () {
    function PlanningComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.disabled = false;
        this.showValidations = false;
        this.ToolInstance = [];
    }
    PlanningComponent.prototype.toggleCheck = function () {
        this.Planning['configured'] = !this.disabled;
    };
    PlanningComponent.prototype.onValidate = function () {
        if (this.disabled) {
            return this.disabled;
        }
        else {
            return this.planningForm.valid;
        }
    };
    PlanningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Planning = this.appService.alm.planning;
        this.http.get(this.appService.URL + "/api/population/tool_instance?tool_category=planning&tool_name=JIRA")
            .subscribe(function (res) {
            _this.ToolInstance = res.json();
        });
    };
    PlanningComponent.prototype.ngDoCheck = function () {
        this.Planning = this.appService.alm.planning;
    };
    __decorate([
        core_1.ViewChild('planningForm'),
        __metadata("design:type", Object)
    ], PlanningComponent.prototype, "planningForm", void 0);
    PlanningComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'planning',
            templateUrl: './planning.component.html',
            styleUrls: ['./planning.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], PlanningComponent);
    return PlanningComponent;
}());
exports.PlanningComponent = PlanningComponent;
