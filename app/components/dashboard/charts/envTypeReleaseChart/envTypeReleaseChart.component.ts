import { AppService } from './../../../../services/app.service';
import { FilterDataService } from './../../../../services/filterdata.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'envTypeReleaseChart',
  templateUrl: 'envTypeReleaseChart.component.html',
  styleUrls: ['./envTypeReleaseChart.component.css']
})

export class EnvTypeReleaseChartComponent implements OnInit {
  ngOnInit(): void {

  }
  public appReleaseCount: number = 0;
  public deployment: any;
  public chartLabel: string[] = [];
  public chartData: number[] = [];
  public key: any;
  public chart05Labels: string[] = ['Development', 'UAT', 'Production'];;
  public chart05Data: number[] = [0, 0, 0];
  public chart05Type: string = 'doughnut';
  public chart05Options: any = {
    plugins: {
      datalabels: {
        // backgroundColor: function (context) {
        //   return context.dataset.backgroundColor;
        // },
        borderColor: 'white',
        // borderRadius: 25,
        // borderWidth: 2,
        color: 'white',
        display: function (context) {
          var dataset = context.dataset;
          var count = dataset.data.length;
          var value = dataset.data[context.dataIndex];
          return value>0;
        },
        formatter: Math.round,
        font: {
          size: 16
        },
        anchor: 'center'
      },
      afterDraw: function (chart) {
        console.log(chart);
        if (chart.data.datasets.length === 0) {
          // No data is present
          var ctx = chart.chart.ctx;
          var width = chart.chart.width;
          var height = chart.chart.height
          chart.clear();

          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = "16px normal 'Helvetica Nueue'";
          ctx.fillText('No data to display', width / 2, height / 2);
          ctx.restore();
        }
      }
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontFamily: '"Comfortaa",sans-serif',
        boxWidth: 8,
        fontStyle: 'normal',
        fontSize: 14
      }
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
        barThickness: 20,
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
    // title: {
    //   fontSize: 14,
    //   display: true,
    //   text: 'Deployment per Environment',
    //   fontFamily: '"Comfortaa",sans-serif',
    //   fontStyle: 'bold',
    // }
  };
  public chart05Colors: Array<any> = [{ backgroundColor: ['#2980b9', '#f1c40f', '#27ae60', '#e67e22', '#e74c3c'] }];

  constructor(private appService: AppService, private filterDataService: FilterDataService) {
    let currentDate = new Date();
    let filterProps = {
      "filterBy": "ENV",
      "filterMonth": currentDate.getMonth(),
      "filterYear": currentDate.getFullYear().toString()
    }
    this.appService.getDeploymentsTrendByEnvType(filterProps).subscribe(deployment => {
      this.deployment = deployment;
      this.appReleaseCount = 0;
      this.chartLabel = [];
      this.chart05Labels = [];
      this.chart05Data = [];
      this.chartData = [];
      for (var i = 0; i < this.deployment.projectDeploymentTrend.length; i++) {
        this.chartLabel.push(this.deployment.projectDeploymentTrend[i].environment_type);
        this.chartData.push(this.deployment.projectDeploymentTrend[i].count);
        this.appReleaseCount += this.deployment.projectDeploymentTrend[i].count;
      }
      this.chart05Data = this.chartData;
      this.chart05Labels = this.chartLabel;
      this.filterDataService.appReleaseCount = this.appReleaseCount;
      this.filterDataService.appReleaseCountUpdateEvent.next(this.appReleaseCount);
    });

    this.filterDataService.filterServiceENVTimeFilterEvent.subscribe(deployment => {
      this.deployment = deployment;
      this.appReleaseCount = 0;
      this.chartLabel = [];
      this.chart05Labels = [];
      this.chartData = [];
      this.chart05Data = [];
      for (var i = 0; i < this.deployment.projectDeploymentTrend.length; i++) {
        this.chartLabel.push(this.deployment.projectDeploymentTrend[i].environment_type);
        this.chartData.push(this.deployment.projectDeploymentTrend[i].count);
        this.appReleaseCount += this.deployment.projectDeploymentTrend[i].count;
      }
      this.chart05Data = this.chartData;
      this.chart05Labels = this.chartLabel;
      this.filterDataService.appReleaseCount = this.appReleaseCount;
      this.filterDataService.appReleaseCountUpdateEvent.next(this.appReleaseCount);
    });
  }

}