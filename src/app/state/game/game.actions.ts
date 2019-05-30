import { Item } from '@app/models';
import { Action } from '@ngrx/store';

export const LOAD_ALL_ITEMS = "[Game] Load all items";
export const LOAD_ALL_ITEMS_SUCCESS = "[Game] Load all items success";

export class LoadAllItems implements Action {
  readonly type = LOAD_ALL_ITEMS;
}

export class LoadAllItemsSuccess implements Action {
  readonly type = LOAD_ALL_ITEMS_SUCCESS;
  constructor(public payload: Item[]) {}
}

export const LOAD_SHOP_ITEMS = "[Game] Load shop items";
export const LOAD_SHOP_ITEMS_SUCCESS = "[Game] Load shop items success";

export class LoadShopItems implements Action {
  readonly type = LOAD_SHOP_ITEMS;
}

export class LoadShopItemsSuccess implements Action {
  readonly type = LOAD_SHOP_ITEMS_SUCCESS;
  constructor(public payload: number[]) {}
}

export const LOAD_CASH_SHOP_ITEMS = "[Game] Load cash shop items";
export const LOAD_CASH_SHOP_ITEMS_SUCCESS =
  "[Game] Load cash shop items success";

export class LoadCashShopItems implements Action {
  readonly type = LOAD_CASH_SHOP_ITEMS;
}

export class LoadCashShopItemsSuccess implements Action {
  readonly type = LOAD_CASH_SHOP_ITEMS_SUCCESS;
  constructor(public payload: number[]) {}
}

export type GameAction =
  | LoadAllItems
  | LoadAllItemsSuccess
  | LoadShopItems
  | LoadShopItemsSuccess
  | LoadCashShopItems
  | LoadCashShopItemsSuccess;
