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
var app_service_1 = require("../../../services/app.service");
var ProjectInformationComponent = /** @class */ (function () {
    function ProjectInformationComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.managersAvailable = [];
        this.showValidations = false;
        this.keyExists = false;
        this.keyExistsStr = '';
    }
    ProjectInformationComponent.prototype.pushManager = function (manager) {
        this.ProjectInformation.project_organization.manager = manager.user_full_name;
        $('#searchManager').modal('hide');
    };
    ProjectInformationComponent.prototype.onValidate = function () {
        return this.projectInformationForm.valid && !this.keyExists;
    };
    ProjectInformationComponent.prototype.checkKey = function () {
        var _this = this;
        this.keyExistsStr = this.project_key.value.toUpperCase();
        if (this.keyExistsStr !== '') {
            $('#project_key').addClass('filled');
        }
        else {
            $('#project_key').removeClass('filled');
        }
        this.http.post(this.appService.URL + "/api/validation/project?project_key=" + this.keyExistsStr, new Headers().append('Content-Type', 'application/json'))
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.keyExists = false;
                _this.ProjectInformation['project_key'] = _this.keyExistsStr;
            }
        }, function (err) {
            _this.keyExists = true;
        });
    };
    ProjectInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProjectInformation = this.appService.projectInformation;
        this.http.get(this.appService.URL + "/api/user")
            .subscribe(function (users) {
            _this.managersAvailable = users.json();
        });
    };
    __decorate([
        core_1.ViewChild('projectInformationForm'),
        __metadata("design:type", Object)
    ], ProjectInformationComponent.prototype, "projectInformationForm", void 0);
    __decorate([
        core_1.ViewChild('project_key'),
        __metadata("design:type", Object)
    ], ProjectInformationComponent.prototype, "project_key", void 0);
    ProjectInformationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'projectInformation',
            templateUrl: 'project_information.component.html',
            styleUrls: ['./project_information.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], ProjectInformationComponent);
    return ProjectInformationComponent;
}());
exports.ProjectInformationComponent = ProjectInformationComponent;
