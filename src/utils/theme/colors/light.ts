import COMMONS_COLORS from './commons';
import { PALETTE } from './palette';

export const LIGHT_COLORS = Object.freeze({
  ...COMMONS_COLORS,
  primaryText: PALETTE.black,
  primaryBackground: PALETTE.white,

  secondaryText: PALETTE.gray2,
  secondaryBackground: PALETTE.almostWhite,

  highlightBackground: PALETTE.gray1,

  iconDefault: PALETTE.primaryHighlight,
  iconDisabled: PALETTE.gray2,

  carouselPagination: PALETTE.gray2,
  languagePickerButton: PALETTE.gray3,
});
