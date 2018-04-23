import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart3',
  templateUrl: 'filterchart3.component.html',
  styleUrls: ['./filterchart3.component.css']

})

export class FilterChart3Component {
  public projectManagers: Array<string> = this.dataService.projectManagers;
  public appliedManagerFilters: Array<string> = Array();
  projects = [];
  public isManagerFilterApplied: Boolean = false;
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
        display:false,
        stacked: true,
        barPercentage: 0.5
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [9], label: 'Shashank Gupta' },
    { data: [5], label: 'Chirag Sane' },
    { data: [4], label: 'Prasad Amberkar' },
    { data: [12], label: 'Others' },
    // { data: [1], label: 'Chirag Sane' },
    // { data: [1], label: 'Rahul Punjabi' },
    // { data: [1], label: 'Nikhil Pujary' },
    // { data: [1], label: 'Chetali Patidar' },
    // { data: [1], label: 'Shriya Chhajed' }
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
      case "Manager":
        this.appliedManagerFilters.push(value);
        //document.getElementById('btnManagerType').style.backgroundColor = "#3498DB";
        this.isManagerFilterApplied = true;
        break;
    }
  }

  //remove filter value from applied filters when user clicks on remove button
  removeAppliedFilter(filter: string, value: string) {
    let index: number = 0;
    switch (filter) {
      case "Manager":
        index = this.appliedManagerFilters.indexOf(value);
        if (index !== -1) {
          this.appliedManagerFilters.splice(index, 1);
          let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElement" + filter + value);
          dynamicFilterElement.checked = false;
          this.dataService.appliedManagerFilters = this.appliedManagerFilters;
          this.managerFilterEvent.emit(this.appliedManagerFilters);
        }
        if (this.appliedManagerFilters.length <= 0) {
          //document.getElementById('btnManagerType').style.backgroundColor="#DDDDDD";
          this.isManagerFilterApplied = true;
        }
        break;
    }
  }

  clearTypeAppliedFilterList() {
    this.appliedManagerFilters.forEach(function (value) {
      let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElementManager" + value);
      dynamicFilterElement.checked = false;
    });
    this.appliedManagerFilters.length = 0;
    this.dataService.appliedManagerFilters = this.appliedManagerFilters;
    this.managerFilterEvent.emit(this.appliedManagerFilters);
  }
  
  @Output() managerFilterEvent = new EventEmitter();
  //change event on Type checkbox, to add the select value in applied filters
  typeAppliedFilter(event, filterType: string, filterValue: string) {
    if (event.target.checked) {
      this.addFilter(filterType, filterValue);
    } else {
      this.removeAppliedFilter(filterType, filterValue);
    }
    this.dataService.appliedManagerFilters = this.appliedManagerFilters;
    this.managerFilterEvent.emit(this.appliedManagerFilters);
  }
}