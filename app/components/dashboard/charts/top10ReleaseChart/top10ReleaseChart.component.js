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
var Top10ReleaseChartComponent = /** @class */ (function () {
    function Top10ReleaseChartComponent(appService) {
        this.appService = appService;
        this.Chart8Data = [{
                data: [24, 21, 20, 18, 17, 16, 14, 12, 10, 8],
                label: 'Releases',
                yAxisID: 'y-axis-1'
            }];
        this.Chart8Labels = ["PQR_App", "DemoApp", "App_Test", "App_Test1", "DemoTest", "ECOM_App", "App_ABC", "ASR_App", "ES_App", "PNR_App"];
        this.Chart8Options = {
            tooltips: {
                titleFontFamily: '"Comfortaa",sans-serif',
                titleFontStyle: 'normal',
                titleFontSize: 30,
                bodyFontFamily: '"Comfortaa",sans-serif',
                bodyFontStyle: 'normal',
                bodyFontSize: 26,
            },
            plugins: {
                datalabels: {
                    backgroundColor: function (context) {
                        return context.dataset.backgroundColor;
                    },
                    borderColor: 'white',
                    color: 'white',
                    borderRadius: 20,
                    borderWidth: 2,
                    formatter: Math.round,
                    font: {
                        size: 26,
                        weight: 'bold'
                    },
                    anchor: 'end'
                }
            },
            responsive: false,
            maintainAspectRatio: true,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 5
                }
            },
            title: {
                fontSize: 16,
                display: false,
                text: 'Code Coverage',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal'
            },
            scales: {
                xAxes: [{
                        barThickness: 30,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            autoSkip: false,
                            beginAtZero: true,
                            fontFamily: '"Comfortaa",sans-serif',
                            fontStyle: 'bold',
                            fontSize: 18,
                        }
                    }],
                yAxes: [{
                        display: false,
                        position: "left",
                        id: "y-axis-1",
                        scaleLabel: {
                            display: false,
                            labelString: "Releases"
                        },
                        gridLines: {
                            display: false
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
    Top10ReleaseChartComponent.prototype.ngOnInit = function () {
        // this.appService.getCodeCoverage('cbs').subscribe(data => {
        //   const values = Object.keys(data).map(key=>data[key]);
        //   this.Chart8Data = values;
        // })
    };
    Top10ReleaseChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'top10ReleaseChart',
            templateUrl: 'top10ReleaseChart.component.html',
            styleUrls: ['./top10ReleaseChart.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Top10ReleaseChartComponent);
    return Top10ReleaseChartComponent;
}());
exports.Top10ReleaseChartComponent = Top10ReleaseChartComponent;
