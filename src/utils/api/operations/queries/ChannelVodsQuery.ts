import { ChannelVodsQueryProps, ChannelVodsQueryResponse } from "../../../../types/models/operations/queries/ChannelVodsQuery.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { graphqlApi } from "../../api";

export const CHANNEL_VODS_QUERY_KEY = "CHANNEL_VODS"

export const ChannelVodsQuery = async ({ channelId, types, count = 5 }: ChannelVodsQueryProps) => {
  const response = await graphqlApi.post<ChannelVodsQueryResponse>(
    'https://gql.twitch.tv/gql',
    ChannelVodsQueryOperation({ channelId, types, count })
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as ChannelVodsQueryResponse['data'];
}

export const ChannelVodsQueryOperation = ({ channelId, types, count = 5 }: ChannelVodsQueryProps): QueryOperation => ({
  "operationName": "ChannelVodsQuery",
  "variables": {
    "channelId": channelId,
    "types": types,
    "vodCount": count
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "1d7c6cbbfaf7344c867619bc5d16980d953013922cd08c9018a56b8f5182aa56"
    }
  }
})