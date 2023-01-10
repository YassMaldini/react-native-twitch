import { ResponseExtensions } from "../../gql/extensions.types"
import { StreamConnection } from "../../gql/stream.types"

export interface StreamsForGameQueryResponse extends ResponseExtensions {
  data: {
    game: {
      streams: StreamConnection
    }
  }
}