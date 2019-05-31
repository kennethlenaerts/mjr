import { LoadPlayerStats } from './state/player/player.actions';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { State } from '@app/state';
import { LoadAllItems, selectItemsLoaded } from '@app/state/game';
import { selectPlayerLoaded } from '@app/state/player';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class GameGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectItemsLoaded).pipe(
      tap(loaded => {
        if (!loaded) this.store.dispatch(new LoadAllItems());
      }),
      filter(loaded => loaded),
      take(1),
      switchMap(_ => of(true)),
      catchError(_ => of(false)),
    );
  }
}

@Injectable({ providedIn: "root" })
export class PlayerGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectPlayerLoaded).pipe(
      tap(loaded => {
        if (!loaded) this.store.dispatch(new LoadPlayerStats());
      }),
      filter(loaded => loaded),
      take(1),
      switchMap(_ => of(true)),
      catchError(_ => of(false)),
    );
  }

  // canActivate(): Observable<boolean> {
  //   return this.loadPlayerStats.emit().pipe(
  //     switchMap(() => of(true)),
  //     catchError(() => of(false)),
  //   );
  // }
}

// @Injectable({ providedIn: "root" })
// export class ItemsLoadedGuard implements CanActivate {
//   @Select(GameState.itemsLoaded) itemsLoaded$: Observable<boolean>;

//   constructor(private store: Store) {}

//   canActivate(): Observable<boolean> {
//     return this.itemsLoaded$.pipe(
//       switchMap(itemsLoaded => {
//         if (!itemsLoaded) {
//           this.store.dispatch(new Navigate(["/"]));
//         }
//         return of(true);
//       }),
//       catchError(() => of(false)),
//     );
//   }
// }
