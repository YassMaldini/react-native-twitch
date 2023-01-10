import { Video } from "../../../../../types/models/gql/video.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";

export interface ExtraSmallVideoListCardProps extends PressableProps {
  video: Video;
}