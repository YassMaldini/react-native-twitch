import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { ProfileHomeQueryResponse } from "../../../../types/models/operations/queries/ProfileHomeQuery.types";
import { graphqlApi } from "../../api";

export const PROFILE_FROM_HOME_QUERY_KEY = "PROFILE_FROM_HOME"

export const ProfileFromHomeQuery = async (userId: string) => {
  const response = await graphqlApi.post<ProfileHomeQueryResponse>(
    'https://gql.twitch.tv/gql',
    ProfileHomeQueryOperation(userId)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as ProfileHomeQueryResponse['data'];
}

export const ProfileHomeQueryOperation: (userId: string) => QueryOperation = (userId) => ({
  "operationName": "ProfileHomeQuery",
  "variables": {
    "user": userId,
    "recommendationsContext": {
      "platform": "android"
    },
    "includesFreeformTags": true
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "a3e77df4a8c33566805b790597840f534d7d908961255cd5b57d20dc933b58ce"
    }
  }
})