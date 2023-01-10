import { SceneMap } from "react-native-tab-view";
import { SearchCategoriesTab } from "./SearchScreenTabs/SearchCategoriesTab";
import { SearchChannelsTab } from "./SearchScreenTabs/SearchChannelsTab";
import { SearchTopTab } from "./SearchScreenTabs/SearchTopTab";
import { SearchVideosTab } from "./SearchScreenTabs/SearchVideosTab";

export enum SearchScreenTabsList {
  Top = 'Top',
  Channels = 'Channels',
  Categories = 'Categories',
  Videos = 'Videos'
}

export const SearchScreenTabs = Object.freeze({
  [SearchScreenTabsList.Top]: {
    key: SearchScreenTabsList.Top,
    title: SearchScreenTabsList.Top,
    component: SearchTopTab
  },
  [SearchScreenTabsList.Channels]: {
    key: SearchScreenTabsList.Channels,
    title: SearchScreenTabsList.Channels,
    component: SearchChannelsTab
  },
  [SearchScreenTabsList.Categories]: {
    key: SearchScreenTabsList.Categories,
    title: SearchScreenTabsList.Categories,
    component: SearchCategoriesTab
  },
  [SearchScreenTabsList.Videos]: {
    key: SearchScreenTabsList.Videos,
    title: SearchScreenTabsList.Videos,
    component: SearchVideosTab
  }
})

const sceneData = Object.values(SearchScreenTabs).reduce(
  (acc, { key, component: Component }) => ({
    ...acc,
    [key.toLocaleLowerCase() as string]: Component
  }),
  {}
)

export const renderSearchScene = SceneMap(sceneData)