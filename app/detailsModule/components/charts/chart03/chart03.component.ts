import { DetailsService } from '../../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';



@Component({
  moduleId: module.id,
  selector: 'chart03',
  templateUrl: 'chart03.component.html'
})

export class Chart03Component implements OnInit {
public builds:any;
  public data: any[] = [];
  public data1: any[] = [];
  public data2: any[] = [];

  constructor(private detailsService: DetailsService, private appService: AppService) { }

  public chart03Labels: string[] = ['Week1', 'Week2', 'Week3', 'Week4'];
  public chart03Type: string = 'bar';
  public chart03Legend: boolean = true;
  public chart03Options: any = {
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
      },
      position: 'bottom'
    },
    title: {
      fontSize: 14,
      display: true,
      text: 'Builds Trend',
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
  public chart03Data: any[] = [
    { data: [] },
    { data: [] }
  ];

  public chart03Colors: Array<any> = [
    { backgroundColor: ['#c0392b', '#c0392b', '#c0392b', '#c0392b', '#c0392b'], label: 'Failure' },
    { backgroundColor: ['#27ae60', '#27ae60', '#27ae60', '#27ae60', '#27ae60'], label: 'Success' }
  ];

public key;
  ngOnInit() {
    this.appService.getBuildsData().subscribe(builds=>{
      this.builds = builds;

      this.data[0] = [
            this.builds.projectBuildTrend[0]["failedBuilds"],
            this.builds.projectBuildTrend[1]["failedBuilds"],
            this.builds.projectBuildTrend[2]["failedBuilds"],
            this.builds.projectBuildTrend[3]["failedBuilds"]
      ];

      this.data[1] = [
            this.builds.projectBuildTrend[0]["successfulBuilds"],
            this.builds.projectBuildTrend[1]["successfulBuilds"],
            this.builds.projectBuildTrend[2]["successfulBuilds"],
            this.builds.projectBuildTrend[3]["successfulBuilds"]
      ];

      this.chart03Data=[{"data":this.data[0],"label":"Failure"},
                      {"data":this.data[1],"label":"Success"}];
    });

    		    if (sessionStorage.getItem("is_reloaded")) 
      this.key=this.appService.getNavChangeEmitter1()
      this.appService.getBuildsDatas(this.key).subscribe(builds => {
			this.builds = builds;
        this.data[0] = [
            this.builds.projectBuildTrend[0]["failedBuilds"],
            this.builds.projectBuildTrend[1]["failedBuilds"],
            this.builds.projectBuildTrend[2]["failedBuilds"],
            this.builds.projectBuildTrend[3]["failedBuilds"]
      ];

      this.data[1] = [
            this.builds.projectBuildTrend[0]["successfulBuilds"],
            this.builds.projectBuildTrend[1]["successfulBuilds"],
            this.builds.projectBuildTrend[2]["successfulBuilds"],
            this.builds.projectBuildTrend[3]["successfulBuilds"]
      ];

      this.chart03Data=[{"data":this.data[0],"label":"Failure"},
                      {"data":this.data[1],"label":"Success"}];
    });


      sessionStorage.setItem("is_reloaded", true);
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