import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chart10',
  templateUrl: 'chart10.component.html',
  styleUrls: ['./chart10.component.css']
})

export class Chart10Component implements OnInit {



  constructor() { }

  public chart10Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  public chart10Type: string = 'line';
  public chart10Legend: boolean = false;
  public chart10Options: any = {
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
  public chart10Data: any[] = [{ data: [60, 50, 43, 27], label: 'Bugs (in %)' }];
  public chart10Colors: Array<any> = [
    {
      fill: true,
      lineTension: 0,
      backgroundColor: "#73159b",
      borderColor: "#4f0584",
      borderWidth: 3,
      pointRadius: 5,
      pointStyle: 'circle',
      pointBackgroundColor: "#e5cbf2",
      pointHitRadius: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#e5cbf2"
    }
  ];

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   moduleId: module.id,
//   selector: 'chart10',
//   templateUrl: 'chart10.component.html'
// })

// export class Chart10Component implements OnInit {



//   constructor() { }

//   public chart10Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
//   public chart10Type: string = 'bar';
//   public chart10Legend: boolean = false;
//   public chart10Options: any = {
//   legend:{
//     position:'bottom'
//   },
//     tooltips:{
//       bodySpacing:0,
//       xPadding:0, 
//       yPadding :0,     
//       bodyFontSize:10,
//       titleFontFamily:10,titleMarginBottom:0,
//       footerMarginTop:0
//     },
//  layout: {
//             padding: {
//                 left: 25,
//                 right: 25,
//                 top: 10,
//                 bottom: 10
//             }
//         },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     xAxes: [{
//        display:false,
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
//   };
//   public chart10Data: any[] = [{ data: [60, 44, 23, 10], label: 'Bugs (in %)' }];
//   public chart10Colors: Array<any> = [
//     {
//       backgroundColor: "#752d93",
//     }
//   ];

//   ngOnInit() {
//   }

// }