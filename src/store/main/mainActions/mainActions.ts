import {
  ResetMainAction,
  RESET_MAIN_REDUCER,
  SaveSearchAction,
  SAVE_SEARCH,
  SetIsDarkModeAction,
  SetPlayedMediaAction,
  SetSearchHistoryAction,
  SET_IS_DARK_MODE,
  SET_PLAYED_MEDIA,
  SET_SEARCH_HISTORY,
} from './mainActions.types';
import { Dispatch } from 'redux';
import { Stream } from '../../../types/models/gql/stream.types';

export const setDarkMode = (isDarkMode: boolean) => async (dispatch: Dispatch) => {
  dispatch<SetIsDarkModeAction>({
    type: SET_IS_DARK_MODE,
    isDarkMode,
  });
};

export const saveSearch = (searchToSave: string) => async (dispatch: Dispatch) => {
  dispatch<SaveSearchAction>({
    type: SAVE_SEARCH,
    searchToSave,
  });
};

export const setSearchHistory = (searchHistory: string[]) => async (dispatch: Dispatch) => {
  dispatch<SetSearchHistoryAction>({
    type: SET_SEARCH_HISTORY,
    searchHistory,
  });
};

export const setPlayedMedia = (playedMedia: Stream | null) => async (dispatch: Dispatch) => {
  dispatch<SetPlayedMediaAction>({
    type: SET_PLAYED_MEDIA,
    playedMedia,
  });
};

export const resetMain = () => async (dispatch: Dispatch) => {
  dispatch<ResetMainAction>({
    type: RESET_MAIN_REDUCER,
  });
};
