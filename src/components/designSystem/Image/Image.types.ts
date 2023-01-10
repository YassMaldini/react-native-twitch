import { BackgroundColorProps, BorderProps, LayoutProps, SpacingProps } from '@shopify/restyle';
import { ImageProps as RNImageProps } from 'react-native';

import { Theme } from '../../../utils/theme/theme';

export type ImageProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  Omit<RNImageProps, 'height' | 'width' | 'borderRadius'>;
