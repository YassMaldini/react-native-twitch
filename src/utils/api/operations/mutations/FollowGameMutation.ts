import { FollowGameError, FollowGameMutationRepsonse } from "../../../../types/models/operations/mutations/FollowGameMutation.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { graphqlApi } from "../../api";

export const FollowGameMutation = async (gameID: string) => {
  console.log('gameID', gameID)
  const response = await graphqlApi.post<FollowGameMutationRepsonse>(
    'https://gql.twitch.tv/gql',
    FollowGameMutationOperation(gameID),
    {
      headers: {
        ...graphqlApi.headers,
        "Client-Integrity": "v4.public.eyJjbGllbnRfaWQiOiJraW1uZTc4a3gzbmN4NmJyZ280bXY2d2tpNWgxa28iLCJjbGllbnRfaXAiOiI5MC4xLjU0LjI0OCIsImRldmljZV9pZCI6InhqamRWRVN3YUE3cnVxRDlheTBTRlM5TU5jejdzaVp3IiwiZXhwIjoiMjAyMy0wMS0wM1QwNDozNTowM1oiLCJpYXQiOiIyMDIzLTAxLTAyVDEyOjM1OjAzWiIsImlzX2JhZF9ib3QiOiJ0cnVlIiwiaXNzIjoiVHdpdGNoIENsaWVudCBJbnRlZ3JpdHkiLCJuYmYiOiIyMDIzLTAxLTAyVDEyOjM1OjAzWiIsInVzZXJfaWQiOiIifd_ItIFPjur3Kosx6Ok5AZmSaW8rNh3bAFHh6McGSiSaz5TS_wli-7X9ZA87HZe1WKEI0OztVM9p0NrlUd2BvQY"
      }
    }
  );

  const { data, problem } = response;

  const error = data?.errors

  if (problem || error) {
    if (error) {
      throw error[0] as FollowGameError
    }
    throw data
  }

  return data?.data as FollowGameMutationRepsonse['data'];
}

export const FollowGameMutationOperation: (gameID: string) => QueryOperation = (gameID) => ({
  "operationName": "FollowGameMutation",
  "variables": {
    "gameID": gameID
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "ea5f81f6f8cd7636d4c01aef6e5601a2231082319db91fcd39ddfd0eeb63148b"
    }
  }
})