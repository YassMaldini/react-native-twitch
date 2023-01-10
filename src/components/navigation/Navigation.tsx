import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback, useMemo } from 'react';
import getTheme from '../../utils/theme/theme';
import RootStack from './RootStack/RootStack';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../store/main/mainReducerSelectors';
import { StatusBar } from 'expo-status-bar';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { DraxProvider } from 'react-native-drax';
import Box from '../designSystem/Box/Box';
import Loading from '../commons/Loading/Loading';
import { setPlayedMedia } from '../../store/main/mainActions/mainActions';
import { useDispatch } from 'react-redux';

const Navigation = (): JSX.Element => {

  const dispatch = useDispatch()

  setPlayedMedia(null)(dispatch)

  const isDarkMode = useSelector(darkModeSelector);

  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  const navigationTheme = useMemo(() => {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: theme.colors.primaryBackground,
      },
    };
  }, []);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Italic': require('../../../assets/fonts/Roboto/Roboto-Italic.ttf'),
    'Roobert-Medium': require('../../../assets/fonts/Roobert/roobert_medium.ttf'),
    'Roobert-Regular': require('../../../assets/fonts/Roobert/roobert_regular.ttf'),
    'Roobert-SemiBold': require('../../../assets/fonts/Roobert/roobert_semibold.ttf'),
    'Roobert-Bold': require('../../../assets/fonts/Roobert/roobert_bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} translucent />
      <ThemeProvider {...{ theme }}>
        <BottomSheetModalProvider>
          <DraxProvider>
            <SafeAreaProvider style={{ backgroundColor: theme.colors.primaryBackground }}>
              <Box
                flex={1}
                onLayout={onLayoutRootView}>
                <RootStack />
              </Box>
            </SafeAreaProvider>
          </DraxProvider>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default Navigation;
