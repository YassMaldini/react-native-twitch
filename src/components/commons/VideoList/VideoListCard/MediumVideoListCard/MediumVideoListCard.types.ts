import { Video } from "../../../../../types/models/gql/video.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";

export interface MediumVideoListCardProps extends PressableProps {
  video?: Video;
  onPress?: () => void;
  title?: string;
}