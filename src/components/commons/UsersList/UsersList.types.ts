import { UserEdge } from "../../../types/models/gql/user.types";

export interface UsersListProps {
  title?: string;
  listTitle?: string;
  size: UsersListSize;
  usersList?: UserEdge[];
  limit?: number;
}

export enum UsersListSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}