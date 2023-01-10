import { Store } from 'redux';
import { Persistor } from 'redux-persist/es/types';

import RootState from './store.types';

export type ConfigureStore = () => { store: Store<RootState>; persistor: Persistor };
