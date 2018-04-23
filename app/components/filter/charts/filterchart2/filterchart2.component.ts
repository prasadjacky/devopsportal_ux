import { Component, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart2',
  templateUrl: 'filterchart2.component.html',
  styleUrls: ['./filterchart2.component.css']

})

export class FilterChart2Component {
  public projectHealth: Array<string> = this.dataService.projectHealth;
  public appliedHealthFilters: Array<string> = Array();
  public isHealthFilterApplied: Boolean = false;
  projects = [];
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
    { data: [14], label: 'Stable' },
    { data: [5], label: 'Warning' },
    { data: [11], label: 'At Risk' }
  ];

  public filterchart1Colors: Array<any> = [
    { backgroundColor: ['#5CB85C'] }, //5CB85C 79C447
    { backgroundColor: ['#F0AD4E'] }, //F0AD4E FABB3D
    { backgroundColor: ['#D9534F'] }, //D9534F FF5454 
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
      case "Health":
        this.appliedHealthFilters.push(value);
        //document.getElementById('btnHealthType').style.backgroundColor = "#3498DB";
        this.isHealthFilterApplied = true;
        break;
    }
  }

  //remove filter value from applied filters when user clicks on remove button
  removeAppliedFilter(filter: string, value: string) {
    let index: number = 0;
    switch (filter) {
      case "Health":
        index = this.appliedHealthFilters.indexOf(value);
        if (index !== -1) {
          this.appliedHealthFilters.splice(index, 1);
          let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElement" + filter + value);
          dynamicFilterElement.checked = false;
          this.dataService.appliedHealthFilters = this.appliedHealthFilters;
          this.healthFilterEvent.emit(this.appliedHealthFilters);
        }
        if (this.appliedHealthFilters.length <= 0) {
          //document.getElementById('btnHealthType').style.backgroundColor = "#DDDDDD";
          this.isHealthFilterApplied = true;
        }
        break;
    }
  }

  clearTypeAppliedFilterList() {
    this.appliedHealthFilters.forEach(function (value) {
      let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElementHealth" + value);
      dynamicFilterElement.checked = false;
    });
    this.appliedHealthFilters.length = 0;
    this.dataService.appliedHealthFilters = this.appliedHealthFilters;
    this.healthFilterEvent.emit(this.appliedHealthFilters);
  }

  @Output() healthFilterEvent = new EventEmitter();
  //change event on Type checkbox, to add the select value in applied filters
  typeAppliedFilter(event, filterType: string, filterValue: string) {
    if (event.target.checked) {
      this.addFilter(filterType, filterValue);
    } else {
      this.removeAppliedFilter(filterType, filterValue);
    }
    this.dataService.appliedHealthFilters = this.appliedHealthFilters;
    this.healthFilterEvent.emit(this.appliedHealthFilters);
  }
}