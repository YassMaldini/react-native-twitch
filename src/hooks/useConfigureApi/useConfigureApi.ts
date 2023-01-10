import { ApiResponse } from 'apisauce';
import { useCallback, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/authentication/authenticationActions/authenticationActions';
import { secretsSelector } from '../../store/authentication/authenticationReducerSelectors';
import { graphqlApi } from '../../utils/api/api';

const PREFIX = '[useConfigureApi]';

export const useConfigureApi = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const secrets = useSelector(secretsSelector);

  const monitor = useCallback(
    (response: ApiResponse<any, any>) => {
      if (response.status === 403) {
        console.log(PREFIX, 'Detected 403 status code... Request url was:', response.config?.url);
        signOut(queryClient)(dispatch);
      }
    },
    [queryClient]
  );

  useEffect(() => {
    if (secrets) {
      console.log(PREFIX, 'Adding secrets headers...');
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
    else {
      console.log(PREFIX, 'Removing secrets headers...');
      Object.keys(graphqlApi.headers).forEach((headerKey) => {
        graphqlApi.deleteHeader(headerKey);
      });

      
    }
  }, [secrets]);

  useEffect(() => {
    console.log(PREFIX, `api base url: ${graphqlApi.getBaseURL()}`);

    graphqlApi.addMonitor(monitor);
  }, [monitor]);

  return graphqlApi;
};
