import { FC, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Theme } from '../../../utils/theme/theme';
import { PressableProps } from '../../designSystem/Pressable/Pressable.types';

export interface BottomModalItemProps extends PressableProps {
  children: string;
  color?: BottomModalItemColors;
  icon?: FC<SvgProps>;
  imageSource?: ImageSourcePropType;
  size: BottomModalItemSizes;
  isFirst?: boolean;
  isLast?: boolean;
  isAlone?: boolean;
  showRightArrow?: boolean;
}

export enum BottomModalItemSizes {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
}

export enum BottomModalItemColors {
  Default = "Default",
  Red = "Red"
}

export type BottomModalItemColorsData = {
  [color in BottomModalItemColors]: keyof Theme['colors'];
};