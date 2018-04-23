import { DetailsService } from '../../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';



@Component({
  moduleId: module.id,
  selector: 'chart07',
  templateUrl: 'chart07.component.html'
})

export class Chart07Component implements OnInit {

  public data: any[] = [];
  public data1: any[] = [];
  public data2: any[] = [];

  constructor(private detailsService: DetailsService, private appService: AppService) { }

  public chart07Labels: string[] = ['Week1', 'Week2', 'Week3', 'Week4'];
  public chart07Type: string = 'bar';
  public chart07Legend: boolean = true;
  public chart07Options: any = {
    legend: {
      labels: {
        fontFamily: '"Comfortaa",sans-serif',
        fontStyle: 'normal',
      },
      position: 'bottom'
    },
    title: {
      fontSize: 14,
      display: true,
      text: 'Incidents Trend',
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
  public chart07Data: any[] = [
    { data: [] },
    { data: [] },
    { data: [] }
  ];

  public chart07Colors: Array<any> = [
    { backgroundColor: ['#e74c3c', '#e74c3c', '#e74c3c', '#e74c3c', '#e74c3c'], label: 'High' },
    { backgroundColor: ['#e67e22', '#e67e22', '#e67e22', '#e67e22', '#e67e22'], label: 'Medium' },
    { backgroundColor: ['#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f', '#f1c40f'], label: 'Low' }
  ];


  ngOnInit() {
    this.appService.getBuildsData().subscribe(data=>{
      this.data = data;

      this.data[0] = [
            this.data[1]["projectBuildTrend"][0]["failedBuilds"],
            this.data[1]["projectBuildTrend"][1]["failedBuilds"],
            this.data[1]["projectBuildTrend"][2]["failedBuilds"],
            this.data[1]["projectBuildTrend"][3]["failedBuilds"]
      ];

      this.data[1] = [
            this.data[1]["projectBuildTrend"][0]["successfulBuilds"],
            this.data[1]["projectBuildTrend"][1]["successfulBuilds"],
            this.data[1]["projectBuildTrend"][2]["successfulBuilds"],
            this.data[1]["projectBuildTrend"][3]["successfulBuilds"]
      ];

      this.chart07Data=[{"data":data[0],"label":"High"},
                      {"data":data[1],"label":"Medium"},
                     {"data":data[0],"label":"Low"} ];
    });
    // this.detailsService.fetchData('/api/presentation/project_builds', `${this.appService.selectedProject.project_key}`).subscribe(res => {
    //   var res_body = JSON.parse(res['_body']).projectBuildTrend;
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

}