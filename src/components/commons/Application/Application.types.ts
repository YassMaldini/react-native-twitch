import { Dispatch, SetStateAction } from 'react';

export interface ApplicationContextProps {
  isDarkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
