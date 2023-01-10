import { Action } from 'redux';
import { Secrets } from '../../../types/models/secrets/secrets.types';
import { User } from '../../../types/models/gql/user.types';

export const SET_AUTHENTICATION_INFOS = 'SET_AUTHENTICATION_INFOS';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_SECRETS = 'SET_SECRETS';
export const SIGN_OUT = 'SIGN_OUT';

export interface SetAuthenticationInfosAction extends Action {
  type: typeof SET_AUTHENTICATION_INFOS;
  profile: User | null;
  secrets: Secrets | null;
}

export interface SetProfileAction extends Action {
  type: typeof SET_PROFILE;
  profile: User | null;
}

export interface SetSecretsAction extends Action {
  type: typeof SET_SECRETS;
  secrets: Secrets | null;
}

export interface SignOutAction extends Action {
  type: typeof SIGN_OUT;
}

type AuthenticationReducerActionsTypes =
  | SetAuthenticationInfosAction
  | SetProfileAction
  | SetSecretsAction
  | SignOutAction;

export default AuthenticationReducerActionsTypes;
