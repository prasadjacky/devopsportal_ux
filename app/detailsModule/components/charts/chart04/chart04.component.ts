import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'chart04',
	templateUrl: 'chart04.component.html'
  
})

export class Chart04Component{

public chart04Labels:string[] = ['Bugs', 'Vulnerabilities', 'Code Smells'];
public chart04Data:number[] = [35,60,25];
public chart04Type:string = 'bar';
public chart04Options:any = {

   
    legend: {
      position: 'bottom',
      labels:{
        boxWidth:5
      },
      fullWidth: true,
      display: false
    },
    
    maintainAspectRatio: false,
   
    title:{
      display: false,
        fontFamily: '"Comfortaa",sans-serif',
        fontStyle:'bold',
    },
    
    scales: {
      xAxes: [{
                  barThickness : 20,
                  gridLines: {
                      display:false
                  },
                  display:false
                  
              }],
      yAxes: [{
                  gridLines: {
                      display:false
                  },
                  display:true,
                  ticks: {
                      beginAtZero: true
                  }   
              }]
      },

     tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
                return  tooltipItem.xLabel +':'+ tooltipItem.yLabel;;
        },
        title: function(tooltipItem, data) {
           return '';
        }
      }
    }
      

};
public chart04Colors:Array<any> = [{backgroundColor:['#f93636','#e8c904','#09bbf7']}];
}