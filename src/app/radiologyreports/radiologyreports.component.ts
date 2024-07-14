import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartService } from '../chart.service';
import { Dataset } from '../models';
@Component({
  selector: 'app-radiologyreports',
  templateUrl: './radiologyreports.component.html',
  styleUrls: ['./radiologyreports.component.css']
})
export class RadiologyreportsComponent implements OnInit {
  @ViewChild('radiologychart') myChartRef: ElementRef;

  private chart: Dataset;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.CreateRadiologyReportChart();
  }

  CreateRadiologyReportChart() {
    const categories = ['CT', 'CT Scan', 'Doppler', 'Extra', 'Gastrology', 'IVU', 'Mammagram', 'Micturating Cystourethro', 'MRI Report', 'Neurology', 'Sonomammagram', 'Special Producer', 'UltraSound', 'Ultrasound(USG)', 'X-ray'];
    const statuses = ['Waiting', 'CheckIn', 'Reported', 'Verified', 'Appointment'];

    const colors = [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(255, 159, 64, 0.5)',
      'rgba(153, 102, 255, 0.5)'
    ];

    const datasets = statuses.map((status, index) => ({
      label: status,
      data: this.getNumbers(categories.length),
      backgroundColor: colors[index % colors.length],
      borderColor: colors[index % colors.length],
      borderWidth: 1
    }));

    const chartTitle = 'Radiology Reports Chart';
    const xAxisLabel = 'Count';
    const yAxisLabel = 'Categories';

    this.chart = this.chartService.CreateChart(
      this.myChartRef.nativeElement,
      'horizontalBar',
      categories,
      datasets,
      chartTitle,
      xAxisLabel,
      yAxisLabel,
      colors
    );
  }

  private getNumbers(count: number): number[] {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * 4000));
    }
    return numbers;
  }
}