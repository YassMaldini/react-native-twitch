import { LayoutProps, SpacingProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { Theme } from '../../../utils/theme/theme';
import { TextInputprops } from '../TextInput/TextInput.types';

export interface TextFieldProps extends SpacingProps<Theme>, LayoutProps<Theme> {
  beforeInput?: ReactNode;
  afterInput?: ReactNode;
  textInputProps?: Omit<TextInputprops, 'editable'>;
}
