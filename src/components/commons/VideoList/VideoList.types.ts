import { VideoEdge } from "../../../types/models/gql/video.types";
import { PressableProps } from "../../designSystem/Pressable/Pressable.types";

export interface VideoListProps extends PressableProps {
  title?: string;
  listTitle?: string;
  size: VideoListSize;
  videoList?: VideoEdge[];
  limit?: number;
}

export enum VideoListSize {
  ExtraSmall = 'ExtraSmall',
  MidMedium = 'MidMedium',
  Large = 'Large'
}