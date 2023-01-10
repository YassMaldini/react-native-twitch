import { Theme } from '../../../utils/theme/theme';
import {
  ButtonColors,
  ButtonColorsData,
  ButtonPaddingData,
  ButtonProps,
  ButtonSizes,
} from './Button.types';

export const BUTTONS_COLORS = Object.freeze<ButtonColorsData>({
  [ButtonColors.Primary]: {
    regular: {
      background: 'defaultButton',
      text: 'white',
    },
    disabled: {
      background: 'disabledButtonBackground',
      text: 'disabledButtonText',
    },
  },
  [ButtonColors.PrimaryOutline]: {
    regular: {
      background: 'highlightBackground',
      text: 'defaultButton',
    },
    disabled: {
      background: 'highlightBackground',
      text: 'disabledButtonBackground',
    },
  },
  [ButtonColors.PrimaryText]: {
    regular: {
      background: 'transparent',
      text: 'primaryText',
    },
    disabled: {
      background: 'transparent',
      text: 'primaryText',
    },
  },
  [ButtonColors.PrimaryOutlineText]: {
    regular: {
      background: 'highlightBackground',
      text: 'primaryText',
    },
    disabled: {
      background: 'highlightBackground',
      text: 'secondaryText',
    },
  },
  [ButtonColors.PrimaryHighlight]: {
    regular: {
      background: 'twitchPurple',
      text: 'primaryText',
    },
    disabled: {
      background: 'highlightBackground',
      text: 'secondaryText',
    },
  },
  [ButtonColors.HighlightedText]: {
    regular: {
      background: 'transparent',
      text: 'defaultButton',
    },
    disabled: {
      background: 'transparent',
      text: 'gray4',
    },
  },
});

export const getButtonBackgroundColor = ({
  disabled,
  color = ButtonColors.Primary,
}: Pick<ButtonProps, 'disabled' | 'color'>): keyof Theme['colors'] => {
  const colors = BUTTONS_COLORS[color];
  return disabled && colors.disabled ? colors.disabled.background : colors.regular.background;
};

export const getButtonTextColor = ({
  disabled,
  color = ButtonColors.Primary,
}: Pick<ButtonProps, 'disabled' | 'color' | 'variant'>): keyof Theme['colors'] => {
  const colors = BUTTONS_COLORS[color];
  return disabled && colors.disabled ? colors.disabled.text : colors.regular.text;
};

export const BUTTON_HORIZONTAL_PADDING = Object.freeze<ButtonPaddingData>({
  [ButtonSizes.Small]: 'sToM',
  [ButtonSizes.Medium]: 'l',
  [ButtonSizes.Large]: 'sToM',
});

export const BUTTON_VERTICAL_PADDING = Object.freeze<ButtonPaddingData>({
  [ButtonSizes.Small]: 'xs',
  [ButtonSizes.Medium]: 'sToM',
  [ButtonSizes.Large]: 'xs',
});
