import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../Services/chart.service';

@Component({
  selector: 'app-radiotests',
  templateUrl: './radiotests.component.html',
  styleUrls: ['./radiotests.component.css']
})
export class RadioTestsComponent implements OnInit {

  /** 
   * @summary - Reference to the canvas element for the radio tests chart. 
   
  */
  @ViewChild('radiotestsChart') RadioTestsChartRef!: ElementRef<HTMLCanvasElement>;

  RadioTests = [
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

  ngOnInit(): void {
    this.CreateRadioTestsChart();
  }

  /**
   * @summary Generates a doughnut chart representing the distribution of various radio tests.
   */

  CreateRadioTestsChart(): void {
    // Filtering out empty or invalid entries
    const validRadioTests = this.RadioTests.filter(test => test.testname && test.nooftest);

    if (validRadioTests.length === 0) {
      console.log('No valid data available for  creating the RadioTests chart.');
      return;
    }

    const labels = validRadioTests.map(test => test.testname);
    const data = validRadioTests.map(test => parseInt(test.nooftest, 10));
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
      this.RadioTestsChartRef.nativeElement,
      labels,
      data,
      colors,
      'Radio Test Distribution'
    );
  }

}
