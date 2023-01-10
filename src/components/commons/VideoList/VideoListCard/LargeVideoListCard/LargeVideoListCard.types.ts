import { Stream } from "../../../../../types/models/gql/stream.types";
import { Video } from "../../../../../types/models/gql/video.types";

export interface LargeVideoListCardProps {
  video?: Video;
  onPress?: () => void;
  title?: string;
}