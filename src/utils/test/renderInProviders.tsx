import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { render } from '@testing-library/react-native';
import { ReactNode } from 'react';
import getTheme from '../theme/theme';
import configureStore from '../../store/configureStore';
import { BottomTabStackContext } from '../../components/navigation/BottomTabStack/BottomTabStack.context';
import { homeStackContextValueMock } from '../../../__mocks__/context/homeStackContextValueMock';

const { store, persistor } = configureStore();
const queryClient = new QueryClient();

const renderInProviders = (
  children: ReactNode,
  options?: {
    isHomeStack: boolean;
  }
) => {
  if (options?.isHomeStack) {
    return render(
      <StoreProvider {...{ store }}>
        <PersistGate {...{ persistor }}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={getTheme()}>
              <BottomSheetModalProvider>
                <BottomTabStackContext.Provider value={homeStackContextValueMock}>
                  {children}
                </BottomTabStackContext.Provider>
              </BottomSheetModalProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </StoreProvider>
    );
  } else {
    return render(
      <StoreProvider {...{ store }}>
        <PersistGate {...{ persistor }}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={getTheme()}>
              <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
};

export default renderInProviders;
