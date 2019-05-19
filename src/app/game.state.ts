import { HttpService } from "./http.service";
import { State, Selector, StateContext } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item } from "./models";
import { Observable } from "rxjs";
import { tap, take } from "rxjs/operators";

export interface GameStateModel {
  items: Item[];
}

const defaults: GameStateModel = {
  items: [],
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
      take(1),
    );
  }
}
