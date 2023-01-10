import COMMONS_COLORS from './commons';
import { PALETTE } from './palette';

export const DARK_COLORS = Object.freeze({
  ...COMMONS_COLORS,
  primaryText: PALETTE.white,
  primaryBackground: PALETTE.black,

  secondaryText: PALETTE.gray3,
  secondaryBackground: PALETTE.almostBlack,

  highlightBackground: PALETTE.gray5,

  iconDefault: PALETTE.gray3,
  iconDisabled: PALETTE.gray4,

  carouselPagination: PALETTE.gray5,
  languagePickerButton: PALETTE.gray3,
});
