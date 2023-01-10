import { ResponseExtensions } from "../../gql/extensions.types";

export interface IsFollowingGameQueryResponse extends ResponseExtensions {
  data: {
    game: {
      self: {
        follow: {
          startedAt: string
        } | null
      }
    }
  }
}