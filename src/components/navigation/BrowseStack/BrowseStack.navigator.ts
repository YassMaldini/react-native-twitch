import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BrowseStackParamsList } from './BrowseStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<BrowseStackParamsList>();
