import { ReactNode } from 'react';
import { Theme } from '../../../utils/theme/theme';

export interface ScreenHeaderProps {
  showGoBackTouchable?: boolean;
  showGoBackLabel?: boolean;
  goBackIconColor?: keyof Theme['colors'];
  title?: string | ReactNode;
  rightElement?: ReactNode;
}
