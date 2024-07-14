import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../Services/chart.service';

/**
 *
 * @summary Displays random collection counts over a span of years using a line chart.
 */
@Component({
  selector: 'app-collectiondetail',
  templateUrl: './collectiondetail.component.html',
  styleUrls: ['./collectiondetail.component.css']
})
export class CollectionDetailComponent implements OnInit {

  ActiveButton: string = 'service';

  /** @summary - Reference to the canvas element for the collection details chart. */
  @ViewChild('collectionDetailsChart') CollectionDetailsChart!: ElementRef;

  constructor(private _chartService: ChartService) { }

  ngOnInit(): void {
    this.CreateCollectionDetailsChart();
  }

  SetActiveButton(button: string) {
    this.ActiveButton = button;
  }

  /**
   * @summary Generates a line chart representing collection counts over a period of years.
   */
  CreateCollectionDetailsChart(): void {
    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Year 14', 'Year 15'];
    const data = years.map(() => Math.floor(Math.random() * 1000));

    // Filtering out valid years and data
    const validYears = years.filter(year => year.trim() !== '');
    const validData = data.filter(num => num >= 0);

    if (validYears.length > 0 && validData.length > 0 && validYears.length === validData.length) {
      const datasets = [{
        label: 'Collection Count',
        data: validData,
      }];
      const colors = ['rgb(7, 115, 188,0.6)'];
      const legendPosition: 'top' | 'left' | 'bottom' | 'right' = 'top';

      this._chartService.CreateChart(
        this.CollectionDetailsChart.nativeElement,
        'line',
        years,
        datasets,
        'Collection Details Chart',
        'Yearly',
        'Collection Count',
        colors,
        legendPosition
      );
    }
  }
}