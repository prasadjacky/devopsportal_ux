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
var Chart4Component = /** @class */ (function () {
    function Chart4Component(appService) {
        this.appService = appService;
        this.Chart4Data = [{
                data: [],
                label: 'Code Coverage',
                yAxisID: 'y-axis-1'
            }];
        this.Chart4Labels = ["Q1", "Q2", "Q3", "Q4"];
        this.Chart4Options = {
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
                text: 'CODE COVERAGE',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal'
            },
            scales: {
                xAxes: [{
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
        this.Chart4Colors = [{
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
        this.Chart4Legend = false;
        this.Chart4Type = 'bar';
    }
    Chart4Component.prototype.ngOnInit = function () {
        var _this = this;
        // this.appService.getChart4().subscribe(data => {
        //   this.Chart4Data= data["0"][" data"]
        // });
        // if(this.appService.setTrue==true){
        //   alert("now")
        this.appService.getNavChangeEmitter().subscribe(function (item) {
            _this.key = item;
            window.sessionStorage.setItem("key", _this.key);
        });
        this.appService.getQuarterly(window.sessionStorage.getItem("key")).subscribe(function (data) {
            _this.chartsOBJ = data;
            _this.Chart4Data = Object.values(_this.chartsOBJ);
        });
        // }else{
        //   this.Chart4Data=[0,0,0,0]
        //   console.log(this.Chart4Data)
        // }
    };
    Chart4Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart4',
            templateUrl: './chart4.component.html',
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Chart4Component);
    return Chart4Component;
}());
exports.Chart4Component = Chart4Component;
