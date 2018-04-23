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
var filterdata_service_1 = require("./../../services/filterdata.service");
var core_1 = require("@angular/core");
var app_service_1 = require("../../services/app.service");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(appService, filterDataService) {
        this.appService = appService;
        this.filterDataService = filterDataService;
        this.projects = this.filterDataService.projects;
        $(document).ready(function () {
            $('#xyz').hide();
            // console.log("ProjectsComponent Loaded!");
            $('#table').on('click', '.body tr', function () {
                $(this).siblings().hide();
                $('#xyz').show();
                $('#pagination').hide();
            });
            $('#xyz').click(function () {
                $('table tbody tr').show();
                $('.rowdata').hide();
                $('td').removeClass("highlight");
                $('#xyz').hide();
                $('#pagination').show();
            });
            $(function () {
                $('#table').on('click', 'tbody tr td', function () {
                    $(this).addClass("highlight");
                    $("td").not(this).removeClass("highlight");
                });
            });
            $(function () {
                $("#table tr").each(function (i, row) {
                    if ($(row).children("td.content").html() == "Stable") {
                        $(row).children("td.content").addClass("greenClass");
                    }
                    else if ($(row).children("td.content").html() == "At Risk") {
                        $(row).children("td.content").addClass("redClass");
                    }
                    else {
                        $(row).children("td.content").addClass("orangeClass");
                    }
                });
                var stats = $('#statusblock').html();
                $('#statusblock').change(function () {
                    var stats = $('#statusblock').html();
                });
                $("#table tr").each(function (i, row) {
                    if ($(row).children("td.release_stability").html() == "Stable") {
                        $(row).children("td.release_stability").addClass("greenClass");
                    }
                    else if ($(row).children("td.release_stability").html() == "At Risk") {
                        $(row).children("td.release_stability").addClass("redClass");
                    }
                    else {
                        $(row).children("td.release_stability").addClass("orangeClass");
                    }
                });
            });
            $('#table').on('click', '#details', function () {
                $("#data0").show();
                $("#data1").hide();
                $("#data2").hide();
                $("#data3").hide();
                $("#data4").hide();
                $("#data5").hide();
            });
        });
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        // this.appService.getProject().subscribe(projects => {
        //     this.projects = projects;
        // })
    };
    ProjectsComponent.prototype.handleRowSelect1 = function (event) {
        var x = document.getElementById('data1');
        var a = document.getElementById('data2');
        var b = document.getElementById('data3');
        var c = document.getElementById('data4');
        var d = document.getElementById('data5');
        var e = document.getElementById('data0');
        var y = document.getElementById('data1').style.display;
        if (y == "none") {
            x.style.display = "flex";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }
        else {
            x.style.display = "none";
        }
    };
    ProjectsComponent.prototype.handleRowSelect2 = function (event) {
        var x = document.getElementById('data2');
        var a = document.getElementById('data1');
        var b = document.getElementById('data3');
        var c = document.getElementById('data4');
        var d = document.getElementById('data5');
        var e = document.getElementById('data0');
        var y = document.getElementById('data2').style.display;
        if (y == "none") {
            x.style.display = "block";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }
        else {
            x.style.display = "none";
        }
    };
    ProjectsComponent.prototype.handleRowSelect3 = function (event) {
        var x = document.getElementById('data3');
        var a = document.getElementById('data2');
        var b = document.getElementById('data1');
        var c = document.getElementById('data4');
        var d = document.getElementById('data5');
        var e = document.getElementById('data0');
        var y = document.getElementById('data3').style.display;
        if (y == "none") {
            x.style.display = "flex";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }
        else {
            x.style.display = "none";
        }
    };
    ProjectsComponent.prototype.handleRowSelect4 = function (event) {
        var x = document.getElementById('data4');
        var a = document.getElementById('data2');
        var b = document.getElementById('data3');
        var c = document.getElementById('data1');
        var d = document.getElementById('data5');
        var e = document.getElementById('data0');
        var y = document.getElementById('data4').style.display;
        if (y == "none") {
            x.style.display = "flex";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }
        else {
            x.style.display = "none";
        }
    };
    ProjectsComponent.prototype.handleRowSelect5 = function (event) {
        var x = document.getElementById('data5');
        var a = document.getElementById('data1');
        var b = document.getElementById('data3');
        var c = document.getElementById('data4');
        var d = document.getElementById('data2');
        var e = document.getElementById('data0');
        var y = document.getElementById('data5').style.display;
        if (y == "none") {
            x.style.display = "flex";
            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
        }
        else {
            x.style.display = "none";
        }
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'projects.component.html',
            selector: 'projects',
            styleUrls: ['projects.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, filterdata_service_1.FilterDataService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
