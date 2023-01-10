import { backgroundColor, border, createRestyleComponent, layout, spacing } from '@shopify/restyle';
import { Pressable as RNPressable } from 'react-native';

import { Theme } from '../../../utils/theme/theme';
import { PressableProps } from './Pressable.types';

const Pressable = createRestyleComponent<PressableProps, Theme>(
  [spacing, backgroundColor, border, layout],
  RNPressable
);

export default Pressable;
