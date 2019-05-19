import { HttpService } from "./http.service";
import { State, Selector, StateContext } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item, Player } from "./models";
import { Observable, of } from "rxjs";
import { tap, take } from "rxjs/operators";

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

  constructor(injector: Injector) {
    PlayerState.httpService = injector.get<HttpService>(HttpService);
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
  public static playerStats(state: PlayerStateModel) {
    const { items, ...playerStats } = state;
    return playerStats;
  }
}
