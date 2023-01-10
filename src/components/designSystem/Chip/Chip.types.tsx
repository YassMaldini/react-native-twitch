import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  OpacityProps,
  SpacingProps,
} from '@shopify/restyle';
import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';

export enum ChipColors {
  Primary = 'primary',
  PrimaryOutline = 'primaryOutline',
  PrimaryText = 'primaryText'
}

export enum ChipVariants {
  Contained = 'contained',
  Text = 'text',
}

export enum ChipSizes {
  Small = 'small',
  Medium = 'medium',
}

export type ChipPaddingData = {
  [size in ChipSizes]: keyof Theme['spacing'];
};

export interface ChipBaseContrastColors {
  background: keyof Theme['colors'];
  text: keyof Theme['colors'];
}

export type ChipColorsData = {
  [color in ChipColors]: {
    regular: ChipBaseContrastColors;
    disabled?: ChipBaseContrastColors;
  };
};

export interface ChipProps
  extends SpacingProps<Theme>,
    LayoutProps<Theme>,
    BorderProps<Theme>,
    OpacityProps<Theme>,
    BackgroundColorProps<Theme>,
    Omit<PressableProps, 'style'> {
  disabled?: boolean;
  children: ReactNode | string;
  color?: ChipColors;
  variant?: ChipVariants;
  size?: ChipSizes;
  isBold?: boolean;
}
