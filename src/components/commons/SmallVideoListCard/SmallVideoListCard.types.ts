import { Stream } from "../../../types/models/gql/stream.types";
import { User } from "../../../types/models/gql/user.types";
import { Video } from "../../../types/models/gql/video.types";

export interface SmallVideoListCardProps {
  video: Video;
  onPress: () => void;
}