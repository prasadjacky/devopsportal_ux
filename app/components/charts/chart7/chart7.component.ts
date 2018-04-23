import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart7',
  templateUrl: './chart7.component.html',
})

export class Chart7Component implements OnInit {
  public Chart7Data: any[] = [{
    data: [],
    label: 'Code Coverage',
    yAxisID: 'y-axis-1'
  }];
  public Chart7Labels: string[] = ["W1", "W2", "W3", "W4", "W5", "W6"];
  public Chart7Options: any = {
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
      text: 'Code Coverage',
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
  public Chart7Colors: Array<any> = [{
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
  public Chart7Legend: boolean = false;
  public Chart7Type: string = 'bar';


  constructor(private appService: AppService) { }

  // ngOnInit() {
  //   this.appService.getChart4().subscribe(data => {
  //     this.Chart7Data= data["0"][" data"]
  //   });

  // }
  public key;
  public chartsOBJ;
  public week;
  ngOnInit() {
    this.appService.getNavChangeEmitter().subscribe(item => {
    this.key = item;
      window.sessionStorage.setItem("key", this.key)
    })
    this.appService.getWeekly(window.sessionStorage.getItem("key")).subscribe(data => {
      this.chartsOBJ = data
      this.Chart7Data = Object.values(this.chartsOBJ)
    })
  }

}