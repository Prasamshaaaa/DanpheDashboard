import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-collectiondetail',
  templateUrl: './collectiondetail.component.html',
  styleUrls: ['./collectiondetail.component.css']
})
export class CollectiondetailComponent implements OnInit {
  activeButton: string = 'service';
  constructor() { }

  ngOnInit() {
    this.CreateCollectionDetailsChart();
  }

  //For buttons
  setActiveButton(button: string) {
    this.activeButton = button;
  }

  CreateCollectionDetailsChart() {
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8'];
    const data = years.map(() => Math.floor(Math.random() * 1000)); // Generate random count data

    const chartData = {
      labels: years,
      datasets: [{
        label: 'Collection Count',
        data: data,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }]
    };

    new Chart('collectiolDetailsChart', {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Random Line Chart'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Yearly'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Collection Count'
            }
          }
        }
      }
    });
  }

}
