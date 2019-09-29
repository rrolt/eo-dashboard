import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/models/state.model';
import { Store } from '@ngrx/store';
import { Intervention } from 'src/app/core/models/intervention.model';
import { Observable, merge } from 'rxjs';
import { tap, filter, switchMap } from 'rxjs/operators';
import { Asset } from 'src/app/core/models/asset.model';
import { AssetService } from 'src/app/core/services/asset.service';
import { MatSliderChange } from '@angular/material/slider';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndicatorModalComponent } from './indicator-modal/indicator-modal.component';

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

  constructor(private store: Store<AppState>, private assetService: AssetService, private dialog: MatDialog) {
    merge(this.getAsset(), this.getIntervention()).subscribe();
  }

  ngOnInit() {}

  onStatusChange(status: string) {
    this.intervention.anomaly.status = status;
    this.updateIntervention();
  }

  onCriticityChange(event: MatSliderChange) {
    this.intervention.anomaly.criticity = event.value;
    this.updateIntervention();
  }

  formatSatusName(name: string): string {
    return name.replace(/_/g, ' ');
  }

  openIndicatorModal() {
    this.dialog
      .open(IndicatorModalComponent, {
        width: '250px'
      })
      .afterClosed()
      .pipe(
        filter(confirmed => confirmed),
        tap(indicator => (this.intervention.anomaly.indicator = indicator)),
        tap(() => this.updateIntervention())
      )
      .subscribe();
  }

  private getAsset(): Observable<Asset> {
    return this.store.select('asset').pipe(tap(asset => (this.asset = asset)));
  }

  private getIntervention(): Observable<Intervention> {
    return this.store
      .select('selectedIntervention')
      .pipe(tap(selectedIntervention => (this.intervention = selectedIntervention)));
  }

  private updateIntervention() {
    this.assetService.updateIntervention(this.asset, this.intervention);
  }
}

interface AnomalyStatus {
  name: string;
  color: string;
}
