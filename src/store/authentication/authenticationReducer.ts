import { Reducer } from 'redux';
import AuthenticationReducerActionsTypes, {
  SET_AUTHENTICATION_INFOS,
  SET_PROFILE,
  SET_SECRETS,
  SIGN_OUT,
} from './authenticationActions/authenticationActions.types';
import AuthenticationReducerState from './authenticationReducer.types';
import AUTHENTICATION_REDUCER_INITIAL_STATE from './authenticationReducerInitialState';

const authenticationReducer: Reducer<
  AuthenticationReducerState,
  AuthenticationReducerActionsTypes
> = (state = AUTHENTICATION_REDUCER_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION_INFOS: {
      return {
        ...state,
        profile: action.profile,
        secrets: action.secrets,
      };
    }

    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_SECRETS: {
      return {
        ...state,
        secrets: action.secrets,
      };
    }

    case SIGN_OUT: {
      return AUTHENTICATION_REDUCER_INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

export default authenticationReducer;
