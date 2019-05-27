import { GameStateModel } from "./game.reducer";
import { createSelector } from "@ngrx/store";
import { Item } from "@app/models";

export const itemsLoaded = createSelector(
  (state: GameStateModel) => state.itemsLoaded,
);

export const items = createSelector((state: GameStateModel) => state.items);

export const shopItems = createSelector((state: GameStateModel) => {
  const allItems: Item[] = state.items;
  return state.shopItems.map((itemId: number) => {
    for (const item of allItems) if (item.id === itemId) return item;
  });
});

export const cashShopItems = createSelector((state: GameStateModel) => {
  const allItems: Item[] = state.items;
  return state.cashShopItems.map((itemId: number) => {
    for (const item of allItems) if (item.id === itemId) return item;
  });
});
