import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-labtests',
  templateUrl: './labtests.component.html',
  styleUrls: ['./labtests.component.css']
})
export class LabtestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.CreateLabTestsChart();

  }

  LabTests = [
    { rank: 1, testname: 'RBS by Glucometer', nooftest: '7272' },
    { rank: 2, testname: 'COMPLETE HAEMOGRAM', nooftest: '5522' },
    { rank: 3, testname: 'Urine RE/ME', nooftest: '5236' },
    { rank: 4, testname: 'RFT', nooftest: '5262' },
    { rank: 5, testname: 'BLOOD SUGAR-RANDOM(RBS)', nooftest: '8572' },
    { rank: 6, testname: 'Liver Function Test(LFT)', nooftest: '2222' },
    { rank: 7, testname: 'BLOOD SUGAR-FASTING(FBS)', nooftest: '3333' },
    { rank: 8, testname: 'TFT', nooftest: '4444' },
    { rank: 9, testname: 'URINE CULTURE', nooftest: '5555' },
    { rank: 10, testname: 'BLOOD SUGAR-POST PRANDIAL(PP)', nooftest: '7777' },

  ];

  CreateLabTestsChart() {
    const labels = this.LabTests.map((test) => test.testname);
    const data = this.LabTests.map((test) => test.nooftest);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Number of Tests',
        data: data,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(94, 255, 102)',
          'rgb(255, 102, 182)',
          'rgb(102, 158, 255)',
          'rgb(255, 204, 102)'
        ],
        hoverOffset: 4
      }]
    };

    new Chart('labtestsChart', {
      type: 'doughnut',
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
            text: 'Lab Test Distribution'
          }
        }
      }
    });
  }

}
