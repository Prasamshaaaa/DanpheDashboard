import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-age-wise-details',
  templateUrl: './age-wise-details.component.html',
  styleUrls: ['./age-wise-details.component.css']
})
export class AgeWiseDetailsComponent implements OnInit {

  AgeWiseReports = [
    { ageRange: '0-9 Years', maleCount: 1045, femaleCount: 1552 },
    { ageRange: '10-14 Years', maleCount: 5255, femaleCount: 7526 },
    { ageRange: '15-19 Years', maleCount: 5522, femaleCount: 222 },
    { ageRange: '20-59 Years', maleCount: 222, femaleCount: 258 },
    { ageRange: '60-69 Years', maleCount: 2552, femaleCount: 5895 },
    { ageRange: '70 above Years', maleCount: 252, femaleCount: 5525 },
  ];

  constructor() { }

  ngOnInit() {
    this.CreateAgeWiseChart();
  }

  CreateAgeWiseChart() {
    const labels = this.AgeWiseReports.map(report => report.ageRange);
    const maleCounts = this.AgeWiseReports.map(report => report.maleCount);
    const femaleCounts = this.AgeWiseReports.map(report => report.femaleCount);

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Male',
          data: maleCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Female',
          data: femaleCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Age Wise Details Chart'
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: 'Count'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Age Range'
            }
          }
        }
      }
    };

    const myChart = new Chart(
      document.getElementById('agewisechart') as HTMLCanvasElement,
      config
    );
  }
}
