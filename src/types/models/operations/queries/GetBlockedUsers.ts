import { ResponseExtensions } from "../gql/extensions.types"

export interface GetBlockedUsersResponse extends ResponseExtensions {
  data: {
    currentUser: {
      blockedUsers: Array<any>
    }
  }
}