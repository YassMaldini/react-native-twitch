import { ResponseExtensions } from "../gql/extensions.types"

export interface StreamModelQueryResponse extends ResponseExtensions {
  data: {
    user: {
      stream: any | null
    }
  }
}