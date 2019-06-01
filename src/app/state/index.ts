import { GameEffects, gameReducer, GameStateModel } from './game';
import { PlayerEffects, playerReducer, PlayerStateModel } from './player';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  game: GameStateModel;
  player: PlayerStateModel;
}

export const reducers: ActionReducerMap<State> = {
  game: gameReducer,
  player: playerReducer,
};

export const effects: any[] = [PlayerEffects, GameEffects];

export * from "./game";
export * from "./player";
