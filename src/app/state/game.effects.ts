import { HttpService } from "@app/http.service";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { combineLatest, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Item } from "@app/models";
import { ActionTypes } from "./game.actions";

@Injectable()
export class GameEffects {
  constructor(private _actions$: Actions, private _httpService: HttpService) {}

  @Effect()
  loadAllItems$ = this._actions$.pipe(
    ofType(ActionTypes.RemoveShopItem),

    mergeMap(_ =>
      combineLatest(
        this._httpService.getItems(),
        this._httpService.getShopItems(),
        this._httpService.getCashShopItems(),
      ).pipe(
        map(
          ([items, shopItems, cashShopItems]: [
            Item[],
            number[],
            number[]
          ]) => ({
            type: "[Game] Items loaded success.",
            payload: { items, shopItems, cashShopItems },
          }),
        ),
        catchError(() => of({ type: "[Game] Items loaded error." })),
      ),
    ),
  );
}
