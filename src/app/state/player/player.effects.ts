import { LOAD_PLAYER_STATS, LoadPlayerStatsSuccess } from './player.actions';
import { Injectable } from '@angular/core';
import { HttpService } from '@app/http.service';
import { Player } from '@app/models';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class PlayerEffects {
  constructor(private _actions$: Actions, private _httpService: HttpService) {}

  @Effect()
  loadPlayerStats$ = this._actions$.pipe(
    ofType(LOAD_PLAYER_STATS),
    tap(_ => console.log("effect")),
    switchMap(_ => this._httpService.getPlayerStats()),
    map((player: Player) => new LoadPlayerStatsSuccess(player)),
    catchError(() => of({ type: "[Player] Loading player stats error." })),
  );
}
