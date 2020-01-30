import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface AppState {
    isLaunched?: boolean;
}

export const initialState: AppState = {
    isLaunched: false
};

const appReducer = createReducer(
    initialState,
    on(AppActions.appLaunched, state => ({ ...state, isLaunched: true }))
);

export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}
