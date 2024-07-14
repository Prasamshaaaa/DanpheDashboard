import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-age-wise-details',
  templateUrl: './age-wise-details.component.html',
  styleUrls: ['./age-wise-details.component.css']
})
export class AgeWiseDetailsComponent implements OnInit {


  /**
    * @summary - Reference to the canvas element for the age-wise chart.
    */
  @ViewChild('agewisechart') agewisechart!: ElementRef<HTMLCanvasElement>;


  /** 
   * @summary -Age-wise reports data 
   * */
  AgeWiseReports = [
    { ageRange: '0-9 Years', maleCount: 1045, femaleCount: 1552 },
    { ageRange: '10-14 Years', maleCount: 5255, femaleCount: 7526 },
    { ageRange: '15-19 Years', maleCount: 5522, femaleCount: 222 },
    { ageRange: '20-59 Years', maleCount: 222, femaleCount: 258 },
    { ageRange: '60-69 Years', maleCount: 2552, femaleCount: 5895 },
    { ageRange: '70 above Years', maleCount: 252, femaleCount: 5525 },
  ];

  constructor(private _chartService: ChartService) { }

  ngOnInit() {
    this.CreateAgeWiseChart();
  }


  /**
  * @summary Generates a bar chart representing male and female counts across different age ranges.
  */
  CreateAgeWiseChart() {
    const labels = this.AgeWiseReports.map(report => report.ageRange);
    const maleCounts = this.AgeWiseReports.map(report => report.maleCount);
    const femaleCounts = this.AgeWiseReports.map(report => report.femaleCount);

    const datasets = [
      {
        label: 'Male',
        data: maleCounts
      },
      {
        label: 'Female',
        data: femaleCounts
      }
    ];
    const colors = ['rgb(7, 115, 188,0.6)', 'rgb(132, 227, 132,0.6)'];
    const legendPosition: 'top' | 'left' | 'bottom' | 'right' = 'top';

    this._chartService.CreateChart(
      this.agewisechart.nativeElement,
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
