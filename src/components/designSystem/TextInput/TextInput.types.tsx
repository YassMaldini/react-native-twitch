import {
  BackgroundColorProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  SpacingProps,
  TypographyProps,
} from '@shopify/restyle';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { Theme } from '../../../utils/theme/theme';

export type TextInputprops = SpacingProps<Theme> &
  LayoutProps<Theme> &
  TypographyProps<Theme> &
  BorderProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  RNTextInputProps;
