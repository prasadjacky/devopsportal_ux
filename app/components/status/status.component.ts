import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';


@Component({
    moduleId: module.id,
    selector: 'status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

    runType: number = 38;
    buildType: number = 62;
    smoothStats: number = 55;
    warningStats: number = 30;
    atRiskStats: number = 15;

    snackbar_message: string = "";

    constructor(private appService: AppService) {
        $(document).ready(function() {
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
            $("#runType").click(function(){
                $(".level1Stats").css('border-color','#FFC400');
                $("#runType").css('background-color','#FFC400');
                $("#buildType").css('background-color','#DDD');
            });
            $("#buildType").click(function(){
                $(".level1Stats").css('border-color','#6495ed');
                $("#runType").css('background-color','#DDD');
                $("#buildType").css('background-color','#6495ed');
            });
            $("#allType").click(function(){
                $(".level1Stats").css('border-color','#DDD');
                $("#runType").css('background-color','#FFC400');
                $("#buildType").css('background-color','#6495ed');
            });
            $("#smoothStats").click(function(){
                $(".level2Stats").css('border-color','#388E3C');
                $("#smoothStats").css('background-color','#388E3C');
                $("#warningStats").css('background-color','#DDD');
                $("#atRiskStats").css('background-color','#DDD');
            });
            $("#warningStats").click(function(){
                $(".level2Stats").css('border-color','#FBC02D');
                $("#smoothStats").css('background-color','#DDD');
                $("#warningStats").css('background-color','#FBC02D');
                $("#atRiskStats").css('background-color','#DDD');
            });
            $("#atRiskStats").click(function(){
                $(".level2Stats").css('border-color','#D32F2F');
                $("#smoothStats").css('background-color','#DDD');
                $("#warningStats").css('background-color','#DDD');
                $("#atRiskStats").css('background-color','#D32F2F');
            });
            $("#allStats").click(function(){
                $(".level2Stats").css('border-color','#DDD');
                $("#smoothStats").css('background-color','#388E3C');
                $("#warningStats").css('background-color','#FBC02D');
                $("#atRiskStats").css('background-color','#D32F2F');
            });
        });
    }
    
    myFunction(y: string) {
        // this.snackbar_message = y;
        // var x = document.getElementById("snackbar")
        // x.className = "show";
        // setTimeout(function(){ 
        //     x.className = x.className.replace("show", ""); 
        // }, 3000);
    }

    changeStatus(value: string){
        this.appService.changeStatus(value);
    }

    ngOnInit() { }
}