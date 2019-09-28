import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { DashboardComponent } from './dashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';

@NgModule({
  declarations: [GeneralInfoComponent, DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ]
})
export class DashboardModule { }
