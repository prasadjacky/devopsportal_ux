import { DetailsService } from '../../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';



@Component({
  moduleId: module.id,
  selector: 'chart08',
  templateUrl: 'chart08.component.html'
})

export class Chart08Component implements OnInit {
  public deployments: any;
  public data: any[] = [];
  public data1: any[] = [];
  public data2: any[] = [];
  public data3: any[] = [];

  constructor(private detailsService: DetailsService, private appService: AppService) { }

  public chart08Labels: string[] = ['Week1', 'Week2', 'Week3', 'Week4'];
  public chart08Type: string = 'bar';
  public chart08Legend: boolean = true;
  public chart08Options: any = {
    plugins: {
      datalabels: {
        color: 'white',        
        display: function (context) {
          var dataset = context.dataset;
          var count = dataset.data.length;
          var value = dataset.data[context.dataIndex];
          return value>0;
        }
      }
    },
    legend: {
      labels: {
        fontFamily: '"Comfortaa",sans-serif',
        fontStyle: 'normal',
        fontSize: 10,
        boxWidth: 10,
        display: function (context) {
          var dataset = context.dataset;
          var count = dataset.data.length;
          var value = dataset.data[context.dataIndex];
          return value>0;
        }
      },
      position: 'bottom'
    },
    title: {
      fontSize: 14,
      display: true,
      text: 'Deployments Trend',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'bold',
    },
    scales: {
      xAxes: [{
        barThickness: 20,
        stacked: true,
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          display: false
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  };
  public chart08Data: any[] = [
    { data: [] },
    { data: [] },
    { data: [] }
  ];
  public chart08Colors: Array<any> = [
    { backgroundColor: ['#2980b9', '#2980b9', '#2980b9', '#2980b9', '#2980b9'], label: 'Development' },
    { backgroundColor: ['#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f'], label: 'UAT' },
    { backgroundColor: ['#27ae60', '#27ae60', '#27ae60', '#27ae60', '#27ae60'], label: 'Production' }
  ];

  public key;
  ngOnInit() {
    this.appService.getDeploymentsTrend().subscribe(deployments => {
      this.deployments = deployments;

      this.data[0] = [
        this.deployments.projectDeploymentTrend[0]["development"],
        this.deployments.projectDeploymentTrend[1]["development"],
        this.deployments.projectDeploymentTrend[2]["development"],
        this.deployments.projectDeploymentTrend[3]["development"]
      ];

      this.data[1] = [
        this.deployments.projectDeploymentTrend[0]["uat"],
        this.deployments.projectDeploymentTrend[1]["uat"],
        this.deployments.projectDeploymentTrend[2]["uat"],
        this.deployments.projectDeploymentTrend[3]["uat"]
      ];

      this.data[2] = [
        this.deployments.projectDeploymentTrend[0]["production"],
        this.deployments.projectDeploymentTrend[1]["production"],
        this.deployments.projectDeploymentTrend[2]["production"],
        this.deployments.projectDeploymentTrend[3]["production"]
      ];

      this.chart08Data = [{ "data": this.data[0], "label": "Development" },
      { "data": this.data[1], "label": "UAT" },
      { "data": this.data[2], "label": "Production" }];
    });

    if (sessionStorage.getItem("is_reloaded"))
      this.key = this.appService.getNavChangeEmitter1()
    // this.appService.getDeploymentsTrend(this.key).subscribe(deployments => {
    //   this.deployments = deployments;

    //   this.data[0] = [
    //     this.deployments.projectDeploymentTrend[0]["successfulBuilds"],
    //     this.deployments.projectDeploymentTrend[1]["successfulBuilds"],
    //     this.deployments.projectDeploymentTrend[2]["successfulBuilds"],
    //     this.deployments.projectDeploymentTrend[3]["successfulBuilds"]
    //   ];

    //   this.data[1] = [
    //     this.deployments.projectDeploymentTrend[0]["failedBuilds"],
    //     this.deployments.projectDeploymentTrend[1]["failedBuilds"],
    //     this.deployments.projectDeploymentTrend[2]["failedBuilds"],
    //     this.deployments.projectDeploymentTrend[3]["failedBuilds"]
    //   ];

    //   this.data[2] = [
    //     this.deployments.projectDeploymentTrend[0]["failedBuilds"],
    //     this.deployments.projectDeploymentTrend[1]["failedBuilds"],
    //     this.deployments.projectDeploymentTrend[2]["failedBuilds"],
    //     this.deployments.projectDeploymentTrend[3]["failedBuilds"]
    //   ];

    //   this.chart08Data = [{ "data": this.data[0], "label": "Development" },
    //   { "data": this.data[1], "label": "UAT" },
    //   { "data": this.data[2], "label": "Production" }];
    // });


    sessionStorage.setItem("is_reloaded", true);
    // this.detailsService.fetchData('/api/presentation/project_builds', `${this.appService.selectedProject.project_key}`).subscribe(res => {
    //   var res_body = JSON.parse(res['_body']).projectDeploymentTrend;
    //   this.data[0] = [
    //     res_body[0].failedBuilds, res_body[1].failedBuilds, res_body[1].failedBuilds, res_body[3].failedBuilds
    //   ];
    //   this.data[1] = [
    //     res_body[0].sucessfulBuilds, res_body[1].sucessfulBuilds, res_body[1].sucessfulBuilds, res_body[3].sucessfulBuilds
    //   ];
    // },
    // err => {
    // 	console.log(err);
    // })

  }

  updateChartData(deployments) {
    this.deployments = deployments;

    this.data[0] = [
      this.deployments.projectDeploymentTrend[0]["development"],
      this.deployments.projectDeploymentTrend[1]["development"],
      this.deployments.projectDeploymentTrend[2]["development"],
      this.deployments.projectDeploymentTrend[3]["development"]
    ];

    this.data[1] = [
      this.deployments.projectDeploymentTrend[0]["uat"],
      this.deployments.projectDeploymentTrend[1]["uat"],
      this.deployments.projectDeploymentTrend[2]["uat"],
      this.deployments.projectDeploymentTrend[3]["uat"]
    ];

    this.data[2] = [
      this.deployments.projectDeploymentTrend[0]["production"],
      this.deployments.projectDeploymentTrend[1]["production"],
      this.deployments.projectDeploymentTrend[2]["production"],
      this.deployments.projectDeploymentTrend[3]["production"]
    ];

    this.chart08Data = [{ "data": this.data[0], "label": "Development" },
    { "data": this.data[1], "label": "UAT" },
    { "data": this.data[2], "label": "Production" }];
  }

}