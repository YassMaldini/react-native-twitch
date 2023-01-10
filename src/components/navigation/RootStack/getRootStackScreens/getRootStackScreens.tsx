import AuthenticationStack from '../../AuthenticationStack/AuthenticationStack';
import ConnectedStack from '../../ConnectedStack/ConnectedStack';
import { GetRootStackScreensOptions } from './getRootStackScreens.types';

const getRootStackScreens = ({ isSignedIn }: GetRootStackScreensOptions) => {
  if (isSignedIn) {
    return <ConnectedStack />;
  } else {
    return <AuthenticationStack />;
  }
};

export default getRootStackScreens;
