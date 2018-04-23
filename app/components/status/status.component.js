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
var app_service_1 = require("../../services/app.service");
var StatusComponent = /** @class */ (function () {
    function StatusComponent(appService) {
        this.appService = appService;
        this.runType = 38;
        this.buildType = 62;
        this.smoothStats = 55;
        this.warningStats = 30;
        this.atRiskStats = 15;
        this.snackbar_message = "";
        $(document).ready(function () {
            // console.log("StatusComponent Loaded");
            // $("#runType").click(function(){
            //     $("#runType").addClass('selected');
            //     $("#buildType").removeClass('selected');
            // });
            // $("#buildType").click(function(){
            //     $("#runType").removeClass('selected');
            //     $("#buildType").addClass('selected');
            // });
            // $("#allType").click(function(){
            //     $("#runType").removeClass('selected');
            //     $("#buildType").removeClass('selected');
            // });
            // $("#smoothStats").click(function(){
            //     $("#smoothStats").addClass('selected');
            //     $("#warningStats").removeClass('selected');
            //     $("#atRiskStats").removeClass('selected');
            // });
            // $("#warningStats").click(function(){
            //     $("#smoothStats").removeClass('selected');
            //     $("#warningStats").addClass('selected');
            //     $("#atRiskStats").removeClass('selected');
            // });
            // $("#atRiskStats").click(function(){
            //     $("#smoothStats").removeClass('selected');
            //     $("#warningStats").removeClass('selected');
            //     $("#atRiskStats").addClass('selected');
            // });
            // $("#allStats").click(function(){
            //     $("#smoothStats").removeClass('selected');
            //     $("#warningStats").removeClass('selected');
            //     $("#atRiskStats").removeClass('selected');
            // });
            $("#runType").click(function () {
                $(".level1Stats").css('border-color', '#FFC400');
                $("#runType").css('background-color', '#FFC400');
                $("#buildType").css('background-color', '#DDD');
            });
            $("#buildType").click(function () {
                $(".level1Stats").css('border-color', '#6495ed');
                $("#runType").css('background-color', '#DDD');
                $("#buildType").css('background-color', '#6495ed');
            });
            $("#allType").click(function () {
                $(".level1Stats").css('border-color', '#DDD');
                $("#runType").css('background-color', '#FFC400');
                $("#buildType").css('background-color', '#6495ed');
            });
            $("#smoothStats").click(function () {
                $(".level2Stats").css('border-color', '#388E3C');
                $("#smoothStats").css('background-color', '#388E3C');
                $("#warningStats").css('background-color', '#DDD');
                $("#atRiskStats").css('background-color', '#DDD');
            });
            $("#warningStats").click(function () {
                $(".level2Stats").css('border-color', '#FBC02D');
                $("#smoothStats").css('background-color', '#DDD');
                $("#warningStats").css('background-color', '#FBC02D');
                $("#atRiskStats").css('background-color', '#DDD');
            });
            $("#atRiskStats").click(function () {
                $(".level2Stats").css('border-color', '#D32F2F');
                $("#smoothStats").css('background-color', '#DDD');
                $("#warningStats").css('background-color', '#DDD');
                $("#atRiskStats").css('background-color', '#D32F2F');
            });
            $("#allStats").click(function () {
                $(".level2Stats").css('border-color', '#DDD');
                $("#smoothStats").css('background-color', '#388E3C');
                $("#warningStats").css('background-color', '#FBC02D');
                $("#atRiskStats").css('background-color', '#D32F2F');
            });
        });
    }
    StatusComponent.prototype.myFunction = function (y) {
        // this.snackbar_message = y;
        // var x = document.getElementById("snackbar")
        // x.className = "show";
        // setTimeout(function(){ 
        //     x.className = x.className.replace("show", ""); 
        // }, 3000);
    };
    StatusComponent.prototype.changeStatus = function (value) {
        this.appService.changeStatus(value);
    };
    StatusComponent.prototype.ngOnInit = function () { };
    StatusComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'status',
            templateUrl: './status.component.html',
            styleUrls: ['./status.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
