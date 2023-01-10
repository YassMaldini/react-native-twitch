import {
  backgroundColor,
  border,
  composeRestyleFunctions,
  createRestyleComponent,
  layout,
  opacity,
  spacing,
  useRestyle,
} from '@shopify/restyle';
import { Pressable } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { ChipColors, ChipProps, ChipSizes, ChipVariants } from './Chip.types';
import { BackgroundColorProps, LayoutProps, OpacityProps, SpacingProps } from '@shopify/restyle';
import {
  BUTTON_HORIZONTAL_PADDING,
  BUTTON_VERTICAL_PADDING,
  getChipBackgroundColor,
  getChipTextColor,
} from './Chip.theme';

type RestyleProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme> &
  BackgroundColorProps<Theme>;

const Content = ({
  disabled,
  children,
  color = ChipColors.Primary,
  variant = ChipVariants.Text,
  isBold = true,
}: ChipProps) => {
  const isChildrenString = typeof children === 'string';

  const buttonTextColor = getChipTextColor({ disabled, color, variant });

  return (
    <Box>
      {!isChildrenString && children}
      {isChildrenString && (
        <Text
          testID="chipText"
          fontSize={13}
          lineHeight={14}
          textAlign="center"
          fontFamily={isBold ? 'Roboto-Bold' : 'Roboto-Regular'}
          color={buttonTextColor}>
          {children}
        </Text>
      )}
    </Box>
  );
};

const Chip = ({
  onPress,
  disabled,
  children,
  color = ChipColors.Primary,
  variant,
  size = ChipSizes.Small,
  isBold,
  ...rest
}: ChipProps) => {
  const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    layout,
    opacity,
    backgroundColor,
  ]);

  const Component = createRestyleComponent<ChipProps, Theme>(
    [spacing, layout, border, opacity, backgroundColor],
    Pressable
  );

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const buttonBackgroundColor = getChipBackgroundColor({ disabled, color });

  return (
    <Component
      testID="chip"
      backgroundColor={buttonBackgroundColor}
      paddingHorizontal={BUTTON_HORIZONTAL_PADDING[size]}
      paddingVertical={BUTTON_VERTICAL_PADDING[size]}
      borderRadius="sToM"
      {...{ onPress }}
      {...rootProps}>
      <Content
        {...{
          disabled,
          children,
          color,
          variant,
          isBold,
        }}
      />
    </Component>
  );
};

export default Chip;
