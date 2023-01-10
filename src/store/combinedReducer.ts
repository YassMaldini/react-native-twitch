import { combineReducers } from 'redux';
import authenticationReducer from './authentication/authenticationReducer';
import configurationReducer from './configuration/configurationReducer';
import mainReducer from './main/mainReducer';

const combinedReducer = combineReducers({
  main: mainReducer,
  authentication: authenticationReducer,
  configuration: configurationReducer,
});

export default combinedReducer;
