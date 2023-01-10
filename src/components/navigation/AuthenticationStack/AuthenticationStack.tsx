import { Platform } from 'react-native';
import LoginScreen from '../../screens/authentication/LoginScreen/LoginScreen';
import { Navigator, Screen } from './AuthenticationStack.navigator';

const AuthenticationStack = () => {
  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  );
};

export default AuthenticationStack;
