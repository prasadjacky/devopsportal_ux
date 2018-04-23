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
var ReleaseComponent = /** @class */ (function () {
    function ReleaseComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.disabled = false;
        this.showValidations = false;
    }
    ReleaseComponent.prototype.onValidate = function () {
        if (this.disabled) {
            return this.disabled;
        }
        else {
            return this.releaseForm.valid;
        }
    };
    ReleaseComponent.prototype.toggleCheck = function () {
        this.Release['configured'] = !this.disabled;
    };
    ReleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.Release = this.appService.alm.release;
        this.http.get(this.appService.URL + "/api/population/tool_instance?tool_category=release&tool_name=JIRA")
            .subscribe(function (res) {
            _this.ToolInstance = res.json();
        });
    };
    ReleaseComponent.prototype.onSave = function () {
        // this.appService.alm.release = this.Release;
    };
    __decorate([
        core_1.ViewChild('releaseForm'),
        __metadata("design:type", Object)
    ], ReleaseComponent.prototype, "releaseForm", void 0);
    ReleaseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'release',
            templateUrl: './release.component.html',
            styleUrls: ['./release.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], ReleaseComponent);
    return ReleaseComponent;
}());
exports.ReleaseComponent = ReleaseComponent;
