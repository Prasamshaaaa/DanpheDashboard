import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-radiotests',
  templateUrl: './radiotests.component.html',
  styleUrls: ['./radiotests.component.css']
})
export class RadiotestsComponent implements OnInit, AfterViewInit {
  @ViewChild('radiotestsChart') radiotestsChartRef!: ElementRef<HTMLCanvasElement>;

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

  ngOnInit() { }

  ngAfterViewInit() {
    this.CreateRadioTestsChart();
  }

  CreateRadioTestsChart() {
    const labels = this.RadioTests.map(test => test.testname);
    const data = this.RadioTests.map(test => parseInt(test.nooftest, 10));
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
      this.radiotestsChartRef.nativeElement,
      labels,
      data,
      colors,
      'Radio Test Distribution'
    );
  }
}
