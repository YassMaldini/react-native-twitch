import { Action } from 'redux';
import { FirebaseInstallationsResponse } from '../../../types/api/firebase/firebaseInstallations.types';
import { FirebaseConfig } from '../configurationReducer.types';

export const SET_FIREBASE_CONFIG = 'SET_FIREBASE_CONFIG';
export const RESET_CONFIGURATION_REDUCER = 'RESET_CONFIGURATION_REDUCER';

export interface SetFirebaseConfigAction extends Action {
  type: typeof SET_FIREBASE_CONFIG;
  firebaseConfig: FirebaseConfig;
}

export interface ResetConfigurationAction extends Action {
  type: typeof RESET_CONFIGURATION_REDUCER;
}

type ConfigurationReducerActionsTypes = SetFirebaseConfigAction | ResetConfigurationAction;

export default ConfigurationReducerActionsTypes;
