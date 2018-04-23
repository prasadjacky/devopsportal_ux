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
var app_service_1 = require("../../../services/app.service");
var core_1 = require("@angular/core");
var AlmComponent = /** @class */ (function () {
    function AlmComponent(appService) {
        this.appService = appService;
        this.firstElement = true;
        this.lastElement = false;
        // $(document).ready(function () {
        //     $('#ALM .row.pad').click(function () {
        //         $('div.titleTab').removeClass('titleTab tabArrow');
        //         $('a.active').removeClass('active');
        //         $(this).children().addClass('active');
        //         $(this).addClass('titleTab tabArrow');
        //         $(this).children().tab('show');
        //     });
        // });
    }
    AlmComponent.prototype.nextElement = function () {
        var _this = this;
        var thisTab = $('#ALM .ALMTools.active a')[0].innerText;
        var thisTabDisabled = false;
        switch (thisTab) {
            case "Source Control":
                console.log(_this.sourceControl.SourceControl);
                _this.sourceControl.showValidations = true;
                if (!_this.sourceControl.onValidate()) {
                    return;
                }
                break;
            case "Planning":
                console.log(_this.planning.Planning);
                _this.planning.showValidations = true;
                thisTabDisabled = this.planning.disabled;
                if (!_this.planning.onValidate()) {
                    return;
                }
                break;
            case "Development":
                console.log(_this.build.Build);
                _this.build.showValidations = true;
                if (!_this.build.onValidate()) {
                    return;
                }
                break;
            case "Testing":
                console.log(_this.testing.Testing);
                _this.testing.showValidations = true;
                if (!_this.testing.onValidate()) {
                    thisTabDisabled = this.testing.disabled;
                    return;
                }
                thisTabDisabled = this.testing.disabled;
                break;
            case "Code Analysis":
                console.log(_this.codeAnalysis.CodeAnalysis);
                _this.codeAnalysis.showValidations = true;
                thisTabDisabled = this.codeAnalysis.disabled;
                if (!_this.codeAnalysis.onValidate()) {
                    return;
                }
                break;
            case "Binary Repository":
                console.log(_this.binaryRepository.BinaryRepository);
                _this.binaryRepository.showValidations = true;
                thisTabDisabled = this.binaryRepository.disabled;
                if (!_this.binaryRepository.onValidate()) {
                    return;
                }
                break;
            case "Continuous Integration":
                console.log(_this.continuousIntegration.ContinuousIntegration);
                _this.continuousIntegration.showValidations = true;
                if (!_this.continuousIntegration.onValidate()) {
                    return;
                }
                break;
            case "Deployment":
                console.log(_this.deployment.Deployment);
                console.log(_this.deployment.AppServer);
                console.log(_this.deployment.Database);
                thisTabDisabled = this.deployment.disabled;
                _this.appService.Environment.app_server.server_type = this.deployment.Deployment.deployment_type;
                // _this.appService.flags.environment.appServerDisabled = this.deployment.AppServer.configured;
                // _this.appService.flags.environment.databaseDisabled = this.deployment.Database.configured;
                // console.log(_this.appService.Environment.app_server.server_type);
                _this.deployment.showValidations = true;
                if (!_this.deployment.onValidate()) {
                    return;
                }
                break;
            // case "Release":
            //     console.log(_this.release.Release);
            //     _this.release.showValidations = true;
            //     if (!_this.release.onValidate()) {
            //         return;
            //     }
            //     break;
            default: console.log('error');
        }
        if ($('#ALM .ALMTools.next').length === 0) {
            $('#ALM .ALMTools.active a');
            $('#ALM .ALMTools.next').first().removeClass('next').addClass('active');
            if (thisTabDisabled) {
                $('#ALM .ALMTools.active').first().removeClass('enabled').addClass('notenabled');
            }
            else {
                $('#ALM .ALMTools.active').first().removeClass('notenabled').addClass('enabled');
            }
            $('#ALM .ALMTools.active a').addClass('active');
            _this.lastElement = true;
        }
        else {
            // $('#ALM .row.pad.titleTab.tabArrow a').removeClass('active');
            // $('#ALM .row.pad.titleTab.tabArrow').removeClass('titleTab tabArrow').addClass('previous');
            // $('#ALM .row.pad.next').first().removeClass('next').addClass('titleTab tabArrow');
            // $('#ALM .row.pad.titleTab.tabArrow a').addClass('active');
            $('#ALM .ALMTools.active a').removeClass('active');
            $('#ALM .ALMTools.next').first().removeClass('next').addClass('active');
            if (thisTabDisabled) {
                $('#ALM .ALMTools.active').first().removeClass('active').addClass('previous').removeClass('enabled').addClass('notenabled');
            }
            else {
                $('#ALM .ALMTools.active').first().removeClass('active').addClass('previous').removeClass('notenabled').addClass('enabled');
            }
            $('#ALM .ALMTools.active a').addClass('active');
            $('#ALM .tab-pane.active').removeClass('active').addClass('previous');
            $('#ALM .tab-pane.next').first().removeClass('next').addClass('active');
            _this.lastElement = false;
        }
        return _this.lastElement;
    };
    AlmComponent.prototype.previousElement = function () {
        var _this = this;
        _this.lastElement = false;
        if ($('#ALM .ALMTools.previous').length === 0) {
            _this.firstElement = true;
        }
        else {
            $('#ALM .ALMTools.active a').removeClass('active');
            $('#ALM .ALMTools.previous').last().removeClass('previous').addClass('active');
            $('#ALM .ALMTools.active').last().removeClass('active').addClass('next');
            $('#ALM .ALMTools.active a').addClass('active');
            // $('#ALM .row.pad.titleTab.tabArrow a').removeClass('active');
            // $('#ALM .row.pad.titleTab.tabArrow').removeClass('titleTab tabArrow').addClass('next');
            // $('#ALM .row.pad.previous').last().removeClass('previous').addClass('titleTab tabArrow');
            // $('#ALM .row.pad.titleTab.tabArrow a').addClass('active');
            $('#ALM .tab-pane.previous').last().removeClass('previous').addClass('active');
            $('#ALM .tab-pane.active').last().removeClass('active').addClass('next');
            _this.firstElement = false;
        }
        return _this.firstElement;
    };
    AlmComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('sourceControl'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "sourceControl", void 0);
    __decorate([
        core_1.ViewChild('planning'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "planning", void 0);
    __decorate([
        core_1.ViewChild('build'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "build", void 0);
    __decorate([
        core_1.ViewChild('testing'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "testing", void 0);
    __decorate([
        core_1.ViewChild('codeAnalysis'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "codeAnalysis", void 0);
    __decorate([
        core_1.ViewChild('binaryRepository'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "binaryRepository", void 0);
    __decorate([
        core_1.ViewChild('continuousIntegration'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "continuousIntegration", void 0);
    __decorate([
        core_1.ViewChild('deployment'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "deployment", void 0);
    __decorate([
        core_1.ViewChild('release'),
        __metadata("design:type", Object)
    ], AlmComponent.prototype, "release", void 0);
    AlmComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'alm',
            templateUrl: 'alm.component.html',
            styleUrls: ['./alm.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AlmComponent);
    return AlmComponent;
}());
exports.AlmComponent = AlmComponent;
