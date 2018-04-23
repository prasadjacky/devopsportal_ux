import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chart12',
  templateUrl: 'chart12.component.html',
  styleUrls: ['./chart12.component.css']
})

export class Chart12Component implements OnInit {



  constructor() { }

  public chart12Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  public chart12Type: string = 'line';
  public chart12Legend: boolean = false;
  public chart12Options: any = {
    plugins: {
      datalabels: {
        display: false
      }
    },
    tooltips: {
      bodySpacing: 0,
      xPadding: 0,
      yPadding: 0,
      bodyFontSize: 12,
      titleFontFamily: 10, titleMarginBottom: 0,
      footerMarginTop: 0
    },
    legend: {
      position: 'bottom'
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barThickness: 50,
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          beginAtZero: true,
          fontSize: 10
        }
      }],
      yAxes: [{
        display: false,
        position: "left",
        scaleLabel: {
          display: false,
        },
        gridLines: {
          display: false
        },
        ticks: {
          suggestedMin: 0,
          beginAtZero: true,
        }
      }
      ]
    }
  };
  public chart12Data: any[] = [{ data: [56, 42, 50, 35], label: 'hours' }];
  public chart12Colors: Array<any> = [
    {
      fill: true,
      lineTension: 0,
      backgroundColor: "#e53935",
      borderColor: "#db0202",
      borderWidth: 3,
      pointRadius: 5,
      pointStyle: 'circle',
      pointBackgroundColor: "#e53935",
      pointHitRadius: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#e53935"
    }
  ];

  ngOnInit() {
  }

}




// import { Component, OnInit } from '@angular/core';

// @Component({
//   moduleId: module.id,
//   selector: 'chart12',
//   templateUrl: 'chart12.component.html'
// })

// export class Chart12Component implements OnInit {



//   constructor() { }

//   public chart12Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
//   public chart12Type: string = 'bar';
//   public chart12Legend: boolean = false;
//   public chart12Options:any = {
//     layout: {
//             padding: {
//                 left: 25,
//                 right: 25,
//                 top: 10,
//                 bottom: 10
//             }
//         },
//     tooltips:{
//       bodySpacing:0,
//       xPadding:0, 
//       yPadding :0,     
//       bodyFontSize:10,
//       titleFontFamily:10,titleMarginBottom:0,
//       footerMarginTop:0
//     },
//   legend:{
//     position:'bottom'
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{
//       display:false,
//       barThickness: 25,
//       gridLines: {
//         display: false
//       },
//       ticks: {
//         suggestedMin: 0,
//         beginAtZero: true,
//         fontSize:10
//       }
//     }],
//     yAxes: [{
//        display:false,
//       position: "left",
//       scaleLabel: {
//         display: false,
//       },
//       gridLines: {
//         display: false
//       },
//       ticks: {
//         suggestedMin: 0,
//         beginAtZero: true,
//         fontSize:10
//       }   
//     }
//     ]
//   }
// };
//   public chart12Data: any[] = [{ data:[8,6,10,5],label:'hours',type:'bar'}];
// public chart12Colors:Array<any> = [{
//   backgroundColor: "#e53935"
//   }];

//   ngOnInit() {

//   }

// }