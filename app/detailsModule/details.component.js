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
var authenticate_service_1 = require("./../services/authenticate.service");
var app_service_1 = require("../services/app.service");
var core_1 = require("@angular/core");
var login_component_1 = require("../components/login/login.component");
// import {ActivatedRoute} from '@angular/router';
var common_1 = require("@angular/common");
var DetailsComponent = /** @class */ (function () {
    // constructor(private appService: AppService,route: ActivatedRoute) {
    //    this.productID = route.snapshot.params['id'];
    //  }
    function DetailsComponent(appService, _location, authenticateService) {
        var _this = this;
        this.appService = appService;
        this._location = _location;
        this.authenticateService = authenticateService;
        /* isAdmin=false; */
        // public productID;
        this.thisProject = {
            project_name: '',
            project_key: '',
            project_organization: {
                manager: ''
            }
        };
        if (sessionStorage.getItem("is_reloaded")) {
            sessionStorage.setItem("is_reloaded", true);
        }
        this.authenticateService.userProjectLoadEvent.subscribe(function (project) {
            console.log('Project load event', project);
            _this.thisProject = project;
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticateService.userProjectLoadEvent.subscribe(function (project) {
            console.log('Project load event', project);
            _this.thisProject = project;
        });
        login_component_1.IA.subscribe(function (res) {
            _this.isAdmin = res;
        });
        this.appService.checkCredentials();
        this.thisProject = this.appService.selectedProject;
    };
    DetailsComponent.prototype.goBack = function () {
        this._location.back();
    };
    DetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, common_1.Location, authenticate_service_1.AuthenticateService])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
