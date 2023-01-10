import { Theme } from '../../../utils/theme/theme';
import { ChipColors, ChipColorsData, ChipPaddingData, ChipProps, ChipSizes } from './Chip.types';

export const CHIP_COLORS = Object.freeze<ChipColorsData>({
  [ChipColors.Primary]: {
    regular: {
      background: 'defaultButton',
      text: 'white',
    },
    disabled: {
      background: 'disabledButtonBackground',
      text: 'disabledButtonText',
    },
  },
  [ChipColors.PrimaryOutline]: {
    regular: {
      background: 'highlightBackground',
      text: 'secondaryText',
    },
    disabled: {
      background: 'highlightBackground',
      text: 'disabledButtonBackground',
    },
  },
  [ChipColors.PrimaryText]: {
    regular: {
      background: 'transparent',
      text: 'primaryText',
    },
    disabled: {
      background: 'transparent',
      text: 'primaryText',
    },
  }
});

export const getChipBackgroundColor = ({
  disabled,
  color = ChipColors.Primary,
}: Pick<ChipProps, 'disabled' | 'color'>): keyof Theme['colors'] => {
  const colors = CHIP_COLORS[color];
  return disabled && colors.disabled ? colors.disabled.background : colors.regular.background;
};

export const getChipTextColor = ({
  disabled,
  color = ChipColors.Primary,
}: Pick<ChipProps, 'disabled' | 'color' | 'variant'>): keyof Theme['colors'] => {
  const colors = CHIP_COLORS[color];
  return disabled && colors.disabled ? colors.disabled.text : colors.regular.text;
};

export const BUTTON_HORIZONTAL_PADDING = Object.freeze<ChipPaddingData>({
  [ChipSizes.Small]: 's',
  [ChipSizes.Medium]: 'l',
});

export const BUTTON_VERTICAL_PADDING = Object.freeze<ChipPaddingData>({
  [ChipSizes.Small]: 'xxxs',
  [ChipSizes.Medium]: 'sToM',
});
