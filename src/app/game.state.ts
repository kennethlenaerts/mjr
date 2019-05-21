import { HttpService } from "./http.service";
import { State, Selector, StateContext, createSelector } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item } from "./models";
import { Observable } from "rxjs";
import { tap, take } from "rxjs/operators";

export interface GameStateModel {
  items: Item[];
  itemsLoaded: boolean;
}

const defaults: GameStateModel = {
  items: [],
  itemsLoaded: false,
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
  }: StateContext<GameStateModel>): Observable<Item[]> {
    return this.httpService.getItems().pipe(
      tap((items: Item[]) => patchState({ items })),
      tap(_ => patchState({ itemsLoaded: true })),
      take(1),
    );
  }

  @Selector()
  public static itemsLoaded(state: GameStateModel): boolean {
    return state.itemsLoaded;
  }

  @Selector()
  public static items(state: GameStateModel): Item[] {
    return state.items;
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
