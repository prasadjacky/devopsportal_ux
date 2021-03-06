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
var TestingComponent = /** @class */ (function () {
    function TestingComponent(appService) {
        this.appService = appService;
        this.showValidations = false;
        this.disabled = false;
        this.disabled_unit = false;
        this.disabled_functional = false;
    }
    TestingComponent.prototype.toggleCheckUnit = function () {
        this.Testing.unit['configured'] = !this.disabled_unit;
    };
    TestingComponent.prototype.toggleCheckFunctional = function () {
        this.Testing.functional['configured'] = !this.disabled_functional;
    };
    TestingComponent.prototype.onValidate = function () {
        this.disabled = this.disabled_functional && this.disabled_unit;
        return this.testingForm.valid;
    };
    TestingComponent.prototype.ngOnInit = function () {
        this.Testing = this.appService.alm.testing;
    };
    TestingComponent.prototype.ngDoCheck = function () {
        this.Testing = this.appService.alm.testing;
    };
    __decorate([
        core_1.ViewChild('testingForm'),
        __metadata("design:type", Object)
    ], TestingComponent.prototype, "testingForm", void 0);
    TestingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'testing',
            templateUrl: './testing.component.html',
            styleUrls: ['./testing.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], TestingComponent);
    return TestingComponent;
}());
exports.TestingComponent = TestingComponent;
