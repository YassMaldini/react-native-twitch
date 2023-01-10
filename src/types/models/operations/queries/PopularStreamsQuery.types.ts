import { ResponseExtensions } from "../../gql/extensions.types";
import { StreamConnection } from "../../gql/stream.types";

export interface PopularStreamsQueryResponse extends ResponseExtensions {
  data: {
    streams: StreamConnection
  };
}