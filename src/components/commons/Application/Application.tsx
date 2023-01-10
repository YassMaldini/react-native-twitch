import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from '../../../store/configureStore';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from '../../navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '../../../utils/i18n/i18n';

const Application = () => {
  const { store, persistor } = configureStore();
  const queryClient = new QueryClient();

  return (
    <StoreProvider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </QueryClientProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default Application;
