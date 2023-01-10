import BrowseScreen from '../../screens/connected/BrowseScreen/BrowseScreen';
import { CommonScreensList } from '../ConnectedBottomTab/CommonScreens/CommonScreens';
import { Navigator, Screen } from './BrowseStack.navigator';
import { BrowseStackScreenList } from './BrowseStack.types';

const BrowseStack = () => {
  return (
    <Navigator
      initialRouteName={BrowseStackScreenList.BrowseScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={BrowseStackScreenList.BrowseScreen} component={BrowseScreen} />
      {
        Object.values(CommonScreensList).map(({ name, component }) => (
          <Screen key={name} {...{ name, component }} />
        ))
      }
    </Navigator>
  );
};

export default BrowseStack;
