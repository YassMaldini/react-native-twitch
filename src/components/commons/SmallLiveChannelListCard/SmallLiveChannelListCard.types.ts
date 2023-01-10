import { Stream } from "../../../types/models/gql/stream.types";
import { User } from "../../../types/models/gql/user.types";

export interface SmallLiveChannelListCardProps {
  user: User;
  onPress: () => void;
}