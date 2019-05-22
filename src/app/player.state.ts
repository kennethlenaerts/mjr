import { Injector } from '@angular/core';
import { GameState } from '@app/game.state';
import { HttpService } from '@app/http.service';
import { Item, Player } from '@app/models';
import { Receiver } from '@ngxs-labs/emitter';
import { Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

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
  static _httpService: HttpService;
  static _store: Store;

  constructor(injector: Injector) {
    PlayerState._httpService = injector.get<HttpService>(HttpService);
    PlayerState._store = injector.get<Store>(Store);
  }

  /** Load the player object in memory. */
  @Receiver()
  static loadPlayerStats({
    patchState,
  }: StateContext<PlayerStateModel>): Observable<Player> {
    return this._httpService.getPlayerStats().pipe(
      tap((player: Player) => patchState({ ...player })),
      tap(_ => patchState({ playerLoaded: true })),
      take(1),
    );
  }

  @Receiver()
  static updateHealth(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: healthUp }: { payload: number },
  ): void {
    const updatedHealth = getState().health + healthUp;
    const maxHealth = getState().maxHealth;
    const health = updatedHealth >= maxHealth ? maxHealth : updatedHealth;

    patchState({ health });
  }

  @Receiver()
  static removeItem(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: itemToDelete }: { payload: number },
  ): void {
    const currentItems = getState().items;
    const updatedItems: number[] = currentItems.filter(
      item => item !== itemToDelete,
    );

    patchState({ items: updatedItems });
  }

  @Receiver()
  static addItem(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: itemToAdd }: { payload: number },
  ): void {
    const updatedItems: number[] = [...getState().items, itemToAdd];
    patchState({ items: updatedItems });
  }

  @Receiver()
  static addGold(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: amount }: { payload: number },
  ): void {
    const updatedGold: number = getState().gold + amount;
    patchState({ gold: updatedGold });
  }

  @Receiver()
  static removeGold(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: amount }: { payload: number },
  ): void {
    const updatedGold: number = getState().gold - amount;
    patchState({ gold: updatedGold });
  }

  @Receiver()
  static removeGem(
    { patchState, getState }: StateContext<PlayerStateModel>,
    { payload: amount }: { payload: number },
  ): void {
    const updatedGem: number = getState().gem - amount;
    patchState({ gem: updatedGem });
  }

  @Selector()
  static stats(state: PlayerStateModel): Partial<Player> {
    const { items, ...playerStats } = state;
    return playerStats;
  }

  @Selector()
  static items(state: PlayerStateModel) {
    const allGameItems: Item[] = this._store.selectSnapshot(GameState.items);
    return state.items.map((itemId: number) => {
      for (const item of allGameItems) if (item.id === itemId) return item;
    });
  }

  @Selector()
  static openItemSlots(state: PlayerStateModel) {
    return state.maxItemSlots - state.items.length;
  }
}
