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
import { ActivityIndicator, Pressable } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { ButtonColors, ButtonProps, ButtonSizes, ButtonVariants } from './Button.types';
import { BackgroundColorProps, LayoutProps, OpacityProps, SpacingProps } from '@shopify/restyle';
import {
  BUTTON_HORIZONTAL_PADDING,
  BUTTON_VERTICAL_PADDING,
  getButtonBackgroundColor,
  getButtonTextColor,
} from './Button.theme';
import { SvgIcon } from '../SvgIcon/SvgIcon';

type RestyleProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme> &
  BackgroundColorProps<Theme>;

const Content = ({
  loading,
  disabled,
  children,
  color = ButtonColors.Primary,
  variant = ButtonVariants.Text,
  isBold = true,
  textProps,
  beforeIcon,
  afterIcon,
  beforeElement,
  afterElement,
  size
}: ButtonProps) => {
  const isChildrenString = typeof children === 'string';

  const buttonTextColor = getButtonTextColor({ disabled, color, variant });
  const buttonTextSize = size === ButtonSizes.Large ? 18 : 16

  if (loading) {
    return (
      <Box paddingVertical="m">
        <ActivityIndicator testID="loading" size={24} color="#fff" />
      </Box>
    );
  }

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="center">
      {beforeElement && <Box>{beforeElement}</Box>}
      {beforeIcon && 
        <SvgIcon
          icon={beforeIcon}
          width={16}
          height={16}
          color="primaryText"
          marginRight="s"
        />
      }
      {!isChildrenString && <Box testID="buttonChildren">{children}</Box>}
      {isChildrenString && (
        <Text
          flex={1}
          testID="buttonText"
          fontSize={buttonTextSize}
          textAlign="center"
          alignSelf="center"
          fontFamily={isBold ? 'Roboto-Bold' : 'Roboto-Regular'}
          color={buttonTextColor}
          {...textProps}>
          {children}
        </Text>
      )}
      {afterIcon && 
        <SvgIcon
          icon={afterIcon}
          width={16}
          height={16}
          color="primaryText"
          marginRight="s"
        />
      }
      {afterElement && <Box>{afterElement}</Box>}
    </Box>
  );
};

const Button = ({
  onPress,
  loading,
  disabled,
  children,
  color = ButtonColors.Primary,
  variant,
  size = ButtonSizes.Small,
  isBold,
  textProps,
  beforeIcon,
  afterIcon,
  beforeElement,
  afterElement,
  ...rest
}: ButtonProps) => {
  const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    layout,
    opacity,
    backgroundColor,
  ]);

  const Component = createRestyleComponent<ButtonProps, Theme>(
    [spacing, layout, border, opacity, backgroundColor],
    Pressable
  );

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const buttonBackgroundColor = getButtonBackgroundColor({ disabled, color });

  return (
    <Component
      testID="button"
      backgroundColor={buttonBackgroundColor}
      paddingHorizontal={BUTTON_HORIZONTAL_PADDING[size]}
      paddingVertical={BUTTON_VERTICAL_PADDING[size]}
      borderRadius="m"
      {...(size === ButtonSizes.Large && {width: 175})}
      {...{ onPress }}
      {...rootProps}>
      <Content
        {...{
          loading,
          disabled,
          children,
          color,
          variant,
          size,
          isBold,
          textProps,
          beforeIcon,
          afterIcon,
          beforeElement,
          afterElement
        }}
      />
    </Component>
  );
};

export default Button;
