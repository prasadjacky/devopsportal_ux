import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'chart11',
  templateUrl: 'chart11.component.html',
  styleUrls: ['./chart11.component.css']
})

export class Chart11Component implements OnInit {


  constructor() { }

  public chart11Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  public chart11Type: string = 'line';
  public chart11Legend: boolean = false;
  public chart11Options: any = {
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
  public chart11Data: any[] = [{ data: [30, 42, 49, 62], label: 'Test coverage(in %)' }];
  public chart11Colors: Array<any> = [
    {
      fill: true,
      lineTension: 0,
      backgroundColor: "#00897b",
      borderColor: "#047c6c",
      borderWidth: 3,
      pointRadius: 5,
      pointStyle: 'star',
      pointBackgroundColor: "#047c6c",
      pointHitRadius: 5,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#047c6c"
    }
  ];

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   moduleId: module.id,
//   selector: 'chart11',
//   templateUrl: 'chart11.component.html'
// })

// export class Chart11Component implements OnInit {


//   constructor() { }

//   public chart11Labels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];
//   public chart11Type: string = 'bar';
//   public chart11Legend: boolean = false;
//   public chart11Options:any = {
//      layout: {
//             padding: {
//                 left: 25,
//                 right: 25,
//                 top: 10,
//                 bottom: 10
//             }
//         },
//           tooltips:{
//       bodySpacing:0,
//       xPadding:0, 
//       yPadding :0,     
//       bodyFontSize:10,
//       titleFontFamily:10,titleMarginBottom:0,
//       footerMarginTop:0
//     },
//    legend:{
//     position:'bottom'
//   },
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
// };
//   public chart11Data: any[] = [ { data:[10,20,35,40],label:'Test coverage(in %)'}];
// public chart11Colors:Array<any> = [
//    {
//   backgroundColor: "#00897b",

//   }
// ];

//   ngOnInit() {
//   }

// }



