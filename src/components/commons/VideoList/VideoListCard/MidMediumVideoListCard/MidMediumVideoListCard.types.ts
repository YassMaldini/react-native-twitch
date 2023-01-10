import { Video } from "../../../../../types/models/gql/video.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";

export interface MidMediumVideoListCardProps extends PressableProps {
  video?: Video;
  onPress?: () => void;
  title?: string;
}