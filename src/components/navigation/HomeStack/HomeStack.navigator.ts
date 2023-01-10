import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamsList } from './HomeStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<HomeStackParamsList>();
