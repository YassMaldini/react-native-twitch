import { CommonScreensParamsList } from "../ConnectedBottomTab/CommonScreens/CommonScreens.types";

export type BrowseStackParamsList = CommonScreensParamsList & {
  [BrowseStackScreenList.BrowseScreen]: undefined;
};

export enum BrowseStackScreenList {
  BrowseScreen = 'BrowseScreen',
}