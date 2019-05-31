import { GameAction, LOAD_ALL_ITEMS, LOAD_ALL_ITEMS_SUCCESS } from './game.actions';
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
  action: GameAction,
): GameStateModel {
  switch (action.type) {
    case LOAD_ALL_ITEMS: {
      return { ...state, itemsLoaded: false };
    }

    case LOAD_ALL_ITEMS_SUCCESS: {
      const items = action.payload;
      return {
        ...state,
        items,
        itemsLoaded: true,
      };
    }

    default: {
      return state;
    }

    // case GameActions.ActionTypes.RemoveShopItem: {
    //   const itemToDelete = action.payload.itemToDelete;

    //   const currentShopItems = state.shopItems;
    //   const updatedShopItems = currentShopItems.filter(
    //     item => item !== itemToDelete,
    //   );

    //   return {
    //     ...state,
    //     shopItems: updatedShopItems,
    //   };
    // }
  }
}

export const getItemsLoaded = (state: GameStateModel) => state.itemsLoaded;
