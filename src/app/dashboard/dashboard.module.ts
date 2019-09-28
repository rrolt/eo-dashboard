import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment';

import { AssetService } from '../core/services/asset.service';
import { DashboardComponent } from './dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';

@NgModule({
  declarations: [GeneralInfoComponent, DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AssetService]
})
export class DashboardModule {}
