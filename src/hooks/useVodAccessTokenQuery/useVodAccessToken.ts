import { useQuery } from "react-query";
import { PlaybackAccessToken } from "../../types/models/gql/stream.types";
import { queryVodAccessToken } from "./useVodAccessToken.query";
import { useVodAccessTokenOptions } from "./useVodAccessToken.types";

export const USE_VOD_ACCESS_TOKEN_QUERY_KEY = "USE_VOD_ACCESS_TOKEN";

export const useVodAccessToken = (
  { vodId }: useVodAccessTokenOptions
) => {
  return useQuery<PlaybackAccessToken, Error>(
    [USE_VOD_ACCESS_TOKEN_QUERY_KEY, vodId], 
    () => queryVodAccessToken({ vodId })
  );
}