import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../RootStack/RootStack.types';

export type ConnectedStackParamsList = {
  ConnectedBottomTab: undefined;
};

export type ConnectedStackProps = NativeStackScreenProps<RootStackParamsList, 'ConnectedStack'>;
