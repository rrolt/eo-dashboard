import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { flatMap, tap } from 'rxjs/operators';

import { AssetUpdate } from '../core/actions/asset.actions';
import { InterventionsUpdate } from '../core/actions/interventions.actions';
import { AppState } from '../core/models/state.model';
import { AssetService } from '../core/services/asset.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>, private assetService: AssetService) {
    this.assetService
      .getAsset('AObU2bC4aMC99JrE0c5R')
      .pipe(tap(asset => this.store.dispatch(new AssetUpdate(asset))))
      .pipe(
        flatMap(() => this.assetService.getInterventionsFromAsset('AObU2bC4aMC99JrE0c5R')),
        tap(interventions => this.store.dispatch(new InterventionsUpdate(interventions)))
      )
      .subscribe();
  }

  ngOnInit() {}
}
