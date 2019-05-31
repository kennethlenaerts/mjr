import {
  LOAD_ALL_ITEMS,
  LOAD_CASH_SHOP_ITEMS,
  LOAD_SHOP_ITEMS,
  LoadAllItemsSuccess,
  LoadCashShopItemsSuccess,
  LoadShopItemsSuccess,
} from './game.actions';
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
    ofType(LOAD_ALL_ITEMS),
    switchMap(_ => this._httpService.getItems()),
    map((items: Item[]) => new LoadAllItemsSuccess(items)),
    catchError(() => of({ type: "[Game] Items loaded error." })),
  );

  @Effect()
  loadShopItems$ = this._actions$.pipe(
    ofType(LOAD_SHOP_ITEMS),
    switchMap(_ => this._httpService.getShopItems()),
    map((items: number[]) => new LoadShopItemsSuccess(items)),
    catchError(() => of({ type: "[Game] Items loaded error." })),
  );

  @Effect()
  loadCashShopItems$ = this._actions$.pipe(
    ofType(LOAD_CASH_SHOP_ITEMS),
    switchMap(_ => this._httpService.getCashShopItems()),
    map((items: number[]) => new LoadCashShopItemsSuccess(items)),
    catchError(() => of({ type: "[Game] Items loaded error." })),
  );
}
