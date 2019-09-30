import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Asset } from '../models/asset.model';
import { IndicatorKpis, Intervention } from '../models/intervention.model';

@Injectable()
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  getAsset(code: string): Observable<Asset> {
    return this.getAssetDocument(code).valueChanges();
  }

  getInterventionsFromAsset(code: string): Observable<Intervention[]> {
    return this.getInterventionsCollection(code).valueChanges();
  }

  getIndicatorsKpisFromAsset(code: string): Observable<IndicatorKpis[]> {
    return this.getInterventionsFromAsset(code).pipe(
      map(interventions => {
        const kpis: IndicatorKpis[] = [];
        interventions.forEach(intervention => {
          const kpi = kpis.find(_kpi => _kpi.label.toLowerCase() === intervention.anomaly.indicator.name.toLowerCase());
          if (kpi) {
            kpi.value += 1;
          } else {
            kpis.push({ label: intervention.anomaly.indicator.name, value: 1 });
          }
        });
        return kpis.sort((a, b) => b.value - a.value);
      })
    );
  }

  updateIntervention(asset: Asset, intervention: Intervention): Promise<void> {
    return this.db
      .collection('assets')
      .doc(asset.id)
      .collection('interventions')
      .doc(intervention.id)
      .set(intervention);
  }

  private getAssetDocument(code: string): AngularFirestoreDocument<Asset> {
    return this.db.collection('assets').doc(code);
  }

  private getInterventionsCollection(code: string): AngularFirestoreCollection<Intervention> {
    return this.getAssetDocument(code).collection('interventions');
  }
}
