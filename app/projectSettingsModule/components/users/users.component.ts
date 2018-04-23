import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

     ngOnInit(){

        $(document).ready(function() {
            (<any>$('#Roles')).tab('show');

            $('#UserManagementTab a').click(function(e) {
                e.preventDefault();
                $('a.active').removeClass('active');
                $(this).addClass('active');
                (<any>$(this)).tab('show');
            });
        });
    }
}