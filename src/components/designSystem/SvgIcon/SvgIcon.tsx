import {
  layout,
  opacity,
  spacing,
  useResponsiveProp,
  useRestyle,
  color,
  composeRestyleFunctions,
  SpacingProps,
  LayoutProps,
  OpacityProps,
  createRestyleComponent,
  ColorProps,
} from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import { SvgIconProps } from './SvgIcon.types';

export const DEFAULT_SVG_ICON_SIZE = 24;

export type RestyleProps = ColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme>;

export const SvgIcon = ({
  icon: Icon,
  height: receivedHeight = DEFAULT_SVG_ICON_SIZE,
  width: receivedWidth = DEFAULT_SVG_ICON_SIZE,
  ...rest
}: SvgIconProps) => {
  const height = useResponsiveProp(receivedHeight);
  const width = useResponsiveProp(receivedWidth);

  const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    layout,
    opacity,
    color,
  ]);

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const Component = createRestyleComponent<RestyleProps, Theme>(
    [spacing, layout, opacity, color],
    Icon
  );

  return <Component {...{ width, height, ...rootProps }} />;
};
