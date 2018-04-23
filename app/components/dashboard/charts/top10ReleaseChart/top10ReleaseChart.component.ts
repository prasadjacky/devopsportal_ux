import { FilterDataService } from './../../../../services/filterdata.service';

import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
  moduleId: module.id,
  selector: 'top10ReleaseChart',
  templateUrl: 'top10ReleaseChart.component.html',
  styleUrls: ['./top10ReleaseChart.component.css']
})

export class Top10ReleaseChartComponent implements OnInit {

  public Chart8Data: any[] = [{
    data: [24,21,20,18,17,16,14,12,10,8],
    label: 'Releases',
    yAxisID: 'y-axis-1'
  }];
  public Chart8Labels: string[] = ["PQR_App", "DemoApp", "App_Test", "App_Test1","DemoTest","ECOM_App","App_ABC","ASR_App","ES_App","PNR_App"];
  public Chart8Options: any = {
    tooltips: {
      titleFontFamily : '"Comfortaa",sans-serif',
      titleFontStyle	: 'normal',
      titleFontSize : 30,
      bodyFontFamily : '"Comfortaa",sans-serif',
      bodyFontStyle	: 'normal',
      bodyFontSize : 26,
    },
    plugins: {
      datalabels: {
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderColor: 'white',
        color: 'white',
        borderRadius: 20,
        borderWidth: 2,
        formatter: Math.round,
        font: {
          size: 26,
          weight: 'bold'
        },
        anchor: 'end'
      }
    },
    responsive: false,
    maintainAspectRatio: true,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 5
      }
    },
    title: {
      fontSize: 16,
      display: false,
      text: 'Code Coverage',
      fontFamily: '"Comfortaa",sans-serif',
      fontStyle: 'normal'
    },
    scales: {
      xAxes: [{        
        barThickness: 30,
        gridLines: {
          display: false
        },
        ticks: {
          autoSkip: false,
          beginAtZero: true,
          fontFamily: '"Comfortaa",sans-serif',
          fontStyle: 'bold',
          fontSize: 18,
        }
      }],
      yAxes: [{
        display:false,
        position: "left",
        id: "y-axis-1",
        scaleLabel: {
          display: false,
          labelString: "Releases"
        },
        gridLines: {
          display: false
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
      // this.appService.getCodeCoverage('cbs').subscribe(data => {
      //   const values = Object.keys(data).map(key=>data[key]);
      //   this.Chart8Data = values;
      // })
  }

}