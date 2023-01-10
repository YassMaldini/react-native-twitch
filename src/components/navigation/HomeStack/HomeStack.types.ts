import { Stream } from '../../../types/models/gql/stream.types';
import { VideoConnectionEdge } from '../../../types/models/gql/video.types';
import { CollectionsQueryEdge } from '../../../types/models/operations/queries/CollectionsQuery.types';
import { CommonScreensParamsList } from '../ConnectedBottomTab/CommonScreens/CommonScreens.types';

export type HomeStackParamsList = CommonScreensParamsList & {
  [HomeStackScreenList.HomeScreen]: undefined;
  [HomeStackScreenList.TestScreen]: undefined;
  [HomeStackScreenList.CollectionsListScreen]: { collectionsList: CollectionsQueryEdge[] };
  [HomeStackScreenList.VodListScreen]: { title: string, itemsList: VideoConnectionEdge[] };
};

export enum HomeStackScreenList {
  HomeScreen = 'HomeScreen',
  TestScreen = 'TestScreen',
  CollectionsListScreen = 'CollectionsListScreen',
  VodListScreen = 'VodListScreen'
}