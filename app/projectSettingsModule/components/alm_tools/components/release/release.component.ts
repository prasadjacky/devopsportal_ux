import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css']

})

export class ReleaseComponent {
    public enabled = false;
    public Release = {
        tool:'',
        platform_tool:''
    }


     ngOnInit() {}

}