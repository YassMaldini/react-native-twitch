import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  composeRestyleFunctions,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
  useRestyle,
} from '@shopify/restyle';
import { forwardRef, useMemo } from 'react';
import { TextInputprops } from './TextInput.types';
import { TextInput as RNTextInput } from 'react-native';
import { Theme } from '../../../utils/theme/theme';

type RestyleProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  TypographyProps<Theme>;

const TextInput = forwardRef<any, TextInputprops>((rest, ref) => {
  const restyleFunctions = composeRestyleFunctions<Theme, TextInputprops>([
    spacing,
    layout,
    border,
    color,
    backgroundColor,
    typography,
  ]);

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const Component = useMemo(() => {
    return createRestyleComponent<RestyleProps, Theme>(
      [spacing, layout, border, backgroundColor, color, typography],
      RNTextInput
    );
  }, []);

  return (
    // <Component
    //   {...rootProps}
    //   {...{
    //     style: [
    //       {
    //         paddingVertical: 10,
    //         borderRadius: 6
    //       },
    //       style
    //     ]
    //   }}
    //   {...{ ref }}
    // />
    <Component
      paddingHorizontal="m"
      paddingVertical="xs"
      borderRadius="s"
      {...rootProps}
      {...{ ref }}
    />
  );
});

export default TextInput;
