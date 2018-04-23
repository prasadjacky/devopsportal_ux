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
var Chart8Component = /** @class */ (function () {
    function Chart8Component(appService) {
        this.appService = appService;
        this.Chart8Data = [{
                data: [],
                label: 'Code Coverage',
                yAxisID: 'y-axis-1'
            }];
        this.Chart8Labels = ["W1", "W2", "W3", "W4"];
        this.Chart8Options = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
            responsive: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 5
                }
            },
            title: {
                fontSize: 16,
                display: true,
                text: 'Code Coverage',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal'
            },
            scales: {
                xAxes: [{
                        barThickness: 15,
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        position: "left",
                        id: "y-axis-1",
                        scaleLabel: {
                            display: false,
                            labelString: "Code Coverage"
                        },
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 30,
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.Chart8Colors = [{
                backgroundColor: "#2980b9",
            }, {
                fill: false,
                lineTension: 0,
                backgroundColor: "#000099",
                borderColor: "#000099",
                borderWidth: 5,
                borderCapStyle: 'butt',
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
            }];
        this.Chart8Legend = false;
        this.Chart8Type = 'bar';
    }
    Chart8Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getNavChangeEmitter().subscribe(function (item) {
            _this.key = item;
            // this.Chart8Labels=["Q1", "Q2", "Q3", "Q4"];
            _this.appService.getCodeCoverage(_this.key).subscribe(function (data) {
                var values = Object.keys(data).map(function (key) { return data[key]; });
                _this.Chart8Data = values;
            });
        });
    };
    Chart8Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart8',
            templateUrl: './chart8.component.html',
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Chart8Component);
    return Chart8Component;
}());
exports.Chart8Component = Chart8Component;
