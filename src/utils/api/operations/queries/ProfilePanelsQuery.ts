import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { ProfilePanelsQueryResponse } from "../../../../types/models/operations/ProfilePanelsQuery.types";
import { graphqlApi } from "../../api";

export const PROFILE_PANELS_QUERY_KEY = "PROFILE_PANELS"

export const ProfilePanelsQuery = async (channelId: string) => {
  const response = await graphqlApi.post<ProfilePanelsQueryResponse>(
    'https://gql.twitch.tv/gql',
    ProfilePanelsQueryOperation(channelId)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as ProfilePanelsQueryResponse['data'];
}

export const ProfilePanelsQueryOperation: (channelId: string) => QueryOperation = (channelId: string) => ({
  "operationName": "ProfilePanelsQuery",
  "variables": {
    "id": channelId
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "6c6465179c27438699128c75d6e17aba8b170dc8fe35e71bce25253680a17e68"
    }
  }
})