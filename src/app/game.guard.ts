import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {
  LoadAllItems,
  LoadCashShopItems,
  LoadPlayerStats,
  LoadShopItems,
  selectItemsLoaded,
  selectPlayerLoaded,
  State,
} from '@app/state';
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
        if (!loaded) this.store.dispatch(new LoadShopItems());
        if (!loaded) this.store.dispatch(new LoadCashShopItems());
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
}

@Injectable({ providedIn: "root" })
export class ItemsLoadedGuard implements CanActivate {
  constructor(private _store: Store<State>, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._store.select(selectItemsLoaded).pipe(
      switchMap(itemsLoaded => {
        if (!itemsLoaded) {
          this._router.navigate(["/"]);
        }
        return of(true);
      }),
      catchError(() => of(false)),
    );
  }
}
