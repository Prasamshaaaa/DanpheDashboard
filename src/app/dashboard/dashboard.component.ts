import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.CreateLabDetailsChart();
    this.CreateRadioDetailsChart();
  }

  // Create Lab Detail Chart
  CreateLabDetailsChart(): void {
    const data = {
      labels: ['Ordered', 'Sampled', 'Received', 'Reported', 'PreVerified', 'Verified'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 600, 20, 89],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        hoverOffset: 4
      }]
    };

    // Create a new chart
    new Chart('labDetailsChart', {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',

          },
          title: {
            display: true,
            text: 'Doughnut Chart Example'
          }
        }
      }
    });
  }


  // Create Radio Details Chart
  CreateRadioDetailsChart(): void {
    const data = {
      labels: ['Waiting', 'CheckIn', 'Reported', 'Verified', 'Appointment'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 600, 20, 89],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)'
        ],
        hoverOffset: 4
      }]
    };

    // Create a new chart
    new Chart('radioDetailsChart', {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Doughnut Chart Example'
          }
        }
      }
    });
  }

}



