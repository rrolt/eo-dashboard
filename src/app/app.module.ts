import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { assetReducer } from './core/reducers/asset.reducer';
import { interventionsReducer } from './core/reducers/interventions.reducer';
import { selectedInterventionReducer } from './core/reducers/selected-intervention.reducer';
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
    FontAwesomeModule,
    StoreModule.forRoot({
      asset: assetReducer,
      interventions: interventionsReducer,
      selectedIntervention: selectedInterventionReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
