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
var app_service_1 = require("../services/app.service");
// import { MdDialogRef } from '@angular/material';
var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(appService) {
        this.appService = appService;
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent.prototype.clearProject = function () {
        this.appService.clearFields();
    };
    TemplateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'templateselector',
            templateUrl: './template.component.html',
            styleUrls: ['./template.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], TemplateComponent);
    return TemplateComponent;
}());
exports.TemplateComponent = TemplateComponent;
