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
var Chart11Component = /** @class */ (function () {
    function Chart11Component() {
        this.chart11Labels = ['Q1', 'Q2', 'Q3', 'Q4'];
        this.chart11Type = 'line';
        this.chart11Legend = false;
        this.chart11Options = {
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
        this.chart11Data = [{ data: [30, 42, 49, 62], label: 'Test coverage(in %)' }];
        this.chart11Colors = [
            {
                fill: true,
                lineTension: 0,
                backgroundColor: "#00897b",
                borderColor: "#047c6c",
                borderWidth: 3,
                pointRadius: 5,
                pointStyle: 'star',
                pointBackgroundColor: "#047c6c",
                pointHitRadius: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: "#047c6c"
            }
        ];
    }
    Chart11Component.prototype.ngOnInit = function () {
    };
    Chart11Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart11',
            templateUrl: 'chart11.component.html',
            styleUrls: ['./chart11.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], Chart11Component);
    return Chart11Component;
}());
exports.Chart11Component = Chart11Component;
// import { Component, OnInit } from '@angular/core';
// @Component({
//   moduleId: module.id,
//   selector: 'chart11',
//   templateUrl: 'chart11.component.html'
// })
// export class Chart11Component implements OnInit {
//   constructor() { }
//   public chart11Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
//   public chart11Type: string = 'bar';
//   public chart11Legend: boolean = false;
//   public chart11Options:any = {
//      layout: {
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
//       bodyFontSize:10,
//       titleFontFamily:10,titleMarginBottom:0,
//       footerMarginTop:0
//     },
//    legend:{
//     position:'bottom'
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{
//        display:false,
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
//   public chart11Data: any[] = [ { data:[10,20,35,40],label:'Test coverage(in %)'}];
// public chart11Colors:Array<any> = [
//    {
//   backgroundColor: "#00897b",
//   }
// ];
//   ngOnInit() {
//   }
// }
