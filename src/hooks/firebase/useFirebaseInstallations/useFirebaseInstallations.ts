import { useQuery } from 'react-query';
import { FirebaseInstallationsResponse } from '../../../types/api/firebase/firebaseInstallations.types';
import { queryFirebaseInstallations } from './useFirebaseInstallations.actions';

export const USE_FIREBASE_INSTALLATIONS_QUERY_KEY = 'USE_FIREBASE_INSTALLATIONS';

const useFirebaseInstallations = (isAlreadyInitialised: boolean) => 
  useQuery<FirebaseInstallationsResponse, Error>(
    [USE_FIREBASE_INSTALLATIONS_QUERY_KEY],
    () => queryFirebaseInstallations(),
    {
      enabled: !isAlreadyInitialised,
    }
  );

export default useFirebaseInstallations;
