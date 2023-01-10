import 'expo-dev-client';

import { registerRootComponent } from 'expo';

import Application from './src/components/commons/Application/Application';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'fontFamily "Roboto-Regular" is not a system font and has not been loaded through Font.loadAsync.',
]);

registerRootComponent(Application);
