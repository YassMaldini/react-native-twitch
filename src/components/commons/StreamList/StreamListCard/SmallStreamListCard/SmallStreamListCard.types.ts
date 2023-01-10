import { Stream } from "../../../../../types/models/gql/stream.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";
import { OptionsIconsProps } from "../../StreamList.types";

export interface SmallStreamListCardProps extends PressableProps {
  stream: Stream;
  optionsIconProps?: OptionsIconsProps;
}