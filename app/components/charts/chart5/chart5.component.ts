import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'chart5',
  templateUrl: 'chart5.component.html'
  
})

export class Chart5Component{


public chart5Labels:string[] = ['Day1','Day2','Day3','Day4','Day5','Day6','Day7'];
public chart5Type:string = 'bar';
public chart5Legend:boolean = true;
public chart5Options:any = {
  legend:{
    position: 'bottom'
  },
  title:{
    fontSize: 16,
    display: true,
    text: 'RELEASE STABILITY',
      fontFamily: '"Comfortaa",sans-serif',
    fontStyle:'normal',
  },
  scales: {
    xAxes: [{
        stacked: true,
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true
        }
      }]
  },
  scaleShowVerticalLines: false,
  responsive: true
};  
public chart5Data:any[] = [
    {data:[10,22,30,40,28,25,39], label: 'Failure'},
    {data:[15,25,35,45,23,30,41], label: 'Success'}
];

public chart5Colors:Array<any> = [
{backgroundColor:['#2980b9','#f1c40f','#27ae60','#e67e22','#e74c3c']},
 {backgroundColor:['#2980b9','#f1c40f','#27ae60','#e67e22','#e74c3c']}
];


}