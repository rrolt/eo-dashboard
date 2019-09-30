import { KpisActions, KpisTypes } from '../actions/kpis.actions';
import { IndicatorKpis } from '../models/intervention.model';

export function KpisReducer(state: IndicatorKpis[], action: KpisActions) {
  switch (action.type) {
    case KpisTypes.UPDATE:
      return action.payload;

    default:
      return state;
  }
}
