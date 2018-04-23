"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chart01Component = /** @class */ (function () {
    function Chart01Component() {
        this.chart01Data = [
            {
                data: [0, 18, 0, 18, 0, 0, 0],
                label: 'Remaining Effort',
                type: 'line'
            },
            {
                data: [49, null, null, null, null, null, 0],
                label: 'Ideal Burndown',
                type: 'line'
            }
        ];
        this.chart01Labels = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];
        this.chart01Options = {
            title: {
                fontSize: 16,
                display: true,
                text: 'Sprint Burndown',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal',
                fontWeight: 600
            },
            legend: {
                position: 'bottom'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        position: "left",
                        scaleLabel: {
                            display: true,
                            labelString: "Remaining Efforts(hrs)"
                        },
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true
                        }
                    }
                ]
            }
        };
        this.chart01Colors = [{
                fill: false,
                lineTension: 0,
                backgroundColor: "#000099",
                borderColor: "#066384",
                borderWidth: 3,
                pointRadius: 5,
                pointStyle: 'rectRot',
                pointBackgroundColor: "#000099",
                pointHitRadius: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: "#000099"
            }, {
                spanGaps: true,
                fill: false,
                lineTension: 0,
                backgroundColor: "#000099",
                borderColor: "#7ebc4b",
                borderWidth: 3,
                pointBackgroundColor: "#000099",
                pointHitRadius: 3,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "#000099"
            }, {
                fill: false,
                lineTension: 0,
                backgroundColor: "#000099",
                borderColor: "#8ddcf4",
                borderWidth: 3,
                borderCapStyle: 'round',
                pointRadius: 5,
                pointBorderColor: "#47d1d1",
                pointBackgroundWidth: 3,
                pointBackgroundColor: "#000099",
                pointBorderWidth: 2,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "#000099",
                pointHoverBorderColor: "#47d1d1",
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
            }, {
                backgroundColor: "#c65353",
            }];
        this.chart01Legend = false;
        this.chart01Type = 'line';
    }
    Chart01Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart01',
            templateUrl: 'chart01.component.html'
        })
    ], Chart01Component);
    return Chart01Component;
}());
exports.Chart01Component = Chart01Component;
