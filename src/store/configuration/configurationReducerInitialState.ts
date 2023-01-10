import ConfigurationReducerState from "./configurationReducer.types";

const CONFIGURATION_REDUCER_INITIAL_STATE = Object.freeze<ConfigurationReducerState>({
  firebaseConfig: null,
});

export default CONFIGURATION_REDUCER_INITIAL_STATE;
