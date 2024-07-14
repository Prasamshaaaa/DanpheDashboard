import { Injectable } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { ChartConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  /**
   * 
   * @param chartRef - the canvas element where the chart will be rendered
   * @param chartType - type of chart we want to create (e.g. pie, line, bar and so.on.)
   * @param datasets - the datasets for the chart
   * @param chartTitle - the title of the chart
   * @param xAxisLabel - the label for the x-axis
   * @param yAxisLabel - the label for the y-axis
   * @param colors - array of colors for the datasets
   * @param legendPosition - the position of the legend
   * @summary - creates chart using cart.js
   * @returns The created chart instance.
   */
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
        position: legendPosition // For Setting the legend position
      },
      title: {
        display: true,
        text: chartTitle // For Displaying Chart Title
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: xAxisLabel // For displaying x-axis label
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: yAxisLabel // For displaying y-axis label
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

  /**
 * Creates a doughnut chart using Chart.js.
 *
 * @param chartRef - The canvas element where the chart will be rendered.
 * @param labels - The labels for the chart.
 * @param data - The data values for the chart.
 * @param colors - Array of colors for the chart segments.
 * @param chartTitle - The title of the chart.
 * @param legendPosition - The position of the legend.
 * @summary Creates a doughnut chart using Chart.js.
 * @returns The created chart instance.
 */
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

  /**
 
 * @summary  It gives a random color in RGBA format with 50% opacity.
 * @returns returns a string representing the RGBA color.
 */
  private generateRandomColor(): string {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
  }
}
