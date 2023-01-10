import { ResponseExtensions } from "../../gql/extensions.types"
import { Stream } from "../../gql/stream.types"

export interface RecommendedStreamsForUserResponse extends ResponseExtensions {
  data: {
    recommendedStreams: {
      edges: {
        node: Stream,
        trackingID: string
      }[]
    }
  }
}