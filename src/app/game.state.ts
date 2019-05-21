import { HttpService } from "./http.service";
import { State, Selector, StateContext, createSelector } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item } from "./models";
import { Observable, combineLatest } from "rxjs";
import { tap, take, switchMap } from "rxjs/operators";

export interface GameStateModel {
  items: Item[];
  itemsLoaded: boolean;
  shopItems: number[];
}

const defaults: GameStateModel = {
  items: [],
  itemsLoaded: false,
  shopItems: [],
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
    ).pipe(
      tap(([items, shopItems]: [Item[], number[]]) =>
        patchState({ items, shopItems }),
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

  // public static items(ids: number[]) {
  //   return createSelector(
  //     [GameState],
  //     (state: GameStateModel) => {
  //       return state.items.filter((item: Item) => {
  //         for (const id of ids) {
  //           if (item.id === id) return true;
  //         }
  //         return false;
  //       });
  //     },
  //   );
  // }
}
