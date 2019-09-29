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

  statusList: AnomalyStatus[] = [
    { name: 'pending', color: '#e23535' },
    { name: 'created', color: '#e23535' },
    { name: 'in_progress', color: '#24292d' },
    { name: 'resolved', color: '#41b771' }
  ];

  constructor(private store: Store<AppState>, private assetService: AssetService) {
    merge(this.getAsset(), this.getIntervention()).subscribe();
  }

  ngOnInit() {}

  onStatusChange(status: string) {
    this.intervention.anomaly.status = status;
    this.assetService.updateIntervention(this.asset, this.intervention);
  }

  onCriticityChange(event: MatSliderChange) {
    this.intervention.anomaly.criticity = event.value;
    this.assetService.updateIntervention(this.asset, this.intervention);
  }

  formatSatusName(name: string): string {
    return name.replace(/_/g, ' ');
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

interface AnomalyStatus {
  name: string;
  color: string;
}
