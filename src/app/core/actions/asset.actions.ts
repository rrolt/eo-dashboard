import { Action } from '@ngrx/store';

import { Asset } from '../models/asset.model';

export const enum AssetTypes {
  UPDATE = '[Asset] Update'
}

export class AssetUpdate implements Action {
  readonly type = AssetTypes.UPDATE;

  constructor(public payload: Asset) {}
}

export type AssetActions = AssetUpdate;
