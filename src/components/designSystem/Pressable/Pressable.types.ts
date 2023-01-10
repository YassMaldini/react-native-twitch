import { BackgroundColorProps, BorderProps, LayoutProps, SpacingProps } from '@shopify/restyle';
import { PressableProps as RNPressableProps } from 'react-native';

import { Theme } from '../../../utils/theme/theme';

export type PressableProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  Omit<RNPressableProps, 'height' | 'width' | 'borderRadius'>;
