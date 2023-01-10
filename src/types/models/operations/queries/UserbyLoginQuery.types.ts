import { ResponseExtensions } from "../gql/extensions.types";
import { User } from "../gql/user.types";

export interface UserbyLoginQueryResponse extends ResponseExtensions {
  data: {
    user: User;
  }
}