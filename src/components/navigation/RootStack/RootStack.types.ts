import { NavigatorScreenParams } from '@react-navigation/native';
import { Dispatch, SetStateAction } from 'react';
import { Game } from '../../../types/models/gql/game.types';
import { Stream } from '../../../types/models/gql/stream.types';
import { AuthenticationStackParamsList } from '../AuthenticationStack/AuthenticationStack.types';
import { ConnectedStackParamsList } from '../ConnectedStack/ConnectedStack.types';

export type RootStackParamsList = {
  NoNetworkAccess: undefined;
  AuthenticationStack: NavigatorScreenParams<AuthenticationStackParamsList>;
  ConnectedStack: NavigatorScreenParams<ConnectedStackParamsList>;
};

export interface RootContextProps {
  playedMedia?: Stream;
  setPlayedMedia: Dispatch<SetStateAction<Stream | undefined>>;
  bottomBarHeight: number;
  setBottomBarHeight: Dispatch<SetStateAction<number>>;
}