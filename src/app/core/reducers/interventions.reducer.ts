import { InterventionsActions, InterventionsTypes } from '../actions/interventions.actions';
import { Intervention } from '../models/intervention.model';

export function interventionsReducer(state: Intervention[] = [], action: InterventionsActions) {
  switch (action.type) {
    case InterventionsTypes.UPDATE:
      return action.payload;

    default:
      return state;
  }
}
