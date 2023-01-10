import { IsFollowingGameQueryResponse } from "../../../../types/models/operations/queries/IsFollowingGameQuery.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { graphqlApi } from "../../api";

export const IS_FOLLOWING_GAME_QUERY_KEY = "IS_FOLLOWING_GAME"

export const IsFollowingGameQuery = async (name: string) => {
  const response = await graphqlApi.post<IsFollowingGameQueryResponse>(
    'https://gql.twitch.tv/gql',
    IsFollowingGameQueryOperation(name)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as IsFollowingGameQueryResponse['data'];
}

export const IsFollowingGameQueryOperation: (name: string) => QueryOperation = (name) => ({
  "operationName": "IsFollowingGameQuery",
  "variables": {
    "name": name
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "8fe9b9e32308c2c381f154ec475b687c3903ddd44d0e3ab648e45b9059397996"
    }
  }
})