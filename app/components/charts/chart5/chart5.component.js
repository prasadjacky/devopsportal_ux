"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chart5Component = /** @class */ (function () {
    function Chart5Component() {
        this.chart5Labels = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'];
        this.chart5Type = 'bar';
        this.chart5Legend = true;
        this.chart5Options = {
            legend: {
                position: 'bottom'
            },
            title: {
                fontSize: 16,
                display: true,
                text: 'RELEASE STABILITY',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal',
            },
            scales: {
                xAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        gridLines: {
                            display: true
                        }
                    }]
            },
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.chart5Data = [
            { data: [10, 22, 30, 40, 28, 25, 39], label: 'Failure' },
            { data: [15, 25, 35, 45, 23, 30, 41], label: 'Success' }
        ];
        this.chart5Colors = [
            { backgroundColor: ['#2980b9', '#f1c40f', '#27ae60', '#e67e22', '#e74c3c'] },
            { backgroundColor: ['#2980b9', '#f1c40f', '#27ae60', '#e67e22', '#e74c3c'] }
        ];
    }
    Chart5Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart5',
            templateUrl: 'chart5.component.html'
        })
    ], Chart5Component);
    return Chart5Component;
}());
exports.Chart5Component = Chart5Component;
