import { ResponseExtensions } from "../gql/extensions.types"

export interface UnacknowledgedSubscriptionsQueryResponse extends ResponseExtensions {
  data: {
    user: {
      unacknowledgedSubscriptionEvents: any | null
    }
  }
}