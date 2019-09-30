import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AssetUpdate } from '../core/actions/asset.actions';
import { InterventionsUpdate } from '../core/actions/interventions.actions';
import { KpisUpdate } from '../core/actions/kpis.actions';
import { Asset } from '../core/models/asset.model';
import { Intervention } from '../core/models/intervention.model';
import { AppState } from '../core/models/state.model';
import { FirebaseService } from '../core/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private assetKey = 'AObU2bC4aMC99JrE0c5R';

  constructor(private store: Store<AppState>, private firebase: FirebaseService) {
    merge(this.storeAsset(), this.storeInterventions(), this.storeIndicatorsKpis()).subscribe();
  }

  storeAsset(): Observable<Asset> {
    return this.firebase.getAsset(this.assetKey).pipe(tap(asset => this.store.dispatch(new AssetUpdate(asset))));
  }

  storeInterventions(): Observable<Intervention[]> {
    return this.firebase
      .getInterventionsFromAsset(this.assetKey)
      .pipe(tap(interventions => this.store.dispatch(new InterventionsUpdate(interventions))));
  }

  storeIndicatorsKpis(): Observable<any> {
    return this.firebase
      .getIndicatorsKpisFromAsset(this.assetKey)
      .pipe(tap(kpis => this.store.dispatch(new KpisUpdate(kpis))));
  }
}
