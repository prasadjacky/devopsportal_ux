import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'almTools',
    templateUrl: 'alm_tools.component.html',
    styleUrls: ['./alm_tools.component.css'],
    encapsulation: ViewEncapsulation.None

})

export class AlmToolsComponent implements OnInit{

    ngOnInit(){

        $(document).ready(function() {
            (<any>$('#Planning')).tab('show');
            $('#AlmToolsTabs').click(function(e) {
                e.preventDefault();
                $('#AlmToolsTabs div.titleTab').removeClass('titleTab tabArrow');
                $('#AlmToolsTabs a.active').removeClass('active');
                $(this).children().addClass('active');
                $(this).children().children('ul').children('li.active').children().addClass('active')
                $(this).children().parent().addClass('titleTab tabArrow');
                (<any>$(this).children()).tab('show');
            });
        });
    }
}