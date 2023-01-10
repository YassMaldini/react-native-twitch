import SearchScreen from '../../screens/connected/SearchScreen/SearchScreen';
import { CommonScreensList } from '../ConnectedBottomTab/CommonScreens/CommonScreens';
import { Navigator, Screen } from './SearchStack.navigator';
import { SearchStackScreenList } from './SearchStack.types';

const SearchStack = () => {
  return (
    <Navigator
      initialRouteName={SearchStackScreenList.SearchScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={SearchStackScreenList.SearchScreen} component={SearchScreen} />
      {
        Object.values(CommonScreensList).map(({ name, component }) => (
          <Screen key={name} {...{ name, component }} />
        ))
      }
    </Navigator>
  );
};

export default SearchStack;
