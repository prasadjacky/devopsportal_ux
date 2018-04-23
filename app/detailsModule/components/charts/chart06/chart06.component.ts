import { DetailsService } from '../../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart06',
  templateUrl: 'chart06.component.html'

})

export class Chart06Component implements OnInit {

  public data: any[] = [];

  constructor(private detailsService: DetailsService, private appService: AppService) { }

  public chart06Labels: string[] = ['High', 'Medium', 'Low'];
  public chart06Data: number[] = [16, 7, 1];
  public chart06Type: string = 'doughnut';
  public chart06Options: any = {
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
      text: 'Total Incidents',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'bold'
    }
  };
  public chart06Colors: Array<any> = [{ backgroundColor: [ '#e74c3c','#e67e22','#f1c40f' ] }];

  ngOnInit() {
    this.appService.getBuildsData().subscribe(data => {
      this.data = data;

      this.chart06Data = [this.data[0]["projectBuildStatus"]["success"],
      this.data[0]["projectBuildStatus"]["failure"],
      this.data[0]["projectBuildStatus"]["unstable"],];
      // this.data[0]["projectBuildStatus"]["aborted"],];

    });
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