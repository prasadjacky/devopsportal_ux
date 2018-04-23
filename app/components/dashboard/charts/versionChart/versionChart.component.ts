import { FilterDataService } from './../../../../services/filterdata.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'versionChart',
  templateUrl: 'versionChart.component.html',
  styleUrls: ['./versionChart.component.css']
})

export class VersionChartComponent implements OnInit {

  public versionChartLabels: string[] = ['Stable', 'Warning', 'At Risk'];
  public versionChartType: string = 'horizontalBar';
  public versionChartLegend: boolean = false;
  public versionChartOptions: any = {
    plugins: {
      datalabels: {
        color: 'white',
        display: function (context) {
          var dataset = context.dataset;
          var count = dataset.data.length;
          var value = dataset.data[context.dataIndex];
          return value > 0;
        },
        // formatter: function (value, context) {
        //   // var dataset = context.dataset;
        //   // var count = dataset.data.length;
        //   // var value = dataset.data[context.dataIndex];
        //   var label = context.dataset.label;
        //   //return label + ' : ' + value;
        //   //return context.dataIndex + ': ' + Math.round(value * 100) + '%';
        //   //console.log(context)
        //   return value;
        // },
        font: {
          size: 16
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 0
      }
    },
    tooltips: {
      //enabled: false,
      bodySpacing: 0,
      xPadding: 0,
      yPadding: 0,
      bodyFontSize: 12,
      //titleFontFamily: 10,
      titleMarginBottom: 0,
      footerMarginTop: 0
    },
    legend: {
      position: 'bottom'
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        stacked: true,
        display: false,
        barThickness: 10,
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
  public barChartOptions: any = {
    plugins: {
      datalabels: {
        color: 'white',
        display: function (context) {
          var dataset = context.dataset;
          var count = dataset.data.length;
          var value = dataset.data[context.dataIndex];
          return value > 0;
        },
      }
    },
    tooltips: {
      multiTooltipTemplate: "<%= value %>",
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        bottom: 0
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

  // public barChartData: {
  //   labels: ["2014"],

  //   datasets: [{
  //     data: [727],
  //     backgroundColor: "rgba(63,103,126,1)",
  //     hoverBackgroundColor: "rgba(50,90,100,1)"
  //   },
  //     {
  //       data: [72],
  //       backgroundColor: "rgba(63,103,126,1)",
  //       hoverBackgroundColor: "rgba(50,90,100,1)"
  //     },
  //     {
  //       data: [7],
  //       backgroundColor: "rgba(63,103,126,1)",
  //       hoverBackgroundColor: "rgba(50,90,100,1)"
  //     }]
  // }

  public filterchart1Colors: Array<any> = [
    { backgroundColor: ['#5CB85C'] }, //5CB85C 79C447
    { backgroundColor: ['#F0AD4E'] }, //F0AD4E FABB3D
    { backgroundColor: ['#D9534F'] }, //D9534F FF5454 
  ];
  constructor(private filterDataService: FilterDataService) {
    // this.filterDataService.filterServiceProjectsFilterEvent.subscribe((res) => {
    //   this.barChartData = [];
    //   this.barChartData.push({ data: [this.filterDataService.stableProjectCount], label: 'Stable' });
    //   this.barChartData.push({ data: [this.filterDataService.warningProjectCount], label: 'Warning' });
    //   this.barChartData.push({ data: [this.filterDataService.atRiskProjectCount], label: 'At risk' });
    //   console.log(this.versionChartData);
    // });
  }



  ngOnInit() {

  }
  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }
}