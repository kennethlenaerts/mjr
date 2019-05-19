import { HttpService } from "./http.service";
import { State, Selector, StateContext } from "@ngxs/store";
import { Receiver, EmitterAction } from "@ngxs-labs/emitter";
import { Injector } from "@angular/core";
import { Item, Player } from "./models";
import { Observable } from "rxjs";
import { tap, take } from "rxjs/operators";

export interface PlayerStateModel extends Player {
  playerLoaded: boolean;
}

const defaults: PlayerStateModel = {
  health: 0,
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
}
