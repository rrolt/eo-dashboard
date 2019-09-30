import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { IndicatorKpis } from 'src/app/core/models/intervention.model';
import { AppState } from 'src/app/core/models/state.model';

@Component({
  selector: 'dashboard-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  backgrounds: string[] = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'];

  barChartType: ChartType = 'bar';

  barChartLegend = false;

  barChartLabels: Label[];

  barChartData: ChartDataSets[];

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    },
    tooltips: {
      custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;
      },
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + ' : ' + tooltipItem.yLabel;
        },
        title: function(tooltipItem, data) {
          return '';
        }
      }
    }
  };

  constructor(private store: Store<AppState>) {
    this.store
      .select('kpis')
      .pipe(
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        filter(kpis => kpis && kpis.length > 0),
        tap(kpis => this.feedChart(kpis))
      )
      .subscribe();
  }

  private feedChart(kpis: IndicatorKpis[]) {
    this.barChartLabels = kpis.map(kpi => kpi.label);

    this.barChartData = [
      {
        data: kpis.map(kpi => kpi.value),
        backgroundColor: this.backgrounds,
        hoverBackgroundColor: '#252a2d'
      }
    ];
  }
}
