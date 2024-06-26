import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-categorywiseincomereport',
  templateUrl: './categorywiseincomereport.component.html',
  styleUrls: ['./categorywiseincomereport.component.css']
})
export class CategorywiseincomereportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.CreateCategoryReportChart();
  }

  categoryReports = [
    { id: 1, categoryreport: 'OT', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 2, categoryreport: 'Consultation', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 3, categoryreport: 'Biochemistry', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 4, categoryreport: 'Uro Surgery', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 5, categoryreport: 'Immunology', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 6, categoryreport: 'Round Charge', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 7, categoryreport: 'Ultrasound', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 8, categoryreport: 'Bed Charge', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 9, categoryreport: 'XRAY', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 10, categoryreport: 'ICU', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 11, categoryreport: 'CT Scan', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 12, categoryreport: 'Dialysis', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 13, categoryreport: 'Double Cabin', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 14, categoryreport: 'Procedure', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 15, categoryreport: 'Hematology', collection: 'Rs.4,002,720.00', return: '46545' },

  ];

  CreateCategoryReportChart() {
    const labels = this.categoryReports.map(report => report.categoryreport);
    const collections = this.categoryReports.map(report => parseFloat(report.collection.replace('Rs.', '').replace(/,/g, '')));
    const returns = this.categoryReports.map(report => parseInt(report.return, 10));

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Collection',
          data: collections,
          backgroundColor: 'rgba(255, 159, 64, 0.6)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1
        },
        {
          label: 'Return',
          data: returns,
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
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    };

    const myChart = new Chart(
      document.getElementById('categorywisechart') as HTMLCanvasElement,
      config
    );
  }
}



