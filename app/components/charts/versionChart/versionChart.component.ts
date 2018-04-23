import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'versionChart',
    templateUrl: 'versionChart.component.html'
})

export class VersionChartComponent implements OnInit {
    constructor(private appService: AppService) { }

    ngOnInit() { }
}