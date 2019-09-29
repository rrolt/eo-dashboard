import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, merge } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AssetUpdate } from '../core/actions/asset.actions';
import { InterventionsUpdate } from '../core/actions/interventions.actions';
import { Asset } from '../core/models/asset.model';
import { Intervention } from '../core/models/intervention.model';
import { AppState } from '../core/models/state.model';
import { AssetService } from '../core/services/asset.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private assetKey = 'AObU2bC4aMC99JrE0c5R';

  constructor(private store: Store<AppState>, private assetService: AssetService) {
    merge(this.storeAsset(), this.storeInterventions()).subscribe();
  }

  storeAsset(): Observable<Asset> {
    return this.assetService.getAsset(this.assetKey).pipe(tap(asset => this.store.dispatch(new AssetUpdate(asset))));
  }

  storeInterventions(): Observable<Intervention[]> {
    return this.assetService
      .getInterventionsFromAsset(this.assetKey)
      .pipe(tap(interventions => this.store.dispatch(new InterventionsUpdate(interventions))));
  }

  ngOnInit() {}
}
