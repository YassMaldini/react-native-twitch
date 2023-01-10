import { PlaybackAccessToken } from "../../types/models/gql/stream.types";
import { StreamAccessTokenQueryResponse } from "../../types/models/operations/queries/StreamAccessTokenQuery.types";
import { VodAccessTokenQueryResponse } from "../../types/models/operations/queries/VodAccessTokenQuery.types";
import { graphqlApi } from "../../utils/api/api";
import { StreamAccessTokenQueryOperations } from "../../utils/api/operations/queries/StreamAccessTokenQuery";
import { VodAccessTokenQueryOperation } from "../../utils/api/operations/queries/VodAccessTokenQuery";
import { useVodAccessTokenOptions } from "./useVodAccessToken.types";

export const queryVodAccessToken = async ({ vodId }: useVodAccessTokenOptions) => {
  const response = await graphqlApi.post<VodAccessTokenQueryResponse>(
    'https://gql.twitch.tv/gql',
    VodAccessTokenQueryOperation(vodId)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data.videoPlaybackAccessToken as PlaybackAccessToken;
}