import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart1',
  templateUrl: 'filterchart1.component.html',
  styleUrls: ['./filterchart1.component.css']

})

export class FilterChart1Component {
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
    { data: [16], label: 'Development' },
    { data: [14], label: 'Maintenance' }
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
  public projectTypes: Array<string> = Array();
  public appliedTypeFilters: Array<string> = Array();

  projects = [];
  public isFilterApplied: Boolean = false;
  public isTypeFilterApplied: Boolean = this.dataService.isTypeFilterApplied;
  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
  constructor(private appService: AppService, private dataService: FilterDataService) {
      this.dataService.filterServiceProjectCountEvent.subscribe(res =>{
        this.barChartData = [
          { data: [this.dataService.devProjectCount], label: 'Development' },
          { data: [this.dataService.mainProjectCount], label: 'Maintenance' }
        ];
      })
   }
  ngOnInit() {
    this.projectTypes = this.dataService.projectTypes;
  }

  //populate applied filters on change evenet
  addFilter(filter: string, value: string) {
    switch (filter) {
      case "Type":
        this.appliedTypeFilters.push(value);
        //document.getElementById('btnFilterType').style.backgroundColor = "#3498DB";
        this.isTypeFilterApplied = true;
        break;
    }
  }

  //remove filter value from applied filters when user clicks on remove button
  removeAppliedFilter(filter: string, value: string) {
    console.log(filter, value);
    let index: number = 0;
    switch (filter) {
      case "Type":
        index = this.appliedTypeFilters.indexOf(value);
        if (index !== -1) {
          this.appliedTypeFilters.splice(index, 1);
          let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElement" + filter + value);
          dynamicFilterElement.checked = false;
          this.dataService.appliedTypeFilters = this.appliedTypeFilters;
          this.typeFilterEvent.emit(this.appliedTypeFilters);
        }
        if (this.appliedTypeFilters.length <= 0) {
          //document.getElementById('btnFilterType').style.backgroundColor = "#DDDDDD";
          this.isTypeFilterApplied = false;
        }
        break;
    }
  }

  clearTypeAppliedFilterList() {
    this.appliedTypeFilters.forEach(function (value) {
      let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElementType" + value);
      dynamicFilterElement.checked = false;
    });
    this.appliedTypeFilters.length = 0;
    this.dataService.appliedTypeFilters = this.appliedTypeFilters;
    this.typeFilterEvent.emit(this.appliedTypeFilters);
  }

  @Output() typeFilterEvent = new EventEmitter();
  //change event on Type checkbox, to add the select value in applied filters
  typeAppliedFilter(event, filterType: string, filterValue: string) {
    if (event.target.checked) {
      this.addFilter(filterType, filterValue);
    } else {
      this.removeAppliedFilter(filterType, filterValue);
    }
    this.dataService.appliedTypeFilters = this.appliedTypeFilters;
    this.typeFilterEvent.emit(this.appliedTypeFilters);
  }
}