import { Stream } from "../../../../types/models/gql/stream.types";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";
import { OptionsIconsProps, StreamListSize } from "../StreamList.types";

export interface StreamListCardProps extends PressableProps {
  stream: Stream;
  size: StreamListSize;
  optionsIconProps?: OptionsIconsProps;
}