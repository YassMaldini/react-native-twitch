import { FirebaseInstallationsResponse } from "../../types/api/firebase/firebaseInstallations.types";

interface ConfigurationReducerState {
  firebaseConfig: FirebaseConfig;
}

export type FirebaseConfig = FirebaseInstallationsResponse | null;

export default ConfigurationReducerState;
