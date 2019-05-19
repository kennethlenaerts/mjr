import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Emitter, Emittable } from "@ngxs-labs/emitter";
import { GameState } from "./game.state";
import { Observable, of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class GameGuard implements CanActivate {
  @Emitter(GameState.loadAllItems)
  public loadAllItems: Emittable<number>;

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.loadAllItems.emit().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}
