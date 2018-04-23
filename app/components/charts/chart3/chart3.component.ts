import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';



@Component({
  moduleId: module.id,
  selector: 'chart3',
  templateUrl: 'chart3.component.html',
  styleUrls: ['./chart3.component.css'],
})

export class Chart3Component {

  constructor(private appService: AppService) {

    // this.appService.getChart3().subscribe((data) => {
    //     this.chart3Data = data;
    //     console.log(this.chart3Data)
    // });


  }
  public velocity: any;
  public velocity1: any[] = [];
  public velocity2: any[] = [];
  public chart3Labels: string[] = ['Sprint1', 'Sprint2'];
  public chart3Type: string = 'bar';
  public chart3Legend: boolean = false;
  public chart3Options: any = {
    plugins: {
      datalabels: {
        display: false
      }
    },
    legend: {
      position: 'right'
    },
    title: {
      fontSize: 16,
      display: true,
      text: 'Velocity',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'normal'
    },
    scales: {
      xAxes: [{
        stacked: false,
        barThickness: 15,
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          beginAtZero: true
        }
      }],
      yAxes: [{
        stacked: false,
        gridLines: {
          display: true
        },
        ticks: {
          min: 0
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: false,
    maintainAspectRatio: false
  };
  public chart3Data: any[] = [
    { data: [] },
    { data: [] }
  ];
  public chart3data: any[];
  // public xyz:any[] = [
  //     {data:[]},
  //     {data:[]}
  //   ];

  public chart3Colors: Array<any> = [
    { backgroundColor: ['#27ae60', '#27ae60', '#27ae60', '#27ae60', '#27ae60'] },
    { backgroundColor: ['#2980b9', '#2980b9', '#2980b9', '#2980b9', '#2980b9'] }
  ];

  public key;

  ngOnInit() {
    this.appService.getNavChangeEmitter().subscribe(item => {
    this.key = item;
      this.appService.getChart3(this.key).subscribe((data) => {
        this.velocity = data;
        this.velocity1 = [];
        this.velocity2 = [];
        for (var i = 0; i < this.velocity.length; i++) {
          if (this.velocity[i].story_points != null || this.velocity[i].story_points != undefined) {
            this.velocity1.push(this.velocity[i].story_points.points_committed)
            this.velocity2.push(this.velocity[i].story_points.points_completed)
            this.chart3Data = [{ "data": this.velocity1, "label": "Commitment" },
            { "data": this.velocity2, "label": "Completed" }]
            //  this.chart3data=[
            //   {"data":[40,53,56,57], "label": "Commitment"},
            //   {"data":[37,47,56,47], "label": "Completed"}
            //       ]

            // console.log(this.chart3data)

          } else if (this.velocity[i].story_points == null || this.velocity[i].story_points == undefined) {
            this.velocity1.push(0)
            this.velocity2.push(0)
            this.chart3Data = [{ "data": this.velocity1, "label": "Commitment" },
            { "data": this.velocity2, "label": "Completed" }]
          }
        }
        // }
      });
    })
  }
}

