import { HttpService } from "./http.service";
import { State, Selector, StateContext, Select, Store } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item, Player } from "./models";
import { Observable, of } from "rxjs";
import { tap, take, find } from "rxjs/operators";
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
  diamonds: 0,
  items: [],
  playerLoaded: false,
};

@State<PlayerStateModel>({
  name: "player",
  defaults,
})
export class PlayerState {
  private static httpService: HttpService;
  private static store: Store;

  // @Select(GameState.items) private static gameItems: Observable<Item[]>;

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
}
