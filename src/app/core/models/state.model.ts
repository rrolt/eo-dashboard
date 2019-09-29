import { Asset } from './asset.model';
import { Intervention } from './intervention.model';

export interface AppState {
  asset: Asset;
  interventions: Intervention[];
}
