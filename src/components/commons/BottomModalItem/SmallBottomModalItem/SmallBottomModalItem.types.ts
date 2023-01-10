import { FC } from "react";
import { SvgProps } from "react-native-svg";
import { Theme } from "../../../../utils/theme/theme";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";

export interface SmallBottomModalItemProps extends PressableProps {
  children: string;
  icon?: FC<SvgProps>;
  color?: keyof Theme['colors'];
}