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
var app_service_1 = require("./services/app.service");
var MainService = /** @class */ (function () {
    function MainService(http, appService) {
        this.http = http;
        this.appService = appService;
        this.onboardingURL = 'https://10.103.21.91:8888';
    }
    MainService.prototype.api = function (thisStep) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        switch (thisStep) {
            case 1:
            // return this.http.post(`${this.onboardingURL}`, this.appService.projectInformation, headers)
            default:
                return this.http.request('/');
        }
    };
    MainService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, app_service_1.AppService])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
