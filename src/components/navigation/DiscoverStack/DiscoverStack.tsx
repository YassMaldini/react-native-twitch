import DiscoverScreen from '../../screens/connected/DiscoverScreen/DiscoverScreen';
import DiscoverScreenDev from '../../screens/connected/DiscoverScreen/DiscoverScreenDev';
import VerticalDirectoryScreen from '../../screens/connected/VerticalDirectoryScreen/VerticalDirectoryScreen';
import { CommonScreensList } from '../ConnectedBottomTab/CommonScreens/CommonScreens';
import { Navigator, Screen } from './DiscoverStack.navigator';
import { DiscoverStackScreenList } from './DiscoverStack.types';

const DiscoverStack = () => {
  return (
    <Navigator
      initialRouteName={DiscoverStackScreenList.DiscoverScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={DiscoverStackScreenList.DiscoverScreen} component={DiscoverScreen} />
      <Screen name={DiscoverStackScreenList.DiscoverScreenDev} component={DiscoverScreenDev} />
      <Screen name={DiscoverStackScreenList.VerticalDirectoryScreen} component={VerticalDirectoryScreen} />
      {
        Object.values(CommonScreensList).map(({ name, component }) => (
          <Screen key={name} {...{ name, component }} />
        ))
      }
    </Navigator>
  );
};

export default DiscoverStack;
