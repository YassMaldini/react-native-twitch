import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticationStackParamsList } from './AuthenticationStack.types';

export const { Navigator, Screen, Group } =
  createNativeStackNavigator<AuthenticationStackParamsList>();
