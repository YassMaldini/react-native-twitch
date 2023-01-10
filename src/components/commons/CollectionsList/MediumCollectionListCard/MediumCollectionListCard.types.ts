import { Collection } from "../../../../types/models/gql/collection.types";
import { Video } from "../../../../types/models/gql/video.types";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";

export interface MediumCollectionListCardProps extends PressableProps {
  collection: Collection;
  onPress?: () => void;
  title?: string;
}