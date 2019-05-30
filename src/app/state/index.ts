import { gameReducer, GameStateModel } from './game';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  game: GameStateModel;
}

export const reducers: ActionReducerMap<State> = {
  game: gameReducer,
};
