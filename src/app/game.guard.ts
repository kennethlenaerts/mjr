import { PlayerState } from "./player.state";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Emitter, Emittable } from "@ngxs-labs/emitter";
import { GameState } from "./game.state";
import { Observable, of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { Select, Store } from "@ngxs/store";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Navigate } from "@ngxs/router-plugin";
import { Player } from "./models";

@Injectable({ providedIn: "root" })
export class GameGuard implements CanActivate {
  @Emitter(GameState.loadAllItems)
  public loadAllItems: Emittable<number>;

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
  public loadPlayerStats: Emittable<Player>;

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
