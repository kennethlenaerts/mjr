import * as GameActions from './game.actions';
import { Item } from '@app/models';

export interface GameStateModel {
  items: Item[];
  itemsLoaded: boolean;
  shopItems: number[];
  cashShopItems: number[];
}

const defaults: GameStateModel = {
  items: [],
  itemsLoaded: false,
  shopItems: [],
  cashShopItems: [],
};

export function gameReducer(
  state = defaults,
  action: GameActions.ActionsUnion,
): GameStateModel {
  switch (action.type) {
    case GameActions.ActionTypes.RemoveShopItem: {
      const itemToDelete = action.payload.itemToDelete;

      const currentShopItems = state.shopItems;
      const updatedShopItems = currentShopItems.filter(
        item => item !== itemToDelete,
      );

      return {
        ...state,
        shopItems: updatedShopItems,
      };
    }
  }
}
