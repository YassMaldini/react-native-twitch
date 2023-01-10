import { PlaybackAccessToken } from "../gql/stream.types"

export interface StreamAccessTokenQueryResponse {
  data: {
    streamPlaybackAccessToken: PlaybackAccessToken
  },
  extensions: {
    durationMilliseconds: number,
    operationName: "StreamAccessTokenQuery",
    requestID: string
  }
}