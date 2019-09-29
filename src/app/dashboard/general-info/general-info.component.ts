import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InterventionSelect } from 'src/app/core/actions/interventions.actions';
import { Asset } from 'src/app/core/models/asset.model';
import { Intervention } from 'src/app/core/models/intervention.model';
import { AppState } from 'src/app/core/models/state.model';

@Component({
  selector: 'dashboard-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  asset$: Observable<Asset>;

  interventions$: Observable<Intervention[]>;

  selectedIntervention: Intervention;

  displayedColumns: string[] = ['intervention_date', 'anomaly'];

  constructor(private store: Store<AppState>) {
    this.asset$ = this.store.select('asset');
    this.interventions$ = this.store.select('interventions');

    this.store
      .select('selectedIntervention')
      .pipe(tap(selectedIntervention => (this.selectedIntervention = selectedIntervention)))
      .subscribe();
  }

  ngOnInit() {}

  selectIntervention(intevention: Intervention) {
    this.store.dispatch(new InterventionSelect(intevention));
  }
}
