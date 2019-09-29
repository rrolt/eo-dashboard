import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/models/state.model';
import { Store } from '@ngrx/store';
import { Intervention } from 'src/app/core/models/intervention.model';
import { Observable, merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Asset } from 'src/app/core/models/asset.model';
import { AssetService } from 'src/app/core/services/asset.service';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'dashboard-intervention-details',
  templateUrl: './intervention-details.component.html',
  styleUrls: ['./intervention-details.component.scss']
})
export class InterventionDetailsComponent implements OnInit {
  intervention: Intervention;

  asset: Asset;

  constructor(private store: Store<AppState>, private assetService: AssetService) {
    merge(this.getAsset(), this.getIntervention()).subscribe();
  }

  ngOnInit() {}

  onCriticityChange(event: MatSliderChange) {
    this.intervention.anomaly.criticity = event.value;
    this.assetService.updateIntervention(this.asset, this.intervention);
  }

  private getAsset(): Observable<Asset> {
    return this.store.select('asset').pipe(tap(asset => (this.asset = asset)));
  }

  private getIntervention(): Observable<Intervention> {
    return this.store
      .select('selectedIntervention')
      .pipe(tap(selectedIntervention => (this.intervention = selectedIntervention)));
  }
}
