import { State } from '..';
import { GameStateModel } from './game.reducer';
import { Item } from '@app/models';
import { createSelector } from '@ngrx/store';

export const selectGameState = (state: State) => state.game;

export const selectItemsLoaded = createSelector(
  selectGameState,
  (state: GameStateModel) => state.itemsLoaded,
);

export const selectShopItems = createSelector(
  selectGameState,
  (state: GameStateModel) => {
    const allItems: Item[] = state.items;
    return state.shopItems.map((itemId: number) => {
      for (const item of allItems) if (item.id === itemId) return item;
    });
  },
);

export const selectCashShopItems = createSelector(
  selectGameState,
  (state: GameStateModel) => {
    const allItems: Item[] = state.items;
    return state.cashShopItems.map((itemId: number) => {
      for (const item of allItems) if (item.id === itemId) return item;
    });
  },
);
