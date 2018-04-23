import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart6',
  templateUrl: './chart6.component.html',
})

export class Chart6Component implements OnInit {
  public Chart6Data: any[] = [{
    data: [],
    label: 'Code Coverage',
    yAxisID: 'y-axis-1'
  }];
  public Chart6Labels: string[] = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"];
  public Chart6Options: any = {
    plugins: {
      datalabels: {
        display: false
      }
    },
    responsive: false,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 5
      }
    },
    title: {
      fontSize: 16,
      display: true,
      text: 'CODE COVERAGE',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'normal'
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        position: "left",
        id: "y-axis-1",
        scaleLabel: {
          display: false,
          labelString: "Code Coverage"
        },
        gridLines: {
          display: true
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 30,
          beginAtZero: true
        }
      }]
    }
  };
  public Chart6Colors: Array<any> = [{
    backgroundColor: "#2980b9",
  }, {
    fill: false,
    lineTension: 0,
    backgroundColor: "#000099",
    borderColor: "#000099",
    borderWidth: 5,
    borderCapStyle: 'butt',
    pointRadius: 5,
    pointBorderColor: "#47d1d1",
    pointBackgroundWidth: 3,
    pointBackgroundColor: "#000099",
    pointBorderWidth: 2,
    pointHoverRadius: 10,
    pointHoverBackgroundColor: "#000099",
    pointHoverBorderColor: "#47d1d1",
    pointHoverBorderWidth: 2,
    pointHitRadius: 10,
  }];
  public Chart6Legend: boolean = false;
  public Chart6Type: string = 'bar';


  constructor(private appService: AppService) { }

  // ngOnInit() {
  //   this.appService.getChart4().subscribe(data => {
  //     this.Chart6Data= data["0"][" data"]
  //   });

  // }
  public key;
  public chartsOBJ;
  ngOnInit() {
    this.appService.getNavChangeEmitter().subscribe(item => {
    this.key = item;
      window.sessionStorage.setItem("key", this.key)
    })
    this.appService.getMonthly(window.sessionStorage.getItem("key")).subscribe(data => {
      this.chartsOBJ = data
      this.Chart6Data = Object.values(this.chartsOBJ)
    })
  }
}