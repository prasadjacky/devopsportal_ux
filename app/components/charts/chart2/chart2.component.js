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
var Chart2Component = /** @class */ (function () {
    function Chart2Component(appService) {
        this.appService = appService;
        this.Chart2Data = [{
                data: [],
                label: 'Bug Ratio',
                yAxisID: 'y-axis-1'
            }];
        this.Chart2Labels = ["W1", "W2", "W3", "W4"];
        this.Chart2Options = {
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
                text: 'Bug Ratio',
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
                            labelString: "Bug Ratio"
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
        this.Chart2Colors = [{
                backgroundColor: "#2980b9",
            }, {
                fill: false,
                lineTension: 0,
                backgroundColor: "#2980b9",
                borderColor: "#2980b9",
                borderWidth: 5,
                borderCapStyle: 'butt',
                pointRadius: 5,
                pointBorderColor: "#47d1d1",
                pointBackgroundWidth: 3,
                pointBackgroundColor: "#2980b9",
                pointBorderWidth: 2,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "#2980b9",
                pointHoverBorderColor: "#47d1d1",
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
            }];
        this.Chart2Legend = false;
        this.Chart2Type = 'bar';
    }
    Chart2Component.prototype.ngOnInit = function () {
        var _this = this;
        // this.appService.getChart2().subscribe(data => {
        //   this.Chart2Data= data["0"][" data"]
        // });
        this.appService.getNavChangeEmitter().subscribe(function (item) {
            _this.key = item;
            _this.appService.getBugRatio(_this.key).subscribe(function (data) {
                _this.chartsOBJ = data;
                _this.Chart2Data = Object.values(_this.chartsOBJ);
            });
        });
    };
    Chart2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart2',
            templateUrl: './chart2.component.html',
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Chart2Component);
    return Chart2Component;
}());
exports.Chart2Component = Chart2Component;
