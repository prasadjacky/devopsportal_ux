import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart6',
  templateUrl: 'filterchart6.component.html',
  styleUrls: ['./filterchart6.component.css']

})

export class FilterChart6Component {
  public projectTechnology: Array<string> = this.dataService.projectTechnology;
  public appliedTechnologyFilters: Array<string> = Array();
  projects = [];
  public isTechnologyFilterApplied: Boolean = false;
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
    { data: [6], label: 'Abinitio' },
    { data: [3], label: 'MongoDB' },
    { data: [3], label: 'IIS' },
    { data: [18], label: 'Others' }
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
      case "Technology":
        this.appliedTechnologyFilters.push(value);
        //document.getElementById('btnTechnologyType').style.backgroundColor = "#3498DB";
        this.isTechnologyFilterApplied = true;
        break;
    }
  }

  //remove filter value from applied filters when user clicks on remove button
  removeAppliedFilter(filter: string, value: string) {
    let index: number = 0;
    switch (filter) {
      case "Technology":
        index = this.appliedTechnologyFilters.indexOf(value);
        if (index !== -1) {
          this.appliedTechnologyFilters.splice(index, 1);
          let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElement" + filter + value);
          dynamicFilterElement.checked = false;
          this.dataService.appliedTechnologyFilters = this.appliedTechnologyFilters;
          this.technologyFilterEvent.emit(this.technologyFilterEvent);
        }
        if (this.appliedTechnologyFilters.length <= 0) {
          //document.getElementById('btnTechnologyType').style.backgroundColor = "#DDDDDD";
          this.isTechnologyFilterApplied = true;
        }
        break;
    }
  }

  clearTypeAppliedFilterList() {
    this.appliedTechnologyFilters.forEach(function (value) {
      let dynamicFilterElement = <HTMLInputElement>document.getElementById("dynamicFilterElementTechnology" + value);
      dynamicFilterElement.checked = false;
    });
    this.appliedTechnologyFilters.length = 0;
    this.dataService.appliedTechnologyFilters = this.appliedTechnologyFilters;
    this.technologyFilterEvent.emit(this.technologyFilterEvent);
  }
  @Output() technologyFilterEvent = new EventEmitter();
  //change event on Type checkbox, to add the select value in applied filters
  typeAppliedFilter(event, filterType: string, filterValue: string) {
    if (event.target.checked) {
      this.addFilter(filterType, filterValue);
    } else {
      this.removeAppliedFilter(filterType, filterValue);
    }
    this.dataService.appliedTechnologyFilters = this.appliedTechnologyFilters;
    this.technologyFilterEvent.emit(this.technologyFilterEvent);
  }
}