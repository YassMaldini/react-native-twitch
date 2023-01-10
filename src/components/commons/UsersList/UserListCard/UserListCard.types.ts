import { User } from "../../../../types/models/gql/user.types";
import { UsersListSize } from "../UsersList.types";

export interface UserListCardProps {
  user: User | Omit<User, "stream"> & { stream: { viewersCount: number; } | null; };
  size: UsersListSize;
  onPress?: () => void;
}