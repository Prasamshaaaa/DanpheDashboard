import { Injectable } from '@angular/core';
import { Chart, ChartType } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  CreateChart(
    chartRef: HTMLCanvasElement,
    chartType: ChartType,
    labels: string[],
    datasets: any[],
    chartTitle: string,
    xAxisLabel: string,
    yAxisLabel: string,
    colors: string[],
    legendPosition: 'top' | 'left' | 'bottom' | 'right' = 'top'
  ) {
    const data = {
      labels: labels,
      datasets: datasets.map((dataset, index) => ({
        label: dataset.label,
        data: dataset.data,
        backgroundColor: colors[index % colors.length] || this.generateRandomColor(),
        borderColor: colors[index % colors.length] || this.generateRandomColor(),
        fill: true
      }))
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: legendPosition // Correctly set legend position
      },
      title: {
        display: true,
        text: chartTitle // Ensure title is displayed
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: xAxisLabel // Ensure x-axis label is displayed
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: yAxisLabel // Ensure y-axis label is displayed
          }
        }]
      }
    };

    return new Chart(chartRef, {
      type: chartType,
      data: data,
      options: options
    });
  }

  CreateDoughnutChart(
    chartRef: HTMLCanvasElement,
    labels: string[],
    data: number[],
    colors: string[],
    chartTitle: string,
    legendPosition: 'top' | 'left' | 'bottom' | 'right' = 'top'
  ) {
    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Number of Tests',
        data: data,
        backgroundColor: colors,
        hoverOffset: 4
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: legendPosition
        },
        title: {
          display: true,
          text: chartTitle
        }
      }
    };

    return new Chart(chartRef, {
      type: 'doughnut',
      data: chartData,
      options: options
    });
  }

  private generateRandomColor(): string {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
  }
}
