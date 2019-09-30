import { Asset } from './asset.model';
import { IndicatorKpis, Intervention } from './intervention.model';

export interface AppState {
  asset: Asset;
  interventions: Intervention[];
  selectedIntervention: Intervention;
  kpis: IndicatorKpis[];
}
