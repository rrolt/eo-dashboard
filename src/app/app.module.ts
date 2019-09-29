import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { assetReducer } from './core/reducers/asset.reducer';
import { interventionsReducer } from './core/reducers/interventions.reducer';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    DashboardModule,
    StoreModule.forRoot({ asset: assetReducer, interventions: interventionsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
