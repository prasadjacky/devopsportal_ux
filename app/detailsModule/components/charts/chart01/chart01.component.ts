import { Component } from '@angular/core';
import { AppService } from '../../../../services/app.service';


@Component({
	moduleId: module.id,
	selector: 'chart01',
	templateUrl: 'chart01.component.html'
})

export class Chart01Component{

public chart01Data:any[] = [
      {
        data: [0, 18, 0, 18, 0, 0, 0], 
        label: 'Remaining Effort',
        type: 'line'
      },
      {
        data: [49,null,null,null,null,null,0], 
        label: 'Ideal Burndown',
        type: 'line'
      }
];
public chart01Labels:string[] = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];
public chart01Options:any = {
  title:{
    fontSize: 16,
    display: true,
    text: 'Sprint Burndown',
     fontFamily: '"Comfortaa",sans-serif',
    fontStyle:'normal',
    fontWeight: 600
  },
  legend:{
    position:'bottom'
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
      ticks: {
        suggestedMin: 0,
        beginAtZero: true
      }
    }],
    yAxes: [{
      position: "left",
      scaleLabel: {
        display: true,
        labelString: "Remaining Efforts(hrs)"
      },
      gridLines: {
        display: true
      },
      ticks: {
        suggestedMin: 0,
        beginAtZero: true
      }   
    }
    ]
  }
};
public chart01Colors:Array<any> = [{
  fill: false,
  lineTension: 0,
  backgroundColor: "#000099",
  borderColor: "#066384",
  borderWidth: 3,
  pointRadius: 5,
  pointStyle: 'rectRot',
  pointBackgroundColor: "#000099",
  pointHitRadius: 5,
  pointHoverRadius: 7,
  pointHoverBackgroundColor: "#000099"
  },{
  spanGaps: true,
  fill: false,
  lineTension: 0,
  backgroundColor: "#000099",
  borderColor: "#7ebc4b",
  borderWidth: 3,
  pointBackgroundColor: "#000099",
  pointHitRadius: 3,
  pointHoverRadius: 3,
  pointHoverBackgroundColor: "#000099"
  },{
  fill: false,
  lineTension: 0,
  backgroundColor: "#000099",
  borderColor: "#8ddcf4",
  borderWidth: 3,
  borderCapStyle: 'round',
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
  },{
  backgroundColor: "#c65353",
}];
public chart01Legend:boolean = false;
public chart01Type:string = 'line';
}