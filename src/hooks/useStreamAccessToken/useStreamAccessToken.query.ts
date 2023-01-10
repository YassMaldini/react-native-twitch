import { PlaybackAccessToken } from "../../types/models/gql/stream.types";
import { StreamAccessTokenQueryResponse } from "../../types/models/operations/queries/StreamAccessTokenQuery.types";
import { graphqlApi } from "../../utils/api/api";
import { StreamAccessTokenQueryOperations } from "../../utils/api/operations/queries/StreamAccessTokenQuery";
import { useStreamAccessTokenOptions } from "./useStreamAccessToken.types";

export const queryStreamAccessToken = async ({ channelName }: useStreamAccessTokenOptions) => {
  const response = await graphqlApi.post<StreamAccessTokenQueryResponse>(
    'https://gql.twitch.tv/gql',
    StreamAccessTokenQueryOperations(channelName)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data.streamPlaybackAccessToken as PlaybackAccessToken;
}