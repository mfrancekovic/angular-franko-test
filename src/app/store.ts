import { createAction, props } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export const setPageName = createAction('[App] Set Page Name', props<{name: string}>());

export interface AppState {
  page: PageState;
}

export interface PageState {
  name: string;
}

export const initialState: PageState = {
  name: 'Initial',
};

const appReducer = createReducer(
  initialState,
  on(setPageName, (state, {name}) => ({ ...state, name })),
);

export function reducer(state: PageState | undefined, action: Action) {
  return appReducer(state, action);
}

export const selectPage = (state: AppState) => state.page;
export const selectPageName = createSelector(selectPage, page => page.name);