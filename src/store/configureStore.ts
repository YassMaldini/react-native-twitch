import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import combinedReducer from './combinedReducer';
import { ConfigureStore } from './configureStore.types';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const configureStore: ConfigureStore = () => {
  const middlewares = [thunkMiddleware];
  const persistedReducer = persistReducer(persistConfig, combinedReducer);
  // const store = reduxConfigureStore({
  //   reducer: persistedReducer,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  // })
  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
