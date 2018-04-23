import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'general',
    templateUrl: 'general.component.html',
    styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit{

    ngOnInit(){

        $(document).ready(function(){
            (<any>$('#GeneralTabs')).tab('show');

            $('#GeneralTabs .pad').click(function(e){
                e.preventDefault();
                $('#GeneralTabs div.titleTab').removeClass('titleTab tabArrow');
                $('#GeneralTabs a.active').removeClass('active');
                $(this).children().addClass('active');
                $(this).children().parent().addClass('titleTab tabArrow');
                (<any>$(this).children()).tab('show');
            });
        });
    }
}