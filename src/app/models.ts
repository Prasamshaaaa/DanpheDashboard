import { Chart, ChartType } from 'chart.js';


export class Dataset {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
}

export class ChartConfig {
    chartRef: HTMLCanvasElement;
    chartType: ChartType;
    labels: string[];
    datasets: Dataset[];
    chartTitle: string;
    xAxisLabel: string;
    yAxisLabel: string;
    colors: string[];
    legendPosition: 'top' | 'left' | 'bottom' | 'right';

    constructor(
        chartRef: HTMLCanvasElement,
        chartType: ChartType,
        labels: string[],
        datasets: Dataset[],
        chartTitle: string,
        xAxisLabel: string,
        yAxisLabel: string,
        colors: string[],
        legendPosition: 'top' | 'left' | 'bottom' | 'right' = 'top'
    ) {
        this.chartRef = chartRef;
        this.chartType = chartType;
        this.labels = labels;
        this.datasets = datasets;
        this.chartTitle = chartTitle;
        this.xAxisLabel = xAxisLabel;
        this.yAxisLabel = yAxisLabel;
        this.colors = colors;
        this.legendPosition = legendPosition;
    }
}

export class DoughnutChartConfig {
    chartRef: HTMLCanvasElement;
    labels: string[];
    data: number[];
    colors: string[];
    chartTitle: string;
    legendPosition: 'top' | 'left' | 'bottom' | 'right';
}  