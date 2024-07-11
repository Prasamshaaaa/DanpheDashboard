import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-radiologyreports',
  templateUrl: './radiologyreports.component.html',
  styleUrls: ['./radiologyreports.component.css']
})
export class RadiologyreportsComponent implements OnInit {
  @ViewChild('radiologychart') myChartRef: ElementRef;

  private chart: Chart
  constructor() { }

  ngOnInit() {
    this.CreateRadiologyReportChart()
  }


  CreateRadiologyReportChart() {
    const CATEGORY_COUNT = 15;
    const INTERVAL = 1000;

    const categories = ['CT', 'CT Scan', 'Doppler', 'Extra', 'Gastrology', 'IVU', 'Mammagram', 'Micturating Cystourethro', 'MRI Report', 'Neurology', 'Sonomammagram', 'Special Producer', 'UltraSound', 'Ultrasound(USG)', 'X-ray'];
    const statuses = ['Waiting', 'CheckIn', 'Reported', 'Verified', 'Appointment'];

    const data = {
      labels: categories,
      datasets: statuses.map(status => ({
        label: status,
        data: this.getNumbers(CATEGORY_COUNT),
        backgroundColor: this.getColor(status.toLowerCase()),
        borderColor: this.getColor(status.toLowerCase()),
        borderWidth: 1
      }))
    };

    const config = {
      type: 'horizontalBar',
      data: data,
      options: {
        elements: {
          rectangle: {
            borderWidth: 2,
          }
        },
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Radiology Reports Chart'
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: INTERVAL,
              callback: function (value, index, values) {
                return value.toString();
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'Count'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Categories'
            }
          }]
        }
      }
    };

    setTimeout(() => {
      this.chart = new Chart(this.myChartRef.nativeElement, config);
    }, 0);
  }

  getNumbers(count: number): number[] {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 4000));
    }
    return numbers;
  }

  getColor(name: string): string {
    const colors = {
      waiting: 'rgba(255, 99, 132, 0.5)',
      checkin: 'rgba(54, 162, 235, 0.5)',
      reported: 'rgba(75, 192, 192, 0.5)',
      verified: 'rgba(255, 159, 64, 0.5)',
      appointment: 'rgba(153, 102, 255, 0.5)',
    };
    return colors[name];
  }


}





