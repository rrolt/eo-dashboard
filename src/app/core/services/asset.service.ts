import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Asset } from '../models/asset.model';
import { Intervention } from '../models/intervention.model';

@Injectable()
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  getAsset(code: string): Observable<Asset> {
    return this.getAssetDocument(code).valueChanges();
  }

  getInterventionsFromAsset(code: string): Observable<Intervention[]> {
    return this.getInterventionsCollection(code).valueChanges();
  }

  updateIntervention(asset: Asset, intervention: Intervention): Promise<void> {
    console.log(intervention);
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
