import { ResponseExtensions } from "../gql/extensions.types";
import { User } from "../gql/user.types"

export interface LoggedInUserQueryResponse extends ResponseExtensions {
  data: {
    currentUser: User;
  }
}