import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'userManagement',
    templateUrl: 'user_management.component.html',
    styleUrls: ['./user_management.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class UserManagementComponent implements OnInit{

public id:string;

     ngOnInit(){

        $(document).ready(function() {
            (<any>$('#UserDirectories')).tab('show');

            $('#UserManagementTabs .pad').click(function(e) {
                e.preventDefault();
                $('#UserManagementTabs div.titleTab').removeClass('titleTab tabArrow');
                $('#UserManagementTabs a.active').removeClass('active');
                $(this).children().addClass('active');
                $(this).children().parent().addClass('titleTab tabArrow');
                (<any>$(this).children()).tab('show');  
            });

            

           
        });
    }
}