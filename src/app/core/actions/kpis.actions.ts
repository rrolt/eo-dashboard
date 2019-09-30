import { Action } from '@ngrx/store';

import { IndicatorKpis } from '../models/intervention.model';

export const enum KpisTypes {
  UPDATE = '[Kpis] Update'
}

export class KpisUpdate implements Action {
  readonly type = KpisTypes.UPDATE;

  constructor(public payload: IndicatorKpis[]) {}
}

export type KpisActions = KpisUpdate;
