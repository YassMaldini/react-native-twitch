import { Platform } from 'react-native';
import ConnectedBottomTab from '../ConnectedBottomTab/ConnectedBottomTab';
import { Navigator, Screen } from './ConnectedStack.navigator';

const ConnectedStack = () => {
  return (
    <Navigator
      initialRouteName="ConnectedBottomTab"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="ConnectedBottomTab" component={ConnectedBottomTab} />
    </Navigator>
  );
};

export default ConnectedStack;
