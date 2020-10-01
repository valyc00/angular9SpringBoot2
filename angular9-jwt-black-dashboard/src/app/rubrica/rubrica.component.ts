import { TokenStorageService } from './../services/token-storage.service';
import { RubricaService } from './../services/rubrica.service';
import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

declare let $: any;
declare let toastr: any;
declare let Chart: any;

@Component({
  selector: 'app-rubrica',
  templateUrl: './rubrica.component.html',
  styleUrls: ['./rubrica.component.css']
})
export class RubricaComponent implements OnInit {
  rubricas: any;
  itemsPerPage: number;
  totalItems: number;
  page: number;
  previousPage: number;
  chart_labels: any;
  chart_data: any;

  

  constructor(private token: TokenStorageService,
    private rubricaService:RubricaService,
    private testService:TestService
    
    ) { }

  ngOnInit(): void {
    this.getDatiPerGraf();
    this.page=1;
    this.itemsPerPage=5;

   this.findAllPage();


  }

  
  myFunc() {
    console.log("myFunc");
    const msg="ciaoooo";
    // toastr.options.timeOut = 30000; 
    toastr.success(msg);
  }
  
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.findAllPage();
    }
  }
  
  findAll(): void {
    this.rubricaService.findAll().subscribe(
      data => {
        this.rubricas = data;
        
        console.log(this.rubricas)
      },
      err => {
        console.log("error");
      }
    );
    console.log(this.rubricas);
  }
  

  findAllPage(): void {
    
    this.rubricaService.findAllPaged(this.page - 1,this.itemsPerPage).subscribe(
      data => {
        this.rubricas = data.content;
        this.totalItems = data.totalElements;
        console.log(this.rubricas)
      },
      err => {
        console.log("error");
      }
    );
    console.log(this.rubricas);
  }

 
  getDatiPerGraf(): void {
    
    this.testService.findAll().subscribe(
      data => {
        this.chart_labels = data.dati;
        this.chart_data = data.valori;
        this.creaGraf();
      },
      err => {
        console.log("error");
      }
    );
    console.log(this.rubricas);
  } 


  loopdati() {
   //in 10 seconds do something
    interval(3000).subscribe(x => {
      this.getDatiPerGraf();
    });
  }

  creaGraf() {


    var gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };


    // var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    // var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];
    
    const canvas = <HTMLCanvasElement> document.getElementById('chartBig1');
    const ctx = canvas.getContext('2d');
    

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: this.chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);


  }
  

}
