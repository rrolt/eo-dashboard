import { Action } from '@ngrx/store';

import { Intervention } from '../models/intervention.model';

export const enum InterventionsTypes {
  UPDATE = '[Interventions] Update'
}

export class InterventionsUpdate implements Action {
  readonly type = InterventionsTypes.UPDATE;

  constructor(public payload: Intervention[]) {}
}

export type InterventionsActions = InterventionsUpdate;
