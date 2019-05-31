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

export const UPDATE_PLAYER_HEALTH = "[Player] Update health";

export class UpdatePlayerHealth implements Action {
  readonly type = UPDATE_PLAYER_HEALTH;
  constructor(public payload: number) {}
}

export const REMOVE_PLAYER_ITEM = "[Player] Remove item";

export class RemovePlayerItem implements Action {
  readonly type = REMOVE_PLAYER_ITEM;
  constructor(public payload: number) {}
}

export const ADD_PLAYER_ITEM = "[Player] Add item";

export class AddPlayerItem implements Action {
  readonly type = ADD_PLAYER_ITEM;
  constructor(public payload: number) {}
}

export const ADD_PLAYER_GOLD = "[Player] Add gold";

export class AddPlayerGold implements Action {
  readonly type = ADD_PLAYER_GOLD;
  constructor(public payload: number) {}
}

export const REMOVE_PLAYER_GOLD = "[Player] Remove gold";

export class RemovePlayerGold implements Action {
  readonly type = REMOVE_PLAYER_GOLD;
  constructor(public payload: number) {}
}

export const REMOVE_PLAYER_GEM = "[Player] Remove Gem";

export class RemovePlayerGem implements Action {
  readonly type = REMOVE_PLAYER_GEM;
  constructor(public payload: number) {}
}

export type PlayerAction =
  | LoadPlayerStats
  | LoadPlayerStatsSuccess
  | UpdatePlayerHealth
  | RemovePlayerItem
  | AddPlayerItem
  | AddPlayerGold
  | RemovePlayerGold
  | RemovePlayerGem;
