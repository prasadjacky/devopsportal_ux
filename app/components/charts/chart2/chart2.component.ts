import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  moduleId: module.id,
  selector: 'chart2',
  templateUrl: './chart2.component.html',
})

export class Chart2Component implements OnInit {
  public chartsOBJ: any;
  public Chart2Data: any[] = [{
    data: [],
    label: 'Bug Ratio',
    yAxisID: 'y-axis-1'
  }];
  public Chart2Labels: string[] = ["W1", "W2", "W3", "W4"];
  public Chart2Options: any = {
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
      text: 'Bug Ratio',
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
          labelString: "Bug Ratio"
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
  public Chart2Colors: Array<any> = [{
    backgroundColor: "#2980b9",
  }, {
    fill: false,
    lineTension: 0,
    backgroundColor: "#2980b9",
    borderColor: "#2980b9",
    borderWidth: 5,
    borderCapStyle: 'butt',
    pointRadius: 5,
    pointBorderColor: "#47d1d1",
    pointBackgroundWidth: 3,
    pointBackgroundColor: "#2980b9",
    pointBorderWidth: 2,
    pointHoverRadius: 10,
    pointHoverBackgroundColor: "#2980b9",
    pointHoverBorderColor: "#47d1d1",
    pointHoverBorderWidth: 2,
    pointHitRadius: 10,
  }];
  public Chart2Legend: boolean = false;
  public Chart2Type: string = 'bar';


  constructor(private appService: AppService) { }
  public key;
  ngOnInit() {
    // this.appService.getChart2().subscribe(data => {
    //   this.Chart2Data= data["0"][" data"]
    // });
    this.appService.getNavChangeEmitter().subscribe(item => {
    this.key = item;
      this.appService.getBugRatio(this.key).subscribe(data => {
        this.chartsOBJ = data
        this.Chart2Data = Object.values(this.chartsOBJ)
      })
    })
  }

}