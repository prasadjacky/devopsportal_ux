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
var router_1 = require("@angular/router");
var app_service_1 = require("./services/app.service");
var filterdata_service_1 = require("./services/filterdata.service");
var login_component_1 = require("./components/login/login.component");
var authenticate_service_1 = require("./services/authenticate.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(_auth, appService, filterDataService, router) {
        var _this = this;
        this._auth = _auth;
        this.appService = appService;
        this.filterDataService = filterDataService;
        this.router = router;
        this.projectsCount = this.filterDataService.projectsCount;
        this.technicalDebt = this.filterDataService.technicalDebt;
        this.buildSuccessRatio = this.filterDataService.buildSuccessRatio;
        this.bugRatio = this.filterDataService.bugRatio;
        this.testCoverage = this.filterDataService.testCoverage;
        this.isAdmin = false;
        this.isLoggedIn = false;
        this.projectSelected = false;
        this.subscription = this.filterDataService.filterServiceProjectsLoadingEvent.subscribe(function (res) {
            _this.projectsCount = res.length;
            _this.technicalDebt = _this.filterDataService.technicalDebt;
            _this.buildSuccessRatio = _this.filterDataService.buildSuccessRatio;
            _this.bugRatio = _this.filterDataService.bugRatio;
            _this.testCoverage = _this.filterDataService.testCoverage;
        });
        this.subscription = this.filterDataService.filterServiceProjectsFilterEvent.subscribe(function () {
            _this.projectsCount = _this.filterDataService.projectsCount;
            _this.technicalDebt = _this.filterDataService.technicalDebt;
            _this.buildSuccessRatio = _this.filterDataService.buildSuccessRatio;
            _this.bugRatio = _this.filterDataService.bugRatio;
            _this.testCoverage = _this.filterDataService.testCoverage;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onscroll = function () { scrollFunction(); };
        this.showIcons = this._auth.isAuthenticatedUser;
        login_component_1.LI.subscribe(function (res) {
            _this.isLoggedIn = res;
        });
        login_component_1.IA.subscribe(function (res) {
            _this.isAdmin = res;
        });
        function scrollFunction() {
            var halfWindowHeight = Math.trunc(window.innerHeight / 2);
            if (document.body.scrollTop > halfWindowHeight || document.documentElement.scrollTop > halfWindowHeight) {
                document.getElementById("navbar").style.top = "50px";
                //document.getElementById("navbar").style.display = "block";
                //document.getElementById("navbar").style.transition = "top 0.3s";
            }
            else {
                document.getElementById("navbar").style.top = "-106px";
                //document.getElementById("navbar").style.display = "none";
            }
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.showIcons = this._auth.isAuthenticatedUser;
    };
    AppComponent.prototype.onLogOut = function () {
        this.isAdmin = false;
        this.isLoggedIn = false;
        this._auth.logout();
    };
    __decorate([
        core_1.Input('projectsCount'),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "projectsCount", void 0);
    __decorate([
        core_1.Input('technicalDebt'),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "technicalDebt", void 0);
    __decorate([
        core_1.Input('buildSuccessRatio'),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "buildSuccessRatio", void 0);
    __decorate([
        core_1.Input('bugRatio'),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "bugRatio", void 0);
    __decorate([
        core_1.Input('testCoverage'),
        __metadata("design:type", Number)
    ], AppComponent.prototype, "testCoverage", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [authenticate_service_1.AuthenticateService, app_service_1.AppService, filterdata_service_1.FilterDataService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
