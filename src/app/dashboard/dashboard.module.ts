import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment';

import { AnomalyStatusDirective } from '../core/directives/anomaly-status.directive';
import { FirebaseService } from '../core/services/firebase.service';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { IndicatorModalComponent } from './intervention-details/indicator-modal/indicator-modal.component';
import { InterventionDetailsComponent } from './intervention-details/intervention-details.component';

@NgModule({
  declarations: [
    GeneralInfoComponent,
    DashboardComponent,
    InterventionDetailsComponent,
    AnomalyStatusDirective,
    IndicatorModalComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatMenuModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents: [IndicatorModalComponent],
  providers: [FirebaseService]
})
export class DashboardModule {}
