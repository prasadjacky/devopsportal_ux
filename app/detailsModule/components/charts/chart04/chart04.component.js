"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chart04Component = /** @class */ (function () {
    function Chart04Component() {
        this.chart04Labels = ['Bugs', 'Vulnerabilities', 'Code Smells'];
        this.chart04Data = [35, 60, 25];
        this.chart04Type = 'bar';
        this.chart04Options = {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 5
                },
                fullWidth: true,
                display: false
            },
            maintainAspectRatio: false,
            title: {
                display: false,
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'bold',
            },
            scales: {
                xAxes: [{
                        barThickness: 20,
                        gridLines: {
                            display: false
                        },
                        display: false
                    }],
                yAxes: [{
                        gridLines: {
                            display: false
                        },
                        display: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return tooltipItem.xLabel + ':' + tooltipItem.yLabel;
                        ;
                    },
                    title: function (tooltipItem, data) {
                        return '';
                    }
                }
            }
        };
        this.chart04Colors = [{ backgroundColor: ['#f93636', '#e8c904', '#09bbf7'] }];
    }
    Chart04Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart04',
            templateUrl: 'chart04.component.html'
        })
    ], Chart04Component);
    return Chart04Component;
}());
exports.Chart04Component = Chart04Component;
