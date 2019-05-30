import * as gameActions from './game.actions';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/http.service';
import { Item } from '@app/models';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class GameEffects {
  constructor(private _actions$: Actions, private _httpService: HttpService) {}

  @Effect()
  loadAllItems$ = this._actions$.pipe(
    ofType(gameActions.LOAD_ALL_ITEMS),
    switchMap(_ => {
      return this._httpService.getItems().pipe(
        map((items: Item[]) => new gameActions.LoadAllItemsSuccess(items)),
        catchError(() => of({ type: "[Game] Items loaded error." })),
      );
    }),
  );

  @Effect()
  loadShopItems$ = this._actions$.pipe(
    ofType(gameActions.LOAD_SHOP_ITEMS),
    switchMap(_ => {
      return this._httpService.getShopItems().pipe(
        map((items: number[]) => new gameActions.LoadShopItemsSuccess(items)),
        catchError(() => of({ type: "[Game] Items loaded error." })),
      );
    }),
  );

  @Effect()
  loadCashShopItems$ = this._actions$.pipe(
    ofType(gameActions.LOAD_CASH_SHOP_ITEMS),
    switchMap(_ => {
      return this._httpService.getCashShopItems().pipe(
        map(
          (items: number[]) => new gameActions.LoadCashShopItemsSuccess(items),
        ),
        catchError(() => of({ type: "[Game] Items loaded error." })),
      );
    }),
  );
}
