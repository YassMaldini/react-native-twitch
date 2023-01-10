import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { ProfileFromChannelNameQueryResponse } from "../../../../types/models/operations/queries/ProfileFromChannelNameQuery.types";
import { graphqlApi } from "../../api";

export const PROFILE_FROM_CHANNEL_NAME_QUERY_KEY = "PROFILE_FROM_CHANNEL_NAME"

export const ProfileFromChannelNameQuery = async (login: string) => {
  const response = await graphqlApi.post<ProfileFromChannelNameQueryResponse>(
    'https://gql.twitch.tv/gql',
    ProfileFromChannelNameQueryOperation(login)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as ProfileFromChannelNameQueryResponse['data'];
}

export const ProfileFromChannelNameQueryOperation: (login: string) => QueryOperation = (login) => ({
  "operationName": "ProfileFromChannelNameQuery",
  "variables": {
      "channelName": login,
      "includeActiveStream": false
  },
  "extensions": {
      "persistedQuery": {
          "version": 1,
          "sha256Hash": "927fecbcb9d007c62142ff1889b2d311d5c2a3682485411ebfe413d6be5666a8"
      }
  }
})