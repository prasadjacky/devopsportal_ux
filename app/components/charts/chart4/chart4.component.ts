import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart4',
  templateUrl: './chart4.component.html',
})

export class Chart4Component implements OnInit {
  public chartsOBJ: any;
  public Chart4Data: any[] = [{
    data: [],
    label: 'Code Coverage',
    yAxisID: 'y-axis-1'
  }];
  public Chart4Labels: string[] = ["Q1", "Q2", "Q3", "Q4"];
  public Chart4Options: any = {
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
  public Chart4Colors: Array<any> = [{
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
  public Chart4Legend: boolean = false;
  public Chart4Type: string = 'bar';


  constructor(private appService: AppService) { }
  public key;

  ngOnInit() {
    // this.appService.getChart4().subscribe(data => {
    //   this.Chart4Data= data["0"][" data"]
    // });
    // if(this.appService.setTrue==true){
    //   alert("now")
    this.appService.getNavChangeEmitter().subscribe(item => {
    this.key = item;
      window.sessionStorage.setItem("key", this.key)
    })
    this.appService.getQuarterly(window.sessionStorage.getItem("key")).subscribe(data => {
      this.chartsOBJ = data
      this.Chart4Data = Object.values(this.chartsOBJ)
    })
    // }else{
    //   this.Chart4Data=[0,0,0,0]
    //   console.log(this.Chart4Data)
    // }
  }
}