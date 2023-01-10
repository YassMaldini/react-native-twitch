export type ConnectedBottomTabParamsList = {
  HomeStack: undefined;
  DiscoverStack: undefined;
  BrowseStack: undefined;
  SearchStack: undefined;
};

export interface CurrentBottomTabIconProps {
  images: {
    focused: any,
    light: any,
    dark: any
  };
  focused: boolean;
  isDarkMode: boolean;
}