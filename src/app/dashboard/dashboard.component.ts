import { Component, OnInit } from '@angular/core';
import { Asset } from '../core/models/asset.model';
import { AssetService } from '../core/services/asset.service';
import { tap, switchMap, flatMap } from 'rxjs/operators';
import { Intervention } from '../core/models/intervention.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  asset: Asset;

  interventions: Intervention[] = [];

  constructor(private assetService: AssetService) {
    this.assetService
      .getAsset('AObU2bC4aMC99JrE0c5R')
      .pipe(
        tap(asset => (this.asset = asset)),
        flatMap(() => this.assetService.getInterventionsFromAsset('AObU2bC4aMC99JrE0c5R')),
        tap(interventions => (this.interventions = interventions))
      )
      .subscribe();
  }

  ngOnInit() {}
}
