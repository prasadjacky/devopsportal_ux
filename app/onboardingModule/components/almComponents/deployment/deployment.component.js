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
var app_service_1 = require("../../../../services/app.service");
var DeploymentComponent = /** @class */ (function () {
    function DeploymentComponent(appService) {
        this.appService = appService;
        this.showValidations = false;
        this.disabledDeployment = false;
        this.disabledAppServer = false;
        this.disabledDatabase = false;
    }
    DeploymentComponent.prototype.toggleCheckDeployment = function () {
        this.Deployment['configured'] = !this.disabledDeployment;
    };
    DeploymentComponent.prototype.toggleCheckAppServer = function () {
        this.AppServer['configured'] = !this.disabledAppServer;
    };
    DeploymentComponent.prototype.toggleCheckDatabase = function () {
        this.Database['configured'] = !this.disabledDatabase;
    };
    DeploymentComponent.prototype.onValidate = function () {
        if (this.disabledDeployment) {
            return true;
        }
        else {
            return this.deploymentForm.valid;
        }
    };
    DeploymentComponent.prototype.ngOnInit = function () {
        this.Deployment = this.appService.alm.deployment;
        this.AppServer = this.appService.alm.app_server;
        this.Database = this.appService.alm.database;
    };
    DeploymentComponent.prototype.ngDoCheck = function () {
        this.Deployment = this.appService.alm.deployment;
        this.AppServer = this.appService.alm.app_server;
        this.Database = this.appService.alm.database;
    };
    __decorate([
        core_1.ViewChild('deploymentForm'),
        __metadata("design:type", Object)
    ], DeploymentComponent.prototype, "deploymentForm", void 0);
    DeploymentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'deployment',
            templateUrl: './deployment.component.html',
            styleUrls: ['./deployment.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], DeploymentComponent);
    return DeploymentComponent;
}());
exports.DeploymentComponent = DeploymentComponent;
