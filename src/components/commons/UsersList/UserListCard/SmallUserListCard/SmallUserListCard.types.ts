import { User } from "../../../../../types/models/gql/user.types";

export interface SmallUserListCardProps {
  user: User | Omit<User, "stream"> & { stream: { viewersCount: number; } | null; };
}