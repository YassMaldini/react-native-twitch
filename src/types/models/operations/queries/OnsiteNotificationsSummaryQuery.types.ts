import { ResponseExtensions } from "../gql/extensions.types"

export interface OnsiteNotificationsSummaryQueryResponse extends ResponseExtensions {
  data: {
    user: {
      notifications: {
        summary: {
          lastSeenAt: Date | null,
          unseenCount: number
        }
      }
    }
  }
}