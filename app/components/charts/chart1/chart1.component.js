"use strict";
// import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
// import { AppService } from '../../../services/app.service';
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
// @Component({
//   moduleId: module.id,
//   selector: 'chart1',
//   templateUrl: 'chart1.component.html',
//   styleUrls:['./chart1.component.css']
// })
// export class Chart1Component{
//  public chartsOBJ:any;
// public data:any[]=[
//   {
//     "Type":"Epic",
//     "Summary":"Create Mongoose Schemas for Metadata",
//     "Assignee":"Shashank Gupta",
//     "Story_Points":12
// },
//   {
//     "Type":"Epic",
//     "Summary":"Jenkins to Builds/Commits /Tests Transfo..",
//     "Assignee":"Rahul Punjabi",
//     "Story_Points":8
// },
//   {
//     "Type":"Epic",
//     "Summary":"Create Build Models...",
//     "Assignee":"Chirag Sane",
//     "Story_Points":20
// },
//   {
//     "Type":"Bug",
//     "Summary":"Create Mongoose Schemas for Metadata",
//     "Assignee":"Shashank Gupta",
//     "Story_Points":3
// },
//   {
//     "Type":"Bug",
//     "Summary":"Create Mongoose Schemas for Metadata",
//     "Assignee":"Cheerandeep Soni",
//     "Story_Points":5
//  }
// ];
//  public data1: any[] = [];
// public chart1Labels:string[] = ['Sprint1','Sprint2','Sprint3','Sprint4','Sprint5','Sprint6','Sprint7','Sprint8','Sprint9','Sprint10'];
// public chart1Legend:boolean = false;
// public chart1Options:any = {
//   legend:{
//     position: 'bottom'
//   },
//   scales: {
//     xAxes: [{
//         stacked: true,
//         gridLines: {
//           display: false
//         }
//       }],
//       yAxes: [{
//         stacked: true,
//         display:false,
//         gridLines: {
//           display: false
//         },
//         scaleLabel: {
//           display: true,
//           labelString: 'Story Points'
//         }
//       }]
//   },
//   scaleShowVerticalLines: false,
//   responsive: false,
//   maintainAspectRatio: false
// };
//  public chart1Data:any[] = [
//     {data:[]},
//     {data:[]}    
//  ];
// public chart1Colors:Array<any> = [
//  {backgroundColor:['#20579b','#20579b','#20579b','#20579b','#20579b','#808284','#808284','#808284','#808284','#808284']},
//  {backgroundColor:['#6495ed','#6495ed','#6495ed','#6495ed','#6495ed','#dee0e2','#dee0e2','#dee0e2','#dee0e2','#dee0e2']},
//  {backgroundColor:['#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1','#c1f0c1']}
// ];
// public chart1Type:string = 'bar';
// //chart0 data
// public chart0Data:any[] = [
//       {
//         data: [55, 30, 42, 26, 22, 7,], 
//         label: 'Remaining Effort',
//         type: 'line'
//       },
//       {
//         data: [55,null,null,null,null,null,0], 
//         label: 'Ideal Burndown',
//         type: 'line'
//       }
// ];
// public chart0Labels:string[] = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];
// public chart0Options:any = {
//   title:{
//     fontSize: 16,
//     display: true,
//     text: 'Sprint Burndown',
//   fontFamily: '"Comfortaa",sans-serif',
//     fontStyle:'normal',
//     fontWeight: 600
//   },
//   legend:{
//     position:'bottom'
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{
//       gridLines: {
//         display: false
//       },
//       ticks: {
//         suggestedMin: 0,
//         beginAtZero: true
//       }
//     }],
//     yAxes: [{
//       position: "left",
//       scaleLabel: {
//         display: true,
//         labelString: "Remaining Efforts(hrs)"
//       },
//       gridLines: {
//         display: true
//       },
//       ticks: {
//         suggestedMin: 0,
//         beginAtZero: true
//       }   
//     }
//     ]
//   }
// };
// public chart0Colors:Array<any> = [{
//   fill: false,
//   lineTension: 0,
//   backgroundColor: "#000099",
//   borderColor: "#066384",
//   borderWidth: 3,
//   pointRadius: 5,
//   pointStyle: 'rectRot',
//   pointBackgroundColor: "#000099",
//   pointHitRadius: 5,
//   pointHoverRadius: 7,
//   pointHoverBackgroundColor: "#000099"
//   },{
//   spanGaps: true,
//   fill: false,
//   lineTension: 0,
//   backgroundColor: "#000099",
//   borderColor: "#7ebc4b",
//   borderWidth: 3,
//   pointBackgroundColor: "#000099",
//   pointHitRadius: 3,
//   pointHoverRadius: 3,
//   pointHoverBackgroundColor: "#000099"
//   },{
//   fill: false,
//   lineTension: 0,
//   backgroundColor: "#000099",
//   borderColor: "#8ddcf4",
//   borderWidth: 3,
//   borderCapStyle: 'round',
//   pointRadius: 5,
//   pointBorderColor: "#47d1d1",
//   pointBackgroundWidth: 3,
//   pointBackgroundColor: "#000099",
//   pointBorderWidth: 2,
//   pointHoverRadius: 10,
//   pointHoverBackgroundColor: "#000099",
//   pointHoverBorderColor: "#47d1d1",
//   pointHoverBorderWidth: 2,
//   pointHitRadius: 10,
//   },{
//   backgroundColor: "#c65353",
// }];
// public chart0Legend:boolean = false;
// public chart0Type:string = 'line';
// constructor(private appService: AppService){}
// public key;
//   ngOnInit() {
//  this.appService.getNavChangeEmitter().subscribe(item => {this.key=item;
//  this.appService.getVersionControll(this.key).subscribe(data => {
//             this.chartsOBJ= data
//           this.data1[0]=[this.chartsOBJ.totalPoints];
//           this.data1[1]=[this.chartsOBJ.totalPointsCompleted];
//           this.chart1Data=[{"data":this.data1[0],"label":"Work Added"},
//                       {"data":this.data1[1],"label":"Work Completed"}];
//            })
//  })   }
// }
var core_1 = require("@angular/core");
var app_service_1 = require("../../../services/app.service");
var Chart1Component = /** @class */ (function () {
    function Chart1Component(appService) {
        this.appService = appService;
        this.data = [
            {
                "Type": "Epic",
                "Summary": "Create Mongoose Schemas for Metadata",
                "Assignee": "Prasad Amberkar",
                "Story_Points": 8
            },
            {
                "Type": "Epic",
                "Summary": "Jenkins to Builds/Commits /Tests Transfo..",
                "Assignee": "Rahul Punjabi",
                "Story_Points": 6
            },
            {
                "Type": "Epic",
                "Summary": "Create Build Models...",
                "Assignee": "Chirag Sane",
                "Story_Points": 8
            },
            {
                "Type": "Bug",
                "Summary": "Create Mongoose Schemas for Metadata",
                "Assignee": "Cressida",
                "Story_Points": 8
            }
        ];
        this.data1 = [];
        this.chart1Labels = ['Sprint1', 'Sprint2'];
        this.chart1Legend = false;
        this.chart1Options = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
            title: {
                fontSize: 16,
                display: true,
                text: 'Version Completion',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal'
            },
            legend: {
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                        stacked: true,
                        barThickness: 15,
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        display: false,
                        gridLines: {
                            display: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Story Points'
                        }
                    }]
            },
            scaleShowVerticalLines: false,
            responsive: false,
            maintainAspectRatio: false
        };
        this.chart1Data = [
            { data: [7, 0], label: 'Work Added' },
            { data: [35, 0], label: 'Work Remaining' },
            { data: [30, 42], label: 'Work Completed' }
        ];
        this.chart1Colors = [
            { backgroundColor: ['#20579b', '#20579b', '#20579b', '#808284'] },
            { backgroundColor: ['#6495ed', '#6495ed', '#6495ed', '#dee0e2'] },
            { backgroundColor: ['#c1f0c1', '#c1f0c1', '#c1f0c1', '#c1f0c1'] }
        ];
        this.chart1Type = 'bar';
        //chart0 data
        this.chart0Data = [
            {
                data: [72, 30, 42, 26, 22, 7, 0],
                label: 'Remaining Effort',
                type: 'line'
            },
            {
                data: [72, null, null, null, null, null, 0],
                label: 'Ideal Burndown',
                type: 'line'
            }
        ];
        this.chart0Labels = ["Day1", "Day3", "Day5", "Day7", "Day9", "Day11", "Day14"];
        this.chart0Options = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
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
        this.chart0Colors = [{
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
        this.chart0Legend = false;
        this.chart0Type = 'line';
    }
    Chart1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getNavChangeEmitter().subscribe(function (item) {
            _this.key = item;
            // this.appService.getVersionControll(this.key).subscribe(data => {
            //   this.chartsOBJ = data
            //   this.data1[0] = [this.chartsOBJ.totalPoints];
            //   this.data1[1] = [this.chartsOBJ.totalPointsCompleted];
            //   this.chart1Data = [{ "data": this.data1[0], "label": "Work Added" },
            //   { "data": this.data1[1], "label": "Work Completed" }];
            // })
        });
    };
    Chart1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart1',
            templateUrl: 'chart1.component.html',
            styleUrls: ['./chart1.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Chart1Component);
    return Chart1Component;
}());
exports.Chart1Component = Chart1Component;
