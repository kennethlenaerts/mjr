import {
  ADD_PLAYER_GOLD,
  ADD_PLAYER_ITEM,
  LOAD_PLAYER_STATS,
  LOAD_PLAYER_STATS_SUCCESS,
  PlayerAction,
  REMOVE_PLAYER_GEM,
  REMOVE_PLAYER_GOLD,
  REMOVE_PLAYER_ITEM,
  UPDATE_PLAYER_HEALTH,
} from './player.actions';
import { Player } from '@app/models';

export interface PlayerStateModel extends Player {
  playerLoaded: boolean;
}

export const defaults: PlayerStateModel = {
  userName: "",
  health: 0,
  maxHealth: 0,
  level: 0,
  attack: 0,
  defense: 0,
  hearts: 0,
  gold: 0,
  gem: 0,
  items: [],
  playerLoaded: false,
  maxItemSlots: 0,
};

export function playerReducer(
  state = defaults,
  action: PlayerAction,
): PlayerStateModel {
  switch (action.type) {
    case LOAD_PLAYER_STATS: {
      return { ...state, playerLoaded: false };
    }

    case LOAD_PLAYER_STATS_SUCCESS: {
      console.log("hi");
      const player: Player = action.payload;
      return {
        ...state,
        ...player,
        playerLoaded: true,
      };
    }

    case UPDATE_PLAYER_HEALTH: {
      const healthUp = action.payload;
      const updatedHealth = state.health + healthUp;
      const maxHealth = state.maxHealth;
      const health = updatedHealth >= maxHealth ? maxHealth : updatedHealth;

      return {
        ...state,
        health,
      };
    }

    case REMOVE_PLAYER_ITEM: {
      const itemToDelete = action.payload;
      const currentItems = state.items;
      const updatedItems: number[] = currentItems.filter(
        item => item !== itemToDelete,
      );

      return { ...state, items: updatedItems };
    }

    case ADD_PLAYER_ITEM: {
      const itemToAdd = action.payload;
      const updatedItems: number[] = [...state.items, itemToAdd];
      return { ...state, items: updatedItems };
    }

    case ADD_PLAYER_GOLD: {
      const amount = action.payload;
      const updatedGold: number = state.gold + amount;
      return { ...state, gold: updatedGold };
    }

    case REMOVE_PLAYER_GOLD: {
      const amount = action.payload;
      const updatedGold: number = state.gold - amount;
      return { ...state, gold: updatedGold };
    }

    case REMOVE_PLAYER_GEM: {
      const amount = action.payload;
      const updatedGem: number = state.gem - amount;
      return { ...state, gem: updatedGem };
    }

    default: {
      return state;
    }
  }
}
