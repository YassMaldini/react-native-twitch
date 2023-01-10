import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverStackParamsList } from './DiscoverStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<DiscoverStackParamsList>();
