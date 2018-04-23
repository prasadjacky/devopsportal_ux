import { FilterDataService } from './../../services/filterdata.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Project } from './projects/projects';
import { AppService } from '../../services/app.service';

@Component({
    moduleId: module.id,
    templateUrl: 'projects.component.html',
    selector: 'projects',
    styleUrls: ['projects.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
    projects: Project[] = this.filterDataService.projects;

    constructor(private appService: AppService, private filterDataService: FilterDataService) {
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
            })
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
                })
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

        })
    }
    ngOnInit() {

        // this.appService.getProject().subscribe(projects => {
        //     this.projects = projects;
        // })
    }
    handleRowSelect1(event) {
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
        } else {
            x.style.display = "none";
        }
    }
    handleRowSelect2(event) {
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
        } else {
            x.style.display = "none";
        }
    }
    handleRowSelect3(event) {
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
        } else {
            x.style.display = "none";
        }
    }
    handleRowSelect4(event) {
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
        } else {
            x.style.display = "none";
        }
    }
    handleRowSelect5(event) {
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
        } else {
            x.style.display = "none";
        }
    }
}