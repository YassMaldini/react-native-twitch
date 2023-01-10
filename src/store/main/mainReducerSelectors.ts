import RootState from '../store.types';

export const darkModeSelector = ({ main: reducer }: RootState) => reducer.isDarkMode;

export const searchHistorySelector = ({ main: reducer }: RootState) => reducer.searchHistory;

export const playedMediaSelector = ({ main: reducer }: RootState) => reducer.playedMedia;
