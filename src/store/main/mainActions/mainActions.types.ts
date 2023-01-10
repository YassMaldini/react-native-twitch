import { Action } from 'redux';
import { Stream } from '../../../types/models/gql/stream.types';
import { Video } from '../../../types/models/gql/video.types';

export const SET_IS_DARK_MODE = 'SET_IS_DARK_MODE';
export const SAVE_SEARCH = 'SAVE_SEARCH';
export const SET_SEARCH_HISTORY = 'SET_SEARCH_HISTORY';
export const SET_PLAYED_MEDIA = 'SET_PLAYED_MEDIA';
export const RESET_MAIN_REDUCER = 'RESET_MAIN_REDUCER';

export interface SetIsDarkModeAction extends Action {
  type: typeof SET_IS_DARK_MODE;
  isDarkMode: boolean;
}

export interface SaveSearchAction extends Action {
  type: typeof SAVE_SEARCH;
  searchToSave: string;
}

export interface SetSearchHistoryAction extends Action {
  type: typeof SET_SEARCH_HISTORY;
  searchHistory: string[];
}

export interface SetPlayedMediaAction extends Action {
  type: typeof SET_PLAYED_MEDIA;
  playedMedia: Stream | null;
}

export interface ResetMainAction extends Action {
  type: typeof RESET_MAIN_REDUCER;
}

type MainReducerActionsTypes = SetIsDarkModeAction | SaveSearchAction | SetSearchHistoryAction | SetPlayedMediaAction | ResetMainAction;

export default MainReducerActionsTypes;
