import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { InterventionSelect } from 'src/app/core/actions/interventions.actions';
import { Asset } from 'src/app/core/models/asset.model';
import { Intervention } from 'src/app/core/models/intervention.model';
import { AppState } from 'src/app/core/models/state.model';

@Component({
  selector: 'dashboard-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {
  asset$: Observable<Asset>;

  interventions$: Observable<Intervention[]>;

  selectedIntervention: Intervention;

  displayedColumns: string[] = ['intervention_date', 'anomaly_ref', 'anomaly_criticiy'];

  constructor(private store: Store<AppState>) {
    this.asset$ = this.store.select('asset');

    this.interventions$ = this.store.select('interventions').pipe(
      filter(interventions => interventions && interventions.length > 0),
      tap(interventions => this.selectIntervention(this.selectedIntervention || interventions[0]))
    );

    this.store
      .select('selectedIntervention')
      .pipe(tap(selectedIntervention => (this.selectedIntervention = selectedIntervention)))
      .subscribe();
  }

  selectIntervention(intevention: Intervention) {
    this.store.dispatch(new InterventionSelect(intevention));
  }
}
