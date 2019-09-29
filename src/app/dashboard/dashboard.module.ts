import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';

import { AnomalyStatusDirective } from '../core/directives/anomaly-status.directive';
import { AssetService } from '../core/services/asset.service';
import { DashboardComponent } from './dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { InterventionDetailsComponent } from './intervention-details/intervention-details.component';

@NgModule({
  declarations: [GeneralInfoComponent, DashboardComponent, InterventionDetailsComponent, AnomalyStatusDirective],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AssetService]
})
export class DashboardModule {}
