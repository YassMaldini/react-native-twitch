import { Stream } from "../../../../../types/models/gql/stream.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";
import { OptionsIconsProps } from "../../StreamList.types";

export interface LargeStreamListCardProps extends PressableProps {
  stream?: Stream;
  optionsIconProps?: OptionsIconsProps;
}