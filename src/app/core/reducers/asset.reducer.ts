import { AssetActions, AssetTypes } from '../actions/asset.actions';
import { Asset } from '../models/asset.model';

export function assetReducer(state: Asset[] = [], action: AssetActions) {
  switch (action.type) {
    case AssetTypes.UPDATE:
      return action.payload;

    default:
      return state;
  }
}
