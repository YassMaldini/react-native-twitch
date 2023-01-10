import { useQuery } from "react-query";
import { User } from "../../types/models/gql/user.types";
import useIsSignedIn from "../auth/useIsSignedIn/useIsSignedIn";
import { queryUserbyLogin } from "./useUserbyLogin.query";
import { UseUserbyLoginOptions } from "./useUserbyLogin.types";

export const USE_USER_BY_LOGIN_QUERY_KEY = "USE_USER_BY_LOGIN";

export const useUserbyLogin = ({ username }: UseUserbyLoginOptions) => {
  const isSignedIn = useIsSignedIn()
  return useQuery<User, Error>([USE_USER_BY_LOGIN_QUERY_KEY], () =>
    queryUserbyLogin({ username }),
    {
      enabled: isSignedIn
    }
  );
}