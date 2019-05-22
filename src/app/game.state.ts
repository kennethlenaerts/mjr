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
  private static httpService: HttpService;

  constructor(injector: Injector) {
    GameState.httpService = injector.get<HttpService>(HttpService);
  }

  @Receiver()
  public static loadAllItems({
    patchState,
  }: StateContext<GameStateModel>): Observable<any> {
    return combineLatest(
      this.httpService.getItems(),
      this.httpService.getShopItems(),
      this.httpService.getCashShopItems(),
    ).pipe(
      tap(([items, shopItems, cashShopItems]: [Item[], number[], number[]]) =>
        patchState({ items, shopItems, cashShopItems }),
      ),
      tap(_ => patchState({ itemsLoaded: true })),
      take(1),
    );
  }

  @Receiver()
  public static removeShopItem(
    { patchState, getState }: StateContext<GameStateModel>,
    { payload: itemToDelete }: { payload: number },
  ): void {
    const currentShopItems = getState().shopItems;
    const updatedShopItems: number[] = currentShopItems.filter(
      item => item !== itemToDelete,
    );

    patchState({ shopItems: updatedShopItems });
  }

  @Selector()
  public static itemsLoaded(state: GameStateModel): boolean {
    return state.itemsLoaded;
  }

  @Selector()
  public static items(state: GameStateModel): Item[] {
    return state.items;
  }

  @Selector()
  public static shopItems(state: GameStateModel) {
    const allItems: Item[] = state.items;
    return state.shopItems.map((itemId: number) => {
      for (const item of allItems) if (item.id === itemId) return item;
    });
  }

  @Selector()
  public static cashShopItems(state: GameStateModel) {
    const allItems: Item[] = state.items;
    return state.cashShopItems.map((itemId: number) => {
      for (const item of allItems) if (item.id === itemId) return item;
    });
  }
}
