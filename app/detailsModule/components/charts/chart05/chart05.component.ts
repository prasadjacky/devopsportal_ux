import { Component } from '@angular/core';
import { AppService } from '../../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart05',
  templateUrl: 'chart05.component.html'

})

export class Chart05Component {
  public deployment: any;
  public chartLabel: any[] = [];
  public chartData: any[] = [];
  public key: any;
  constructor(private appService: AppService) {
    this.appService.getDeployments().subscribe(deployment => {
      this.deployment = deployment;
      for (var i = 0; i < this.deployment.projectDeploymentStats.length; i++) {
        this.chartLabel.push(this.deployment.projectDeploymentStats[i].environment_name)
        this.chartData.push(this.deployment.projectDeploymentStats[i].count)
        this.chart05Data = this.chartData;
        this.chart05Labels = this.chartLabel;
      }

    })
    if (sessionStorage.getItem("is_reloaded"))
      this.key = this.appService.getNavChangeEmitter1()
    this.appService.getDeployment(this.key).subscribe(deployment => {
      this.deployment = deployment;
      for (var i = 0; i < this.deployment.projectDeploymentStats.length - 2; i++) {
        this.chartLabel.push(this.deployment.projectDeploymentStats[i].environment_name)
        this.chartData.push(this.deployment.projectDeploymentStats[i].count)
        this.chart05Data = this.chartData;
        this.chart05Labels = this.chartLabel;

        sessionStorage.setItem("is_reloaded", true);
      }
    })
  }


  public chart05Labels: any[] = this.chartLabel;
  public chart05Data: number[] = [];
  public chart05Type: string = 'doughnut';
  public chart05Options: any = {
    plugins: {
      datalabels: {
        // backgroundColor: function(context) {
        //   return context.dataset.backgroundColor;
        // },
        borderColor: 'white',
        // borderRadius: 25,
        // borderWidth: 2,
        color: 'white',
        formatter: Math.round,
        font:{
          size: 14
        },
        //anchor: 'end',
        display: function (context) {
          var dataset = context.dataset;
          var count = dataset.data.length;
          var value = dataset.data[context.dataIndex];
          return value>0;
        },
      }
    },
    legend: {
      position: 'bottom',
      labels: {
        fontFamily: '"Comfortaa",sans-serif',
        boxWidth: 5,
        fontStyle: 'normal'
      }
    },
    maintainAspectRatio: false,
    title: {
      fontSize: 14,
      display: true,
      text: 'Deployment per Environment',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'bold',
    }
  };
  public chart05Colors: Array<any> = [{ backgroundColor: ['#2980b9', '#f1c40f', '#27ae60', '#e67e22', '#e74c3c'] }];

}