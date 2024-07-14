import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../chart.service';

/**
 * @summary Displays the distribution of lab tests using a doughnut chart.
 */
@Component({
  selector: 'app-labtests',
  templateUrl: './labtests.component.html',
  styleUrls: ['./labtests.component.css']
})
export class LabtestsComponent implements OnInit {

  /**
   * @summary -  Reference to the canvas element for the lab tests chart. */
  @ViewChild('labtestsChart') labtestsChartRef!: ElementRef<HTMLCanvasElement>;

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

  constructor(private chartService: ChartService) { }


  ngOnInit() {
    this.CreateLabTestsChart();
  }

  /**
   * @summary - Generates a doughnut chart representing the distribution of lab tests.
   */
  CreateLabTestsChart() {
    const labels = this.LabTests.map(test => test.testname);
    const data = this.LabTests.map(test => parseInt(test.nooftest, 10));
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(14, 90, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(200, 159, 64)',
      'rgb(80, 255, 102)',
      'rgb(255, 102, 182)',
      'rgb(150, 158, 95)',
      'rgb(15, 104, 102)'
    ];

    this.chartService.CreateDoughnutChart(
      this.labtestsChartRef.nativeElement,
      labels,
      data,
      colors,
      'Lab Test Distribution',
      'top'
    );
  }
}
