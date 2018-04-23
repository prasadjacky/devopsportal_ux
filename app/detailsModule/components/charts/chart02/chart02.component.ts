import { DetailsService } from '../../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart02',
  templateUrl: 'chart02.component.html'

})

export class Chart02Component implements OnInit {

  public builds: any = {};
  public key:any;

  constructor(private detailsService: DetailsService, private appService: AppService) { }

  public chart02Labels: string[] = ['Success', 'Failure', 'Aborted', 'Unstable'];
  public chart02Data: number[]=[0,0,0,0];
  public chart02Type: string = 'doughnut';
  public chart02Options: any = {
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
      position: 'bottom',
      labels: {
        fontFamily: '"Comfortaa",sans-serif',
        fontStyle: 'normal',
        boxWidth: 5
      }
    },
    maintainAspectRatio: false,
    title: {
      fontSize: 14,
      display: true,
      text: 'Total Builds',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'bold'
    }
  };
  public chart02Colors: Array<any> = [{ backgroundColor: ['#4CAF50', '#e74c3c', '#a9a5a5', '#f1c40f'] }];

  ngOnInit() {
   this.appService.getBuildsData().subscribe(builds => {
			this.builds = builds;
      this.chart02Data = [this.builds.projectBuildStatus.success,
      this.builds.projectBuildStatus.failure,
      this.builds.projectBuildStatus.aborted,
      this.builds.projectBuildStatus.unstable];
          });

          
		    if (sessionStorage.getItem("is_reloaded")) 
      this.key=this.appService.getNavChangeEmitter1()
      this.appService.getBuildsDatas(this.key).subscribe(builds => {
			this.builds = builds;
      this.chart02Data = [this.builds.projectBuildStatus.success,
      this.builds.projectBuildStatus.failure,
      this.builds.projectBuildStatus.aborted,
      this.builds.projectBuildStatus.unstable];
		});
      sessionStorage.setItem("is_reloaded", true);

    // this.detailsService.fetchData('/api/presentation/project_builds', `${this.appService.selectedProject.project_key}`).subscribe(res => {
    //   var res_body = JSON.parse(res['_body']).projectBuildStatus;
    //   this.chart02Data = [
    //     res_body.success,
    //     res_body.failure,
    //     res_body.aborted,
    //     res_body.unstable
    //   ];
		// },
		// err => {
		// 	console.log(err);
    // })

  }

}