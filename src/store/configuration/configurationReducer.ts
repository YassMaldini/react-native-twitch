import { Reducer } from 'redux';
import ConfigurationReducerActionsTypes, {
  RESET_CONFIGURATION_REDUCER,
  SET_FIREBASE_CONFIG,
} from './configurationActions/configurationActions.types';
import ConfigurationReducerState from './configurationReducer.types';
import CONFIGURATION_REDUCER_INITIAL_STATE from './configurationReducerInitialState';

const configurationReducer: Reducer<ConfigurationReducerState, ConfigurationReducerActionsTypes> = (
  state = CONFIGURATION_REDUCER_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case SET_FIREBASE_CONFIG: {
      return {
        ...state,
        firebaseConfig: action.firebaseConfig,
      };
    }

    case RESET_CONFIGURATION_REDUCER: {
      return CONFIGURATION_REDUCER_INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default configurationReducer;
