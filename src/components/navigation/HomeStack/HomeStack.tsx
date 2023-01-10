import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useCallback, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { playedMediaSelector } from '../../../store/main/mainReducerSelectors';
import PlayedVideo from '../../commons/PlayedVideo/PlayedVideo';
import Box from '../../designSystem/Box/Box';
import CollectionsListScreen from '../../screens/connected/CollectionsListScreen/CollectionsListScreen';
import HomeScreen from '../../screens/connected/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/connected/ProfileScreen/ProfileScreen';
import TestScreen from '../../screens/connected/TestScreen/TestScreen';
import VideoScreen from '../../screens/connected/VideoScreen/VideoScreen';
import VodListScreen from '../../screens/connected/VodListScreen/VodListScreen';
import VodScreen from '../../screens/connected/VodScreen/VodScreen';
import { CommonScreensList } from '../ConnectedBottomTab/CommonScreens/CommonScreens';
import { RootContext } from '../RootStack/RootStack.context';
import { Navigator, Screen } from './HomeStack.navigator';
import { HomeStackScreenList } from './HomeStack.types';

const HomeStack = () => {
  return (
    <Box flex={1}>
      <Navigator
        initialRouteName={HomeStackScreenList.HomeScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name={HomeStackScreenList.HomeScreen} component={HomeScreen} />
        <Screen name={HomeStackScreenList.TestScreen} component={TestScreen} />
        <Screen name={HomeStackScreenList.CollectionsListScreen} component={CollectionsListScreen} />
        <Screen name={HomeStackScreenList.VodListScreen} component={VodListScreen} />
        {
          Object.values(CommonScreensList).map(({ name, component }) => (
            <Screen key={name} {...{ name, component }} />
          ))
        }
      </Navigator>
    </Box>
  );
};

export default HomeStack;
