import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchStackParamsList } from './SearchStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<SearchStackParamsList>();
