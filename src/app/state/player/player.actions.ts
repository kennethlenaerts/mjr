import { Player } from '@app/models';
import { Action } from '@ngrx/store';

export const LOAD_PLAYER_STATS = "[Player] Load player stats";
export const LOAD_PLAYER_STATS_SUCCESS = "[Player] Load player stats success";

export class LoadPlayerStats implements Action {
  readonly type = LOAD_PLAYER_STATS;
}

export class LoadPlayerStatsSuccess implements Action {
  readonly type = LOAD_PLAYER_STATS_SUCCESS;
  constructor(public payload: Player) {}
}

export const UPDATE_HEALTH = "[Player] Update health";

export class UpdateHealth implements Action {
  readonly type = UPDATE_HEALTH;
  constructor(public payload: number) {}
}

export const REMOVE_ITEM = "[Player] Remove item";

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: number) {}
}

export const ADD_ITEM = "[Player] Add item";

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: number) {}
}

export const ADD_GOLD = "[Player] Add gold";

export class AddGold implements Action {
  readonly type = ADD_GOLD;
  constructor(public payload: number) {}
}

export const REMOVE_GOLD = "[Player] Remove gold";

export class RemoveGold implements Action {
  readonly type = REMOVE_GOLD;
  constructor(public payload: number) {}
}

export const REMOVE_GEM = "[Player] Remove Gem";

export class RemoveGem implements Action {
  readonly type = REMOVE_GEM;
  constructor(public payload: number) {}
}

export type PlayerAction =
  | LoadPlayerStats
  | LoadPlayerStatsSuccess
  | UpdateHealth
  | RemoveItem
  | AddItem
  | AddGold
  | RemoveGold
  | RemoveGem;
