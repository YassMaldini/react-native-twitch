import {
  backgroundColor,
  color,
  createRestyleComponent,
  createVariant,
  layout,
  spacing,
  textRestyleFunctions,
} from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import TextProps from './Text.types';
import { Text as RNText } from 'react-native';

const textVariants = createVariant({
  themeKey: 'textVariants',
});

const Text = createRestyleComponent<TextProps, Theme>(
  [textVariants, spacing, layout, color, backgroundColor, ...textRestyleFunctions],
  RNText
);

export default Text;
