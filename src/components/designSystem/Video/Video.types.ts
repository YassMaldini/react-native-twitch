import { BackgroundColorProps, BorderProps, LayoutProps, SpacingProps } from '@shopify/restyle';
import { VideoProps as ExpoVideoProps } from 'expo-av';

import { Theme } from '../../../utils/theme/theme';

export interface VideoProps
  extends SpacingProps<Theme>,
    LayoutProps<Theme>,
    BackgroundColorProps<Theme>,
    BorderProps<Theme>,
    Omit<ExpoVideoProps, 'height' | 'width' | 'borderRadius'> {
  isPlayable?: boolean;
  pauseEnabled?: boolean;
}
