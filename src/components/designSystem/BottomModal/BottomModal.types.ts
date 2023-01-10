import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { ReactNode } from 'react';
import { SharedValue } from 'react-native-reanimated';

export interface BottomModalProps extends Omit<BottomSheetModalProps, 'snapPoints' | 'children'> {
  children: ReactNode;
  snapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
  title?: string;
}
