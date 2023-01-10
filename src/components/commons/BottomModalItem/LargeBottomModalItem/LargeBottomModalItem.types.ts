import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";

export interface LargeBottomModalItemProps extends PressableProps {
  children: string;
  icon?: FC<SvgProps>;
  imageSource?: ImageSourcePropType;
  showRightArrow?: boolean;
}