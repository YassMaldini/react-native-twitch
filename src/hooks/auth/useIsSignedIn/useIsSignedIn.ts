import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { secretsSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { CLIENT_ID, DEVICE_ID, graphqlApi } from '../../../utils/api/api';

const useIsSignedIn = () => {
  const secrets = useSelector(secretsSelector);

  console.log('secrets', secrets)

  return useMemo(() => {
    const isSignedId = secrets !== null;

    if (isSignedId) {
      graphqlApi.setHeaders({
        'Accept': '*/*',
        'Accept-Language': 'en-GB',
        'Authorization': `OAuth ${secrets.token}`,
        'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
        'Connection': 'keep-alive',
        'Content-Type': 'text/plain;charset=UTF-8',
        'Origin': 'https://www.twitch.tv',
        'Referer': 'https://www.twitch.tv/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'X-Device-Id': secrets.deviceId
      });
    }

    return isSignedId;
  }, [secrets]);
};

export default useIsSignedIn;
