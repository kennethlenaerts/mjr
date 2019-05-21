import { HttpService } from "./http.service";
import { State, Selector, StateContext, Store } from "@ngxs/store";
import { Receiver } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item, Player } from "./models";
import { Observable } from "rxjs";
import { tap, take } from "rxjs/operators";
import { GameState } from "./game.state";

export interface PlayerStateModel extends Player {
  playerLoaded: boolean;
}

const defaults: PlayerStateModel = {
  userName: "",
  health: 0,
  maxHealth: 0,
  level: 0,
  attack: 0,
  defense: 0,
  hearts: 0,
  gold: 0,
  gem: 0,
  items: [],
  playerLoaded: false,
  maxItemSlots: 0,
};

@State<PlayerStateModel>({
  name: "player",
  defaults,
})
export class PlayerState {
  private static httpService: HttpService;
  private static store: Store;

  constructor(injector: Injector) {
    PlayerState.httpService = injector.get<HttpService>(HttpService);
    PlayerState.store = injector.get<Store>(Store);
  }

  /** Load the player object in memory. */
  @Receiver()
  public static loadPlayerStats({
    patchState,
  }: StateContext<PlayerStateModel>): Observable<Player> {
    return this.httpService.getPlayerStats().pipe(
      tap((player: Player) => patchState({ ...player })),
      tap(_ => patchState({ playerLoaded: true })),
      take(1),
    );
  }

  @Receiver()
  public static updateHealth(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: healthUp }: { payload: number },
  ): void {
    const updatedHealth = getState().health + healthUp;
    const maxHealth = getState().maxHealth;
    const health = updatedHealth >= maxHealth ? maxHealth : updatedHealth;

    patchState({ health });
  }

  @Receiver()
  public static removeItem(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: itemToDelete }: { payload: number },
  ): void {
    const currentItems = getState().items;
    const updatedItems: number[] = currentItems.filter(
      item => item !== itemToDelete,
    );

    patchState({ items: updatedItems });
  }

  @Selector()
  public static stats(state: PlayerStateModel): Partial<Player> {
    const { items, ...playerStats } = state;
    return playerStats;
  }

  /** Map the players inventory item ids to the item values */
  @Selector()
  public static items(state: PlayerStateModel) {
    const allGameItems: Item[] = this.store.selectSnapshot(GameState.items);
    return state.items.map((itemId: number) => {
      for (const item of allGameItems) if (item.id === itemId) return item;
    });
  }

  @Selector()
  public static openItemSlots(state: PlayerStateModel) {
    return state.maxItemSlots - state.items.length;
  }
}
