import { OnInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import { ChartService } from '../Services/chart.service';
import { TimePeriodService } from '../Services/timeperiod.service';

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

  /**
     * @summary The currently active button representing the selected view type.
     * @default 'service'
     */
  ActiveButton: string = 'service';

  /** @summary - Reference to the canvas element for the collection details chart. */
  @ViewChild('collectionDetailsChart') CollectionDetailsChart!: ElementRef;

  /**
  * @summary The selected time period for displaying the chart.
  * @default 'yearly'
  */
  @Input() TimePeriod: string = 'yearly';

  constructor(private _chartService: ChartService, private _timePeriodService: TimePeriodService) { }

  ngOnInit(): void {
    /**
        * @summary Initializes the component and loads data for the chart.
        *
        * Subscribes to changes in the current time period and reloads the chart data
        * whenever the time period is updated.
        */

    this.LoadData();
    this._timePeriodService.CurrentTimePeriod$.subscribe(period => {
      this.TimePeriod = period;
      this.LoadData();
    });
  }

  LoadData(): void {
    this.CreateCollectionDetailsChart();

  }


  /**
 * @summary Sets the currently active button for the chart view.
 * @param button - The button representing the selected view type.
 */
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

  /**
  * @summary Updates the selected time period and reloads data for the chart.
  * @param newTimePeriod - The new time period selected by the user.
  */
  OnTimePeriodChange(newTimePeriod: string): void {
    this.TimePeriod = newTimePeriod;
    this.LoadData();
  }
}