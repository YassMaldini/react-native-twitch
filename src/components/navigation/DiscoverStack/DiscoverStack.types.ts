import { VerticalDirectoryList } from "../../screens/connected/VerticalDirectoryScreen/VerticalDirectoryScreen.types";
import { CommonScreensParamsList } from "../ConnectedBottomTab/CommonScreens/CommonScreens.types";

export type DiscoverStackParamsList = CommonScreensParamsList & {
  [DiscoverStackScreenList.DiscoverScreen]: undefined;
  [DiscoverStackScreenList.DiscoverScreenDev]: undefined;
  [DiscoverStackScreenList.VerticalDirectoryScreen]: { type: VerticalDirectoryList };
};

export enum DiscoverStackScreenList {
  DiscoverScreen = 'DiscoverScreen',
  DiscoverScreenDev = 'DiscoverScreenDev',
  VerticalDirectoryScreen = 'VerticalDirectoryScreen'
}