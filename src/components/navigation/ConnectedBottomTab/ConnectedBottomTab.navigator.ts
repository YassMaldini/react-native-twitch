import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ConnectedBottomTabParamsList } from './ConnectedBottomTab.types';

export const { Navigator, Screen } = createBottomTabNavigator<ConnectedBottomTabParamsList>();
