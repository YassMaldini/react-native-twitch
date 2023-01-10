import { useQuery } from "react-query";
import { PlaybackAccessToken } from "../../types/models/gql/stream.types";
import { queryStreamAccessToken } from "./useStreamAccessToken.query";
import { useStreamAccessTokenOptions } from "./useStreamAccessToken.types";

export const USE_STREAM_ACCESS_TOKEN_QUERY_KEY = "USE_STREAM_ACCESS_TOKEN";

export const useStreamAccessToken = (
  { channelName, isEnabled }: useStreamAccessTokenOptions
) => {
  return useQuery<PlaybackAccessToken, Error>([USE_STREAM_ACCESS_TOKEN_QUERY_KEY, channelName], () =>
    queryStreamAccessToken({ channelName }),
    {
      enabled: isEnabled
    }
  );
}