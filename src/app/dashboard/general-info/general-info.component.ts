import { Component, OnInit, Input } from '@angular/core';
import { AssetService } from 'src/app/core/services/asset.service';
import { Asset } from 'src/app/core/models/asset.model';
import { Observable } from 'rxjs';
import { Intervention } from 'src/app/core/models/intervention.model';

@Component({
  selector: 'dashboard-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  @Input() asset: Asset;

  @Input() interventions: Intervention[];

  displayedColumns: string[] = ['intervention_date', 'anomaly'];

  interventions$: Observable<Intervention[]>;

  constructor() {}

  ngOnInit() {}
}
