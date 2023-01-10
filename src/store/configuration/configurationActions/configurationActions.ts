import {
  ResetConfigurationAction,
  RESET_CONFIGURATION_REDUCER,
  SetFirebaseConfigAction,
  SET_FIREBASE_CONFIG,
} from './configurationActions.types';
import { Dispatch } from 'redux';
import { FirebaseConfig } from '../configurationReducer.types';

export const setFirebaseConfig = (firebaseConfig: FirebaseConfig) => async (dispatch: Dispatch) => {
  dispatch<SetFirebaseConfigAction>({
    type: SET_FIREBASE_CONFIG,
    firebaseConfig,
  });
};

export const resetConfiguration = () => async (dispatch: Dispatch) => {
  dispatch<ResetConfigurationAction>({
    type: RESET_CONFIGURATION_REDUCER,
  });
};
