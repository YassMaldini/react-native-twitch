import {
  ColorProps,
  LayoutProps,
  SpacingProps,
  VariantProps,
  TextProps as RestyleTextProps,
  BackgroundColorProps,
} from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import { TextProps as RNTextProps } from 'react-native';

type TextProps = VariantProps<Theme, 'textVariants'> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  RestyleTextProps<Theme> &
  RNTextProps;

export default TextProps;
