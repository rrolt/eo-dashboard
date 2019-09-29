import { InterventionsActions, InterventionsTypes } from '../actions/interventions.actions';
import { Intervention } from '../models/intervention.model';

export function selectedInterventionReducer(state: Intervention, action: InterventionsActions) {
  switch (action.type) {
    case InterventionsTypes.SELECT:
      return action.payload;

    default:
      return state;
  }
}
