import { State } from '..';
import { GameStateModel } from './../game';
import { PlayerStateModel } from './player.reducer';
import { Item } from '@app/models';
import { createSelector } from '@ngrx/store';

export const selectPlayerState = (state: State) => state.player;
export const selectGameState = (state: State) => state.game;

export const selectPlayerLoaded = createSelector(
  selectPlayerState,
  (playerState: PlayerStateModel) => playerState.playerLoaded,
);

export const selectPlayerStats = createSelector(
  selectPlayerState,
  (playerState: PlayerStateModel) => {
    const { items, ...playerStats } = playerState;
    return playerStats;
  },
);

export const selectPlayerItems = createSelector(
  selectPlayerState,
  selectGameState,
  (playerState: PlayerStateModel, gameState: GameStateModel) => {
    const allGameItems: Item[] = gameState.items;
    return playerState.items.map((itemId: number) => {
      for (const item of allGameItems) if (item.id === itemId) return item;
    });
  },
);

export const selectPlayerOpenItemSlots = createSelector(
  selectPlayerState,
  (playerState: PlayerStateModel) =>
    playerState.maxItemSlots - playerState.items.length,
);
