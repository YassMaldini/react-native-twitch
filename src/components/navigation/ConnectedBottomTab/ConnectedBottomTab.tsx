import { Navigator, Screen } from './ConnectedBottomTab.navigator';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import HomeStack from '../HomeStack/HomeStack';
import DiscoverStack from '../DiscoverStack/DiscoverStack';
import Image from '../../designSystem/Image/Image';
import { CurrentBottomTabIconProps } from './ConnectedBottomTab.types';
import { useSelector } from 'react-redux';
import { darkModeSelector } from '../../../store/main/mainReducerSelectors';

import FollowingDarkIcon from '../../../../assets/images/dark/navigation/ic_navigation_following_inactive.png'
import DiscoverDarkIcon from '../../../../assets/images/dark/navigation/ic_navigation_discover_inactive.png'
import BrowseDarkIcon from '../../../../assets/images/dark/navigation/ic_navigation_browse_inactive.png'
import SearchDarkIcon from '../../../../assets/images/dark/navigation/ic_search.png'

import FollowingLightIcon from '../../../../assets/images/light/navigation/ic_navigation_following_inactive.png'
import DiscoverLightIcon from '../../../../assets/images/light/navigation/ic_navigation_discover_inactive.png'
import BrowseLightIcon from '../../../../assets/images/light/navigation/ic_navigation_browse_inactive.png'
import SearchLightIcon from '../../../../assets/images/light/navigation/ic_search.png'

import FollowingActiveIcon from '../../../../assets/images/commons/navigation/ic_navigation_following_active.png'
import DiscoverActiveIcon from '../../../../assets/images/commons/navigation/ic_navigation_discover_active.png'
import BrowseActiveIcon from '../../../../assets/images/commons/navigation/ic_navigation_browse_inactive.png'
import SearchActiveIcon from '../../../../assets/images/commons/navigation/ic_search.png'
import BrowseStack from '../BrowseStack/BrowseStack';
import SearchStack from '../SearchStack/SearchStack';

const CurrentBottomTabIcon = ({ 
  images: {
    focused: focusedImage,
    light: lightImage,
    dark: darkImage
  }, 
  focused, 
  isDarkMode 
}: CurrentBottomTabIconProps): JSX.Element => {
  if (focused) {
    return <Image source={focusedImage} width={25} height={25} />
  } else {
    if (isDarkMode) {
      return <Image source={darkImage} width={25} height={25} />
    } else {
      return <Image source={lightImage} width={25} height={25} />
    }
  }
}

const ConnectedBottomTab = () => {
  const theme = useTheme<Theme>();
  const isDarkMode = useSelector(darkModeSelector);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 2,
          borderTopColor: theme.colors.secondaryBackground,
          backgroundColor: theme.colors.primaryBackground,
        },
      }}>
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarActiveTintColor: theme.colors.highlightedText,
          tabBarInactiveTintColor: theme.colors.primaryText,
          tabBarLabel: 'Following',
          tabBarIcon: ({ focused }) => CurrentBottomTabIcon({ 
            images: {
              focused: FollowingActiveIcon,
              light: FollowingLightIcon,
              dark: FollowingDarkIcon
            }, 
            focused, 
            isDarkMode 
          })
        }}
      />
      <Screen
        name="DiscoverStack"
        component={DiscoverStack}
        options={{
          tabBarActiveTintColor: theme.colors.highlightedText,
          tabBarInactiveTintColor: theme.colors.primaryText,
          tabBarLabel: 'Discover',
          tabBarIcon: ({ focused }) => CurrentBottomTabIcon({ 
            images: {
              focused: DiscoverActiveIcon,
              light: DiscoverLightIcon,
              dark: DiscoverDarkIcon
            }, 
            focused, 
            isDarkMode 
          })
        }}
      />
      <Screen
        name="BrowseStack"
        component={BrowseStack}
        options={{
          tabBarActiveTintColor: theme.colors.highlightedText,
          tabBarInactiveTintColor: theme.colors.primaryText,
          tabBarLabel: 'Browse',
          tabBarIcon: ({ focused }) => CurrentBottomTabIcon({ 
            images: {
              focused: BrowseActiveIcon,
              light: BrowseLightIcon,
              dark: BrowseDarkIcon
            }, 
            focused, 
            isDarkMode 
          })
        }}
      />
      <Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarActiveTintColor: theme.colors.highlightedText,
          tabBarInactiveTintColor: theme.colors.primaryText,
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => CurrentBottomTabIcon({ 
            images: {
              focused: SearchActiveIcon,
              light: SearchLightIcon,
              dark: SearchDarkIcon
            }, 
            focused, 
            isDarkMode 
          })
        }}
      />
    </Navigator>
  );
};

export default ConnectedBottomTab;
