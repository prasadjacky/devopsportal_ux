import { FilterDataService } from './../../../../services/filterdata.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'appReleaseChart',
  templateUrl: 'appReleaseChart.component.html'
})

export class AppReleaseChartComponent implements OnInit {

  public versionChartLabels: string[] = ['Health', 'Q2'];
  public versionChartType: string = 'horizontalBar';
  public versionChartLegend: boolean = false;
  public versionChartOptions: any = {
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 0
      }
    },
    tooltips: {
      bodySpacing: 0,
      xPadding: 0,
      yPadding: 0,
      bodyFontSize: 10,
      titleFontFamily: 10, titleMarginBottom: 0,
      footerMarginTop: 0
    },
    legend: {
      position: 'bottom'
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        stacked: true,
        display: false,
        barThickness: 15,
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          beginAtZero: true,
          fontSize: 10
        }
      }],
      yAxes: [{
        stacked: true,
        display: false,
        position: "left",
        scaleLabel: {
          display: false,
        },
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          beginAtZero: true,
          fontSize: 10
        }
      }
      ]
    }
  };
  public chartLabel: any[] = [];
  public chartData: any[] = [];
  @Input('versionChartData') public versionChartData: any[] = [{ data: [14], label: 'Stable' }, { data: [5], label: 'Warning' }, { data: [11], label: 'At risk' }];
  public versionChartColors: Array<any> = [
    {
      backgroundColor: "#27ae60",
    }, {
      backgroundColor: "#e67e22",
    },
    {
      backgroundColor: "#e74c3c",
    }
  ];

  constructor(private filterDataService: FilterDataService) {
    // this.filterDataService.filterServiceProjectsFilterEvent.subscribe((res) => {
    //   this.versionChartData = [];
    //   this.versionChartData.push({data:[this.filterDataService.stableProjectCount],label:'Stable'});
    //   this.versionChartData.push({data:[this.filterDataService.warningProjectCount],label:'Warning'});
    //   this.versionChartData.push({data:[this.filterDataService.atRiskProjectCount],label:'At risk'});
    //   console.log(this.versionChartData);
    // });
  }



  ngOnInit() {

  }

}