import { Injector } from '@angular/core';
import { HttpService } from '@app/http.service';
import { Item } from '@app/models';
import { Receiver } from '@ngxs-labs/emitter';
import { Selector, State, StateContext } from '@ngxs/store';
import { combineLatest, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

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

@State<GameStateModel>({
  name: "game",
  defaults,
})
export class GameState {
  static _httpService: HttpService;

  constructor(injector: Injector) {
    GameState._httpService = injector.get<HttpService>(HttpService);
  }

  @Receiver()
  static loadAllItems({
    patchState,
  }: StateContext<GameStateModel>): Observable<any> {
    return combineLatest(
      this._httpService.getItems(),
      this._httpService.getShopItems(),
      this._httpService.getCashShopItems(),
    ).pipe(
      tap(([items, shopItems, cashShopItems]: [Item[], number[], number[]]) =>
        patchState({ items, shopItems, cashShopItems }),
      ),
      tap(_ => patchState({ itemsLoaded: true })),
      take(1),
    );
  }

  @Receiver()
  static removeShopItem({ patchState, getState }, { payload: itemToDelete }) {
    const currentShopItems = getState().shopItems;
    const updatedShopItems = currentShopItems.filter(
      item => item !== itemToDelete,
    );

    patchState({ shopItems: updatedShopItems });
  }

  @Selector()
  static itemsLoaded(state: GameStateModel): boolean {
    return state.itemsLoaded;
  }

  @Selector()
  static items(state: GameStateModel): Item[] {
    return state.items;
  }

  @Selector()
  static shopItems(state: GameStateModel) {
    const allItems: Item[] = state.items;
    return state.shopItems.map((itemId: number) => {
      for (const item of allItems) if (item.id === itemId) return item;
    });
  }

  @Selector()
  static cashShopItems(state: GameStateModel) {
    const allItems: Item[] = state.items;
    return state.cashShopItems.map((itemId: number) => {
      for (const item of allItems) if (item.id === itemId) return item;
    });
  }
}
