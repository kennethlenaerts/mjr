import { Action } from '@ngrx/store';


export enum ActionTypes {
  LoadAllItems = "[Game] Load all the game possible items.",
  RemoveShopItem = "[Game] Remove a single item from the shop",
}

export class LoadAllItems implements Action {
  readonly type = ActionTypes.LoadAllItems;
}

export class RemoveShopItem implements Action {
  readonly type = ActionTypes.RemoveShopItem;
  constructor(public payload: { itemToDelete: number }) {}
}
