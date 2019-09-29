import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/models/state.model';
import { Store } from '@ngrx/store';
import { Intervention } from 'src/app/core/models/intervention.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard-intervention-details',
  templateUrl: './intervention-details.component.html',
  styleUrls: ['./intervention-details.component.scss']
})
export class InterventionDetailsComponent implements OnInit {
  intervention$: Observable<Intervention>;

  constructor(private store: Store<AppState>) {
    this.intervention$ = this.store.select('selectedIntervention');
  }

  ngOnInit() {}
}
