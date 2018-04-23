import { Component, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { FilterDataService } from '../../../../services/filterdata.service';

@Component({
  moduleId: module.id,
  selector: 'filterchart7',
  templateUrl: 'filterchart7.component.html',
  styleUrls: ['./filterchart7.component.css']

})

export class FilterChart7Component implements AfterViewInit {
  ngAfterViewInit(): void {
    this.changeTypeMonthly = true;
    this.changeTypeQuarterly = false;
    let currentDate = new Date();
    this.selectedYear = currentDate.getFullYear().toString();
    this.timeFilterForAPI.filterYear = currentDate.getFullYear().toString();
    this.selectedMonth = this.monthsShort[currentDate.getMonth()];
    this.timeFilterForAPI.filterMonth = currentDate.getMonth();
    if (this.selectedYear) {
      if (this.yearEl)
        this.yearEl.nativeElement.value = this.selectedYear;
      this.timeFilter.selectedYear = this.selectedYear;
    }
    if (this.selectedMonth) {
      if (this.monthEl)
        this.monthEl.nativeElement.value = this.selectedMonth;
      this.timeFilter.selectedMonth = this.selectedMonth;
    }
    this.applyTimeFilter(this.timeFilter);
  }
  changeTypeMonthly: boolean;
  changeTypeQuarterly: boolean;
  selectedYear = "";
  selectedMonth = "";
  timeFilter = { selectedYear: "", selectedMonth: "" };
  timeFilterForAPI = { filterBy: "ENV", filterYear: "", filterMonth: 0 };
  monthsShort = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public isTechnologyFilterApplied: Boolean = false;
  @ViewChild('yearFilter') yearEl: ElementRef;
  @ViewChild('monthFilter') monthEl: ElementRef;
  @ViewChild('timeChange') timeChangeEl: ElementRef;
  @ViewChild('monthFilterDiv') monthFilterDivEl: ElementRef;
  constructor(private appService: AppService, private dataService: FilterDataService) { }
  ngOnInit() {

  }
  @Output() timeFilterEvent = new EventEmitter();
  applyTimeFilter(timeFilter) {
    this.dataService.appliedTimeFilter = this.timeFilter;
    this.timeFilterForAPI.filterBy = "ENV";
    this.appService.getDeploymentsTrendByEnvType(this.timeFilterForAPI).subscribe(deployments => {
      this.dataService.filterServiceENVTimeFilterEvent.next(deployments);
    });
    this.timeFilterForAPI.filterBy = "STATUS";
    this.appService.getDeploymentsTrendByEnvType(this.timeFilterForAPI).subscribe(deployments => {
      this.dataService.filterServiceStatusTimeFilterEvent.next(deployments);
    });
    this.timeFilterEvent.emit(timeFilter);
  }

  onYearChange(event) {
    this.timeFilter.selectedYear = this.yearEl.nativeElement.value;
    this.timeFilterForAPI.filterYear = this.yearEl.nativeElement.value;
    this.applyTimeFilter(this.timeFilter);
  }

  onMonthChange(event) {
    this.timeFilter.selectedMonth = this.monthEl.nativeElement.value;
    this.timeFilterForAPI.filterMonth = this.monthEl.nativeElement.selectedIndex;
    this.applyTimeFilter(this.timeFilter);
  }

  onTimeChange(event) {
    if (this.timeChangeEl.nativeElement.selectedIndex == 2) {
      this.changeTypeQuarterly = false;
      //this.changeTypeMonthly = false;
      document.getElementById('monthFilterDiv').hidden = true;
    } else if (this.timeChangeEl.nativeElement.selectedIndex == 1) {
      this.changeTypeQuarterly = true;
      //this.changeTypeMonthly = false;
      document.getElementById('monthFilterDiv').hidden = true;
    } else {
      this.changeTypeQuarterly = false;
      //this.changeTypeMonthly = true;
      document.getElementById('monthFilterDiv').hidden = false;
    }
  }
}