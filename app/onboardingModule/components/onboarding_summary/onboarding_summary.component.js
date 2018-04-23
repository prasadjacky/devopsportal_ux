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
var app_service_1 = require("../../../services/app.service");
var OnboardingSummaryComponent = /** @class */ (function () {
    function OnboardingSummaryComponent(appService) {
        this.appService = appService;
        this.progress = 0;
        this.background = '#3489db';
        this.progressStatus = 'Initiating..';
        this.Stage = [{}, {
                label: 'Project Created'
            }, {
                label: 'Users Created'
            }, {
                label: 'Environments Created'
            }, {
                label: 'ALM Tools Created'
            }, {
                label: 'Project Created'
            }, {
                label: 'Project Created'
            }, {
                label: 'Project Created'
            }, {
                label: 'Project Created'
            }, {
                label: 'Project Created'
            }];
        this.Messages = {
            pp: '',
            scp: '',
            scr: '',
            cap: '',
            cip: ''
        };
        this.Times = [];
        this.index = 1;
        this.flags = {
            enablePlanning: true,
            enableCodeAnalysis: true,
            enableDeployment: true
        };
        this.doughnutChartColors = [{
                backgroundColor: ['orangered', '#20ae60', '#3498db', '#EEE'],
                borderWidth: [0, 0, 0, 0]
            }];
        this.doughnutChartData = [0, 0, 0, 100];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
            cutoutPercentage: 70,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            }
        };
    }
    OnboardingSummaryComponent.prototype.checkFlags = function () {
        this.flags.enablePlanning = this.appService.alm.planning.configured;
        this.flags.enableCodeAnalysis = this.appService.alm.code_analysis.configured;
        this.flags.enableDeployment = this.appService.alm.deployment.configured;
        console.log(this.flags);
    };
    OnboardingSummaryComponent.prototype.incProgress = function () {
        this.progress += 100 / 9;
        this.doughnutChartData = [0, 0, this.progress, 100 - this.progress];
        if (this.Times[this.index] !== undefined) {
            if (this.Times[this.index] > 500) {
                this.Times[this.index] = Math.round(this.Times[this.index] / 100) / 10;
                this.Times[this.index] += 's';
            }
            else {
                this.Times[this.index] += 'ms';
            }
        }
        this.progressStatus = Math.ceil(this.progress) + "%";
        this.index += 1;
    };
    OnboardingSummaryComponent.prototype.success = function () {
        var _this = this;
        this.background = '#27ae60';
        this.progressStatus = 'Onboarding..';
        setTimeout(function () {
            _this.progressStatus = 'Onboarded!';
        }, 1000);
        this.doughnutChartData = [0, 1000000, 0, 0];
    };
    OnboardingSummaryComponent.prototype.failure = function () {
        this.background = 'orangered';
        this.progress = 100;
        this.progressStatus = 'Failed!';
        this.doughnutChartData = [1000000, 0, 0, 0];
    };
    OnboardingSummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'onboardingSummary',
            templateUrl: './onboarding_summary.component.html',
            styleUrls: ['./onboarding_summary.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], OnboardingSummaryComponent);
    return OnboardingSummaryComponent;
}());
exports.OnboardingSummaryComponent = OnboardingSummaryComponent;
