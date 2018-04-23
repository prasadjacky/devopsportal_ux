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
var Chart12Component = /** @class */ (function () {
    function Chart12Component() {
        this.chart12Labels = ['Q1', 'Q2', 'Q3', 'Q4'];
        this.chart12Type = 'line';
        this.chart12Legend = false;
        this.chart12Options = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
            tooltips: {
                bodySpacing: 0,
                xPadding: 0,
                yPadding: 0,
                bodyFontSize: 12,
                titleFontFamily: 10, titleMarginBottom: 0,
                footerMarginTop: 0
            },
            legend: {
                position: 'bottom'
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barThickness: 50,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true,
                            fontSize: 10
                        }
                    }],
                yAxes: [{
                        display: false,
                        position: "left",
                        scaleLabel: {
                            display: false,
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true,
                        }
                    }
                ]
            }
        };
        this.chart12Data = [{ data: [56, 42, 50, 35], label: 'hours' }];
        this.chart12Colors = [
            {
                fill: true,
                lineTension: 0,
                backgroundColor: "#e53935",
                borderColor: "#db0202",
                borderWidth: 3,
                pointRadius: 5,
                pointStyle: 'circle',
                pointBackgroundColor: "#e53935",
                pointHitRadius: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: "#e53935"
            }
        ];
    }
    Chart12Component.prototype.ngOnInit = function () {
    };
    Chart12Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart12',
            templateUrl: 'chart12.component.html',
            styleUrls: ['./chart12.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], Chart12Component);
    return Chart12Component;
}());
exports.Chart12Component = Chart12Component;
// import { Component, OnInit } from '@angular/core';
// @Component({
//   moduleId: module.id,
//   selector: 'chart12',
//   templateUrl: 'chart12.component.html'
// })
// export class Chart12Component implements OnInit {
//   constructor() { }
//   public chart12Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
//   public chart12Type: string = 'bar';
//   public chart12Legend: boolean = false;
//   public chart12Options:any = {
//     layout: {
//             padding: {
//                 left: 25,
//                 right: 25,
//                 top: 10,
//                 bottom: 10
//             }
//         },
//     tooltips:{
//       bodySpacing:0,
//       xPadding:0, 
//       yPadding :0,     
//       bodyFontSize:10,
//       titleFontFamily:10,titleMarginBottom:0,
//       footerMarginTop:0
//     },
//   legend:{
//     position:'bottom'
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{
//       display:false,
//       barThickness: 25,
//       gridLines: {
//         display: false
//       },
//       ticks: {
//         suggestedMin: 0,
//         beginAtZero: true,
//         fontSize:10
//       }
//     }],
//     yAxes: [{
//        display:false,
//       position: "left",
//       scaleLabel: {
//         display: false,
//       },
//       gridLines: {
//         display: false
//       },
//       ticks: {
//         suggestedMin: 0,
//         beginAtZero: true,
//         fontSize:10
//       }   
//     }
//     ]
//   }
// };
//   public chart12Data: any[] = [{ data:[8,6,10,5],label:'hours',type:'bar'}];
// public chart12Colors:Array<any> = [{
//   backgroundColor: "#e53935"
//   }];
//   ngOnInit() {
//   }
// }
