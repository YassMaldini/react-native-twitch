import { ResponseExtensions } from "../../gql/extensions.types";
import { PlaybackAccessToken } from "../../gql/stream.types";

export interface VodAccessTokenQueryResponse extends ResponseExtensions {
  data: {
    videoPlaybackAccessToken: PlaybackAccessToken
  }
}