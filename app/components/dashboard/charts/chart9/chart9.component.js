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
var Chart9Component = /** @class */ (function () {
    function Chart9Component() {
        this.chart9Labels = ['Q1', 'Q2', 'Q3', 'Q4'];
        this.chart9Type = 'line';
        this.chart9Legend = false;
        this.chart9Options = {
            // title:{
            //   fontSize: 14,
            //     display: true,
            //     text: 'Technical Debt',
            //     fontFamily: '"Comfortaa",sans-serif',
            //     fontStyle: 'bold',
            // },
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
        this.chart9Data = [{ data: [45, 66, 73, 87], label: '(in %)', type: 'line' }];
        this.chart9Colors = [{
                fill: true,
                lineTension: 0,
                backgroundColor: "#00acc1",
                borderColor: "#018899",
                borderWidth: 3,
                borderCapStyle: 'square',
                pointRadius: 5,
                pointBorderColor: "#047a89",
                pointBackgroundWidth: 3,
                pointBackgroundColor: "#047a89",
                pointBorderWidth: 2,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "#047a89",
                pointHoverBorderColor: "#047a89",
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                pointStyle: 'rect'
            }];
    }
    Chart9Component.prototype.ngOnInit = function () {
    };
    Chart9Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart9',
            templateUrl: 'chart9.component.html',
            styleUrls: ['./chart9.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], Chart9Component);
    return Chart9Component;
}());
exports.Chart9Component = Chart9Component;
// import { Component, OnInit } from '@angular/core';
// @Component({
//   moduleId: module.id,
//   selector: 'chart9',
//   templateUrl: 'chart9.component.html'
// })
// export class Chart9Component implements OnInit {
//   constructor() { }
//   public chart9Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
//   public chart9Type: string = 'line';
//   public chart9Legend: boolean = false;
//   public chart9Options:any = {
//   // title:{
//   //   fontSize: 14,
//   //     display: true,
//   //     text: 'Technical Debt',
//   //     fontFamily: '"Comfortaa",sans-serif',
//   //     fontStyle: 'bold',
//   // },
//   legend:{
//     position:'bottom'
//   },
//    layout: {
//             padding: {
//                 left: 25,
//                 right: 25,
//                 top: 10,
//                 bottom: 10
//             }
//         },
//           tooltips:{
//       bodySpacing:0,
//       xPadding:0, 
//       yPadding :0,     
//       bodyFontSize:12,
//       titleFontFamily:10,titleMarginBottom:0,
//       footerMarginTop:0
//     },
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
//       display:false,
//       position: "left",
//       scaleLabel: {
//         display: false,
//       },
//       gridLines: {
//         // drawBorder: false,
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
//   public chart9Data: any[] = [{ data:[2,10,30,44],label:'hours',type:'bar'}];
// public chart9Colors:Array<any> = [{
//   // backgroundColor: "#00acc1",
//      fill: true,
//   lineTension: 0,
//   backgroundColor: "#c2f76f",
//   borderColor: "#f7d645",
//   borderWidth: 3,
//   borderCapStyle: 'square',
//   pointRadius: 5,
//   pointBorderColor: "#47d1d1",
//   pointBackgroundWidth: 3,
//   pointBackgroundColor: "#45ed40",
//   pointBorderWidth: 2,
//   pointHoverRadius: 10,
//   pointHoverBackgroundColor: "#4d7c02",
//   pointHoverBorderColor: "#bc9900",
//   pointHoverBorderWidth: 2,
//   pointHitRadius: 10,
//   pointStyle:'rect'
//   }];
//   ngOnInit() {
//   }
// }
