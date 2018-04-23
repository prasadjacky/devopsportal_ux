import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart5',
  templateUrl: 'filterchart5.component.html',
  styleUrls: ['./filterchart5.component.css']

})

export class FilterChart5Component {
  public projectRegion: Array<string> = this.dataService.projectRegion;
  public appliedRegionFilters: Array<string> = Array();
  projects = [];
  public isRegionFilterApplied: Boolean = false;
  public barChartOptions: any = {
    plugins: {
      datalabels: {
        color: 'white'
      }
    },
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        stacked: true,
        scaleLabel: { fontSize: 10 },
        barPercentage: 0.5
      }],
      yAxes: [{
        display: false,
        stacked: true,
        barPercentage: 0.5
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [11], label: 'Denmark' },
    { data: [8], label: 'India' },
    { data: [7], label: 'Munich' },
    { data: [4], label: 'South Africa' }    
  ];

  public filterchart1Colors: Array<any> = [
    { backgroundColor: ['#2196F3'] },
    { backgroundColor: ['#37a0f4'] },
    { backgroundColor: ['#4dabf5'] },
    { backgroundColor: ['#63b5f6'] },
    { backgroundColor: ['#79c0f7'] },
    { backgroundColor: ['#90CAF9'] },
    { backgroundColor: ['#a6d5fa'] },
    { backgroundColor: ['#bcdffb'] }
  ];
  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
  constructor(private appService: AppService, private dataService: FilterDataService) { }
  ngOnInit() {

  }
  //populate applied filters on change evenet
  addFilter(filter: string, value: string) {
    switch (filter) {
      case "Region":
        this.appliedRegionFilters.push(value);
        //document.getElementById('btnRegionType').style.backgroundColor = "#3498DB";
        this.isRegionFilterApplied = true;
        break;
    }
  }

  //remove filter value from applied filters when user clicks on remove button
  removeAppliedFilter(filter: string, value: string) {
    let index: number = 0;
    switch (filter) {
      case "Region":
        index = this.appliedRegionFilters.indexOf(value);
        if (index !== -1) {
          this.appliedRegionFilters.splice(index, 1);
          let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElement" + filter + value);
          dynamicFilterElement.checked = false;
          this.dataService.appliedRegionFilters = this.appliedRegionFilters;
          this.regionFilterEvent.emit(this.appliedRegionFilters);
        }
        if (this.appliedRegionFilters.length <= 0) {
          //document.getElementById('btnRegionType').style.backgroundColor = "#DDDDDD";
          this.isRegionFilterApplied = true;
        }
        break;
    }
  }

  clearTypeAppliedFilterList() {
    this.appliedRegionFilters.forEach(function (value) {
      let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElementRegion" + value);
      dynamicFilterElement.checked = false;
    });
    this.appliedRegionFilters.length = 0;
    this.dataService.appliedRegionFilters = this.appliedRegionFilters;
    this.regionFilterEvent.emit(this.appliedRegionFilters);
  }
  @Output() regionFilterEvent = new EventEmitter();
  //change event on Type checkbox, to add the select value in applied filters
  typeAppliedFilter(event, filterType: string, filterValue: string) {
    if (event.target.checked) {
      this.addFilter(filterType, filterValue);
    } else {
      this.removeAppliedFilter(filterType, filterValue);
    }
    this.dataService.appliedRegionFilters = this.appliedRegionFilters;
    this.regionFilterEvent.emit(this.appliedRegionFilters);
  }
}