import { User } from "../../types/models/gql/user.types";
import { UserbyLoginQueryResponse } from "../../types/models/operations/UserbyLoginQuery.types";
import { graphqlApi } from "../../utils/api/api";
import { UseUserbyLoginOptions } from "./useUserbyLogin.types";

export const queryUserbyLogin = async ({ username }: UseUserbyLoginOptions) => {
  const response = await graphqlApi.post<Array<UserbyLoginQueryResponse>>(
    'https://gql.twitch.tv/gql',
    [
      {
        'operationName': 'UserbyLoginQuery',
        'variables': {
          'login': username
        },
        'extensions': {
          'persistedQuery': {
            'version': 1,
            'sha256Hash': 'cd8adb6075ae0e97c1deb69b5b7ad35a1b916779bac38b5e81b9e7b633ae7fd8'
          }
        }
      }
    ]
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return (data as UserbyLoginQueryResponse[])[0].data.user as User;
}