import { FC } from "react";
import { SvgProps } from "react-native-svg";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";

export interface MediumBottomModalItemProps extends PressableProps {
  children: string;
  icon?: FC<SvgProps>;
  showRightArrow?: boolean;
}