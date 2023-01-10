import { Badge } from "../gql/badge.types"
import { ResponseExtensions } from "../gql/extensions.types"

export interface GlobalBadgesResponse extends ResponseExtensions {
  data: {
    badges: Badge[]
  }
}