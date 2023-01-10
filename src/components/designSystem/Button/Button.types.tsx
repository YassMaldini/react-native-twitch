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
import { SvgIconProps } from '../SvgIcon/SvgIcon.types';
import TextProps from '../Text/Text.types';

export enum ButtonColors {
  Primary = 'primary',
  PrimaryOutline = 'primaryOutline',
  PrimaryText = 'primaryText',
  PrimaryOutlineText = 'primaryOutlineText',
  PrimaryHighlight = 'PrimaryHighlight',
  HighlightedText = 'HighlightedText',
}

export enum ButtonVariants {
  Contained = 'contained',
  Text = 'text',
}

export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export type ButtonPaddingData = {
  [size in ButtonSizes]: keyof Theme['spacing'];
};

export interface ButtonBaseContrastColors {
  background: keyof Theme['colors'];
  text: keyof Theme['colors'];
}

export type ButtonColorsData = {
  [color in ButtonColors]: {
    regular: ButtonBaseContrastColors;
    disabled?: ButtonBaseContrastColors;
  };
};

export interface ButtonProps
  extends SpacingProps<Theme>,
    LayoutProps<Theme>,
    BorderProps<Theme>,
    OpacityProps<Theme>,
    BackgroundColorProps<Theme>,
    Omit<PressableProps, 'style'> {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isBold?: boolean;
  textProps?: TextProps;
  beforeIcon?: SvgIconProps['icon'];
  afterIcon?: SvgIconProps['icon'];
  beforeElement?: ReactNode;
  afterElement?: ReactNode;
}
