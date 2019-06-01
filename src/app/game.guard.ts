import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GameState } from '@app/game.state';
import { Player } from '@app/models';
import { PlayerState } from '@app/player.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Navigate } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class GameGuard implements CanActivate {
  @Emitter(GameState.loadAllItems)
  loadAllItems: Emittable<number>;

  canActivate(): Observable<boolean> {
    return this.loadAllItems.emit().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}

@Injectable({ providedIn: "root" })
export class PlayerGuard implements CanActivate {
  @Emitter(PlayerState.loadPlayerStats)
  loadPlayerStats: Emittable<Player>;

  canActivate(): Observable<boolean> {
    return this.loadPlayerStats.emit().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}

@Injectable({ providedIn: "root" })
export class ItemsLoadedGuard implements CanActivate {
  @Select(GameState.itemsLoaded) itemsLoaded$: Observable<boolean>;

  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.itemsLoaded$.pipe(
      switchMap(itemsLoaded => {
        if (!itemsLoaded) {
          this.store.dispatch(new Navigate(["/"]));
        }
        return of(true);
      }),
      catchError(() => of(false)),
    );
  }
}
