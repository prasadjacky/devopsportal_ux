import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart4',
  templateUrl: 'filterchart4.component.html',
  styleUrls: ['./filterchart4.component.css']

})

export class FilterChart4Component {
  public appliedLoBFilters: Array<string> = Array();
  public projectLob: Array<string> = this.dataService.projectLob;
  projects = [];
  public isLobFilterApplied: Boolean = false;
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
    { data: [8], label: 'IT Services' },    
    { data: [6], label: 'Trade & Finance' },
    { data: [5], label: 'Electricals' },
    { data: [11], label: 'Others' },
    // { data: [1], label: 'Education' },
    // { data: [1], label: 'Advertising' },
    // { data: [1], label: 'IT Services' },
    // { data: [1], label: 'Banking' }
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
      case "LoB":
        this.appliedLoBFilters.push(value);
        //document.getElementById('btnLobType').style.backgroundColor = "#3498DB";
        this.isLobFilterApplied = true;
        break;
    }
  }

  //remove filter value from applied filters when user clicks on remove button
  removeAppliedFilter(filter: string, value: string) {
    let index: number = 0;
    switch (filter) {
      case "LoB":
        index = this.appliedLoBFilters.indexOf(value);
        if (index !== -1) {
          this.appliedLoBFilters.splice(index, 1);
          let dynamicFilterElement: Element = document.getElementById("dynamicFilterElement" + filter + value);
          dynamicFilterElement.checked = false;
          this.dataService.appliedLobFilters = this.appliedLoBFilters;
          this.lobFilterEvent.emit(this.appliedLoBFilters);
        }
        if (this.appliedLoBFilters.length <= 0) {
          //document.getElementById('btnLobType').style.backgroundColor = "#DDDDDD";
          this.isLobFilterApplied = true;
        }
        break;
    }
  }

  clearTypeAppliedFilterList() {
    this.appliedLoBFilters.forEach(function (value) {
      let dynamicFilterElement: Element = document.getElementById("dynamicFilterElementLoB" + value);
      dynamicFilterElement.checked = false;
    });
    this.appliedLoBFilters.length = 0;
    this.dataService.appliedLobFilters = this.appliedLoBFilters;
    this.lobFilterEvent.emit(this.appliedLoBFilters);
  }

  @Output() lobFilterEvent = new EventEmitter();
  //change event on Type checkbox, to add the select value in applied filters
  typeAppliedFilter(event, filterType: string, filterValue: string) {
    if (event.target.checked) {
      this.addFilter(filterType, filterValue);
    } else {
      this.removeAppliedFilter(filterType, filterValue);
    }
    this.dataService.appliedLobFilters = this.appliedLoBFilters;
    this.lobFilterEvent.emit(this.appliedLoBFilters);
  }
}