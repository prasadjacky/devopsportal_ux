import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
  moduleId: module.id,
  selector: 'chart13',
  templateUrl: './chart13.component.html',
})

export class Chart13Component implements OnInit {
  public Chart13Data: any[] = [{ data: [3, 5, 6, 5] }];
  public Chart13Labels: string[] = ["W1","W2","W3","W4"];
  public Chart13Options: any = {
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
      text: 'Story Point/Developer',
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
          suggestedMax: 10,
          beginAtZero: true
        }
      }]
    }
  };
  public Chart13Colors: Array<any> = [{
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
  public Chart13Legend: boolean = false;
  public Chart13Type: string = 'bar';


  constructor(private appService: AppService) { }

  ngOnInit() {

  }
}