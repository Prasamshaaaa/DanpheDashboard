import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../chart.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  /** 
   * @summary - Reference to the canvas element for the lab details chart.
   * 
   */
  @ViewChild('labDetailsChart') labDetailsChartRef!: ElementRef;

  /** 
   * @summary - Reference to the canvas element for the radio details chart. */
  @ViewChild('radioDetailsChart') radioDetailsChartRef!: ElementRef;

  activeButton: string = 'yearly';

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.CreateLabDetailsChart();
    this.CreateRadioDetailsChart();
  }


  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }


  setActiveButton(button: string) {
    this.activeButton = button;
  }

  /**
   * @summary - Generates a doughnut chart representing various lab status counts.
   */
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

  /**
   * @summary Generates a doughnut chart representing various radio status counts.
   */
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
