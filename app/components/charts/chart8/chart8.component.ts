import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart8',
  templateUrl: './chart8.component.html',
})

export class Chart8Component implements OnInit {
  public Chart8Data: any[] = [{
    data: [],
    label: 'Code Coverage',
    yAxisID: 'y-axis-1'
  }];
  public Chart8Labels: string[] = ["W1", "W2", "W3", "W4"];
  public Chart8Options: any = {
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
        barThickness: 15,
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
  public Chart8Colors: Array<any> = [{
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
  public Chart8Legend: boolean = false;
  public Chart8Type: string = 'bar';


  constructor(private appService: AppService) { }

  // ngOnInit() {
  //   this.appService.getChart4().subscribe(data => {
  //     this.Chart6Data= data["0"][" data"]
  //   });

  // }
  public key;
  public chartsOBJ;
  public week;
  ngOnInit() {

    this.appService.getNavChangeEmitter().subscribe(item => {
    this.key = item;
      // this.Chart8Labels=["Q1", "Q2", "Q3", "Q4"];
      this.appService.getCodeCoverage(this.key).subscribe(data => {
        const values = Object.keys(data).map(key=>data[key]);
        this.Chart8Data = values;
      })
    })
  }
}