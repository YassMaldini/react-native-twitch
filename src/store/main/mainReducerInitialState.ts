import MainReducerState from './mainReducer.types';

const MAIN_REDUCER_INITIAL_STATE = Object.freeze<MainReducerState>({
  isDarkMode: true,
  searchHistory: [],
  playedMedia: null
});

export default MAIN_REDUCER_INITIAL_STATE;
