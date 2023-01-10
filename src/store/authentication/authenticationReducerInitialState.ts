import { LanguagePair } from '../../types/models/languages/languagePair.types';
import AuthenticationReducerState from './authenticationReducer.types';

const AUTHENTICATION_REDUCER_INITIAL_STATE = Object.freeze<AuthenticationReducerState>({
  profile: null,
  secrets: null,
  languagePair: LanguagePair.ENtoFR,
});

export default AUTHENTICATION_REDUCER_INITIAL_STATE;
