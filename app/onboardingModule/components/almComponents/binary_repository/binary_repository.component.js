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
var BinaryRepositoryComponent = /** @class */ (function () {
    function BinaryRepositoryComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.showValidations = false;
        this.disabled = false;
    }
    BinaryRepositoryComponent.prototype.toggleCheck = function () {
        this.BinaryRepository['configured'] = !this.disabled;
    };
    BinaryRepositoryComponent.prototype.onValidate = function () {
        if (this.disabled) {
            return this.disabled;
        }
        else {
            return this.binaryRepositoryForm.valid;
        }
    };
    BinaryRepositoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.change = false;
        this.BinaryRepository = this.appService.alm.binary_repo;
        this.http.get(this.appService.URL + "/api/population/tool_instance?tool_category=binary_repo&tool_name=Artifactory")
            .subscribe(function (res) {
            _this.ToolInstance = res.json();
        });
    };
    BinaryRepositoryComponent.prototype.onChange = function (event) {
        this.change = true;
    };
    BinaryRepositoryComponent.prototype.ngDoCheck = function () {
        this.BinaryRepository = this.appService.alm.binary_repo;
        if (!this.change) {
            this.BinaryRepository['artifact_name'] = this.appService.projectInformation.project_name + '-Snapshot-0.0.1';
        }
    };
    __decorate([
        core_1.ViewChild('binaryRepositoryForm'),
        __metadata("design:type", Object)
    ], BinaryRepositoryComponent.prototype, "binaryRepositoryForm", void 0);
    BinaryRepositoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'binaryRepository',
            templateUrl: './binary_repository.component.html',
            styleUrls: ['./binary_repository.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, http_1.Http])
    ], BinaryRepositoryComponent);
    return BinaryRepositoryComponent;
}());
exports.BinaryRepositoryComponent = BinaryRepositoryComponent;
