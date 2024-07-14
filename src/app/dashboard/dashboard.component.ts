import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../chart.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('labDetailsChart') labDetailsChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radioDetailsChart') radioDetailsChartRef!: ElementRef<HTMLCanvasElement>;
  activeButton: string = 'yearly';

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.CreateLabDetailsChart();
    this.CreateRadioDetailsChart();
  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // For top yearly/monthly/weekly/daily buttons
  setActiveButton(button: string) {
    this.activeButton = button;
  }

  // Create Lab Detail Chart
  CreateLabDetailsChart(): void {
    const labels = ['Ordered', 'Sampled', 'Received', 'Reported', 'PreVerified', 'Verified'];
    const data = [300, 50, 100, 600, 20, 89];
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(132, 227, 132)',
      'rgb(255, 205, 86)',
      'rgb(7, 115, 188)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ];

    this.chartService.CreateDoughnutChart(
      this.labDetailsChartRef.nativeElement,
      labels,
      data,
      colors,
      'Doughnut Chart Example',
      'bottom'
    );
  }

  // Create Radio Details Chart
  CreateRadioDetailsChart(): void {
    const labels = ['Waiting', 'CheckIn', 'Reported', 'Verified', 'Appointment'];
    const data = [300, 50, 100, 600, 20];
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(132, 227, 132)',
      'rgb(153, 102, 255)',
      'rgb(7, 115, 188)',
      'rgb(255, 159, 64)'
    ];

    this.chartService.CreateDoughnutChart(
      this.radioDetailsChartRef.nativeElement,
      labels,
      data,
      colors,
      'Doughnut Chart Example',
      'top'
    );
  }
}
