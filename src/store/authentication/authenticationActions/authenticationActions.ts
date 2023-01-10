import {
  SetProfileAction,
  SetSecretsAction,
  SET_PROFILE,
  SET_SECRETS,
  SIGN_OUT,
} from './authenticationActions.types';
import { QueryClient } from 'react-query';
import { User } from '../../../types/models/gql/user.types';
import { Dispatch } from 'redux';
import { Secrets } from '../../../types/models/secrets/secrets.types';
import PASSPORT_ENDPOINTS from '../../../utils/api/endpoints/passportEndpoint';
import { LoginRequestData, LoginSuccessResponse } from '../../../types/api/endpoints/passport/login.types';
import { CLIENT_ID, DEVICE_ID, passportApi } from '../../../utils/api/api';
import axios from 'axios';
import qs from 'qs';
import { setPlayedMedia } from '../../main/mainActions/mainActions';

export const setProfile = (profile: User) => (dispatch: Dispatch) => {
  dispatch<SetProfileAction>({
    type: SET_PROFILE,
    profile,
  });
};

export const setSecrets = (secrets: Secrets | null) => async (dispatch: Dispatch) => {
  dispatch<SetSecretsAction>({
    type: SET_SECRETS,
    secrets,
  });
};

export const loginWithUsernameAndPassword =
  ({
    client_id,
    force_twitchguard,
    password,
    undelete_user,
    username
  }: LoginRequestData) => async (dispatch: Dispatch) => {
    try {
      console.log({
        client_id,
        force_twitchguard,
        password,
        undelete_user,
        username
      })
      const { data } = await axios.post(
        '/login',
        qs.stringify({
          client_id,
          force_twitchguard,
          password,
          undelete_user,
          username
        }),
        {
          baseURL: 'https://passport.twitch.tv',
          headers: {
            'Host': 'passport.twitch.tv',
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '205',
            'Accept-Encoding': 'gzip, deflate',
            'Client-Id': CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v3+json',
            'Accept-Language': 'en-us',
            'X-Device-Id': DEVICE_ID,
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 13; sdk_gphone64_arm64 Build/TPB4.220624.004) tv.twitch.android.app/11.0.0/1100000',
            'Connection': 'close'
          }
        }
      )

      // const { json } = await fetch(
      //   'https://passport.twitch.tv/login/',
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Host': 'https://passport.twitch.tv',
      //       'Content-Type': 'application/json; charset=UTF-8',
      //       'Content-Length': '205',
      //       'Accept-Encoding': 'gzip, deflate',
      //       'Client-Id': CLIENT_ID,
      //       'Accept': 'application/vnd.twitchtv.v3+json',
      //       'Accept-Language': 'en-us',
      //       'X-Device-Id': DEVICE_ID,
      //       'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 13; sdk_gphone64_arm64 Build/TPB4.220624.004) tv.twitch.android.app/11.0.0/1100000',
      //       'Connection': 'close'
      //     },
      //     body: JSON.stringify({
      //       client_id,
      //       force_twitchguard,
      //       password,
      //       undelete_user,
      //       username
      //     })
      //   }
      // )

      // const data = await json()

      dispatch<SetSecretsAction>({
        type: SET_SECRETS,
        secrets: {
          token: (data as LoginSuccessResponse).access_token,
          deviceId: '',
          username: ''
        }
      });

      return data;
    } catch (e) {
      console.log(e)
      throw e
    }
    // const response = await PASSPORT_ENDPOINTS.login({
    //   client_id,
    //   force_twitchguard,
    //   password,
    //   undelete_user,
    //   username
    // });

    // const { problem, data } = response;

    // if (problem) {
    //   throw data;
    // }

    // dispatch<SetSecretsAction>({
    //   type: SET_SECRETS,
    //   secrets: {
    //     access_token: (data as LoginSuccessResponse).access_token
    //   }
    // });

    // return data;
  };

export const signOut = (queryClient: QueryClient) => async (dispatch: Dispatch) => {
  setPlayedMedia(null)(dispatch)
  queryClient.removeQueries();
  Object.keys(passportApi.headers).forEach((key) => passportApi.deleteHeader(key));
  dispatch<any>({
    type: SIGN_OUT,
  });
};
