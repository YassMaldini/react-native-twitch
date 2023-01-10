import RootState from '../store.types';

export const firebaseConfigSelector = ({ configuration: reducer }: RootState) => reducer.firebaseConfig;
