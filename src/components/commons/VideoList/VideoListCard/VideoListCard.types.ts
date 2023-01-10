import { Video } from "../../../../types/models/gql/video.types";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";
import { VideoListSize } from "../VideoList.types";

export interface VideoListCardProps extends PressableProps {
  video: Video;
  size: VideoListSize;
  onPress?: () => void;
}