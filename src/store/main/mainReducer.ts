import { Reducer } from 'redux';
import MainReducerActionsTypes, {
  RESET_MAIN_REDUCER,
  SAVE_SEARCH,
  SET_IS_DARK_MODE,
  SET_PLAYED_MEDIA,
  SET_SEARCH_HISTORY,
} from './mainActions/mainActions.types';
import MainReducerState from './mainReducer.types';
import MAIN_REDUCER_INITIAL_STATE from './mainReducerInitialState';

const mainReducer: Reducer<MainReducerState, MainReducerActionsTypes> = (
  state = MAIN_REDUCER_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SET_IS_DARK_MODE: {
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };
    }

    case SAVE_SEARCH: {
      return {
        ...state,
        searchHistory: state.searchHistory ? 
        (
          state.searchHistory.indexOf(action.searchToSave) === -1 ? [
            ...state.searchHistory,
            action.searchToSave
          ] : state.searchHistory
        ) : 
        [action.searchToSave],
      };
    }

    case SET_SEARCH_HISTORY: {
      return {
        ...state,
        searchHistory: action.searchHistory,
      };
    }

    case SET_PLAYED_MEDIA: {
      return {
        ...state,
        playedMedia: action.playedMedia,
      };
    }

    case RESET_MAIN_REDUCER: {
      return MAIN_REDUCER_INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default mainReducer;
