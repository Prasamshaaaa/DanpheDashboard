import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartService } from '../Services/chart.service';

@Component({
  selector: 'app-categorywiseincomereport',
  templateUrl: './categorywiseincomereport.component.html',
  styleUrls: ['./categorywiseincomereport.component.css']
})
export class CategoryWiseIncomeReportComponent implements OnInit {


  /**
    * @summary - Reference to the canvas element for the category-wise chart.
    */
  @ViewChild('categorywisechart') CategoryWiseChart!: ElementRef<HTMLCanvasElement>;
  constructor(private _chartService: ChartService) { }

  ngOnInit(): void {
    this.CreateCategoryReportChart();
  }

  categoryReports = [
    { id: 1, categoryreport: 'OT', collection: 'Rs.4,002,720.00', return: '46545' },
    { id: 2, categoryreport: 'Consultation', collection: 'Rs.4,002,720.00', return: '4652245' },
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

  /**
    * @summary Generates a bar chart representing collection and return counts across different age categoryreport.
    */
  CreateCategoryReportChart(): void {

    // Filtering out empty or invalid entries
    const validCategoryReports = this.categoryReports.filter(report => report.categoryreport && report.collection && report.return);

    if (validCategoryReports.length === 0) {
      console.log('No valid data available for creating the Category Wise Income chart.');
      return;
    }

    const labels = validCategoryReports.map(report => report.categoryreport);
    const collections = validCategoryReports.map(report => parseFloat(report.collection.replace('Rs.', '').replace(/,/g, '')));
    const returns = validCategoryReports.map(report => parseInt(report.return, 10));



    const datasets = [
      {
        label: 'Collection',
        data: collections
      },
      {
        label: 'Return',
        data: returns
      }
    ];

    const colors = [
      'rgb(7, 115, 188,0.6)',
      'rgb(169, 228, 169,0.6)'
    ];

    const legendPosition: 'top' | 'left' | 'bottom' | 'right' = 'top';

    this._chartService.CreateChart(
      this.CategoryWiseChart.nativeElement,
      'bar',
      labels,
      datasets,
      'Age Wise Details Chart',
      'Count',
      'Age Range',
      colors,
      legendPosition
    );
  }
}



