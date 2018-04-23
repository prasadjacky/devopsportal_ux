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
var Chart3Component = /** @class */ (function () {
    function Chart3Component(appService) {
        // this.appService.getChart3().subscribe((data) => {
        //     this.chart3Data = data;
        //     console.log(this.chart3Data)
        // });
        this.appService = appService;
        this.velocity1 = [];
        this.velocity2 = [];
        this.chart3Labels = ['Sprint1', 'Sprint2'];
        this.chart3Type = 'bar';
        this.chart3Legend = false;
        this.chart3Options = {
            plugins: {
                datalabels: {
                    display: false
                }
            },
            legend: {
                position: 'right'
            },
            title: {
                fontSize: 16,
                display: true,
                text: 'Velocity',
                fontFamily: '"Comfortaa",sans-serif',
                fontStyle: 'normal'
            },
            scales: {
                xAxes: [{
                        stacked: false,
                        barThickness: 15,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            suggestedMin: 0,
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        stacked: false,
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            min: 0
                        }
                    }]
            },
            scaleShowVerticalLines: false,
            responsive: false,
            maintainAspectRatio: false
        };
        this.chart3Data = [
            { data: [] },
            { data: [] }
        ];
        // public xyz:any[] = [
        //     {data:[]},
        //     {data:[]}
        //   ];
        this.chart3Colors = [
            { backgroundColor: ['#27ae60', '#27ae60', '#27ae60', '#27ae60', '#27ae60'] },
            { backgroundColor: ['#2980b9', '#2980b9', '#2980b9', '#2980b9', '#2980b9'] }
        ];
    }
    Chart3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getNavChangeEmitter().subscribe(function (item) {
            _this.key = item;
            _this.appService.getChart3(_this.key).subscribe(function (data) {
                _this.velocity = data;
                _this.velocity1 = [];
                _this.velocity2 = [];
                for (var i = 0; i < _this.velocity.length; i++) {
                    if (_this.velocity[i].story_points != null || _this.velocity[i].story_points != undefined) {
                        _this.velocity1.push(_this.velocity[i].story_points.points_committed);
                        _this.velocity2.push(_this.velocity[i].story_points.points_completed);
                        _this.chart3Data = [{ "data": _this.velocity1, "label": "Commitment" },
                            { "data": _this.velocity2, "label": "Completed" }];
                        //  this.chart3data=[
                        //   {"data":[40,53,56,57], "label": "Commitment"},
                        //   {"data":[37,47,56,47], "label": "Completed"}
                        //       ]
                        // console.log(this.chart3data)
                    }
                    else if (_this.velocity[i].story_points == null || _this.velocity[i].story_points == undefined) {
                        _this.velocity1.push(0);
                        _this.velocity2.push(0);
                        _this.chart3Data = [{ "data": _this.velocity1, "label": "Commitment" },
                            { "data": _this.velocity2, "label": "Completed" }];
                    }
                }
                // }
            });
        });
    };
    Chart3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chart3',
            templateUrl: 'chart3.component.html',
            styleUrls: ['./chart3.component.css'],
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], Chart3Component);
    return Chart3Component;
}());
exports.Chart3Component = Chart3Component;
