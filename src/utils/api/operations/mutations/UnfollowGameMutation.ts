import { UnfollowGameError, UnfollowGameMutationRepsonse } from "../../../../types/models/operations/mutations/UnfollowGameMutation.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { graphqlApi } from "../../api";

export const UnfollowGameMutation = async (gameID: string) => {
  console.log(UnfollowGameMutationOperation(gameID))
  const response = await graphqlApi.post<UnfollowGameMutationRepsonse>(
    'https://gql.twitch.tv/gql',
    UnfollowGameMutationOperation(gameID)
  );

  const { data, problem } = response;

  const error = data?.errors

  if (problem || error) {
    if (error) {
      throw error[0] as UnfollowGameError
    }
    throw data
  }

  return data?.data as UnfollowGameMutationRepsonse['data'];
}

export const UnfollowGameMutationOperation: (gameID: string) => QueryOperation = (gameID) => ({
  "operationName": "UnfollowGameMutation",
  "variables": {
    "gameID": gameID
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "f5980821129ad54014918f94ab62e54199e100098a6a3ce0dfd764f28fb6722f"
    }
  }
})