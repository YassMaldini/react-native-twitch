import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConnectedStackParamsList } from './ConnectedStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<ConnectedStackParamsList>();
