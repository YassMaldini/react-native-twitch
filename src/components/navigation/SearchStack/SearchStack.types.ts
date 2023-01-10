import { CommonScreensParamsList } from "../ConnectedBottomTab/CommonScreens/CommonScreens.types";

export type SearchStackParamsList = CommonScreensParamsList & {
  [SearchStackScreenList.SearchScreen]: undefined;
};

export enum SearchStackScreenList {
  SearchScreen = 'SearchScreen',
}