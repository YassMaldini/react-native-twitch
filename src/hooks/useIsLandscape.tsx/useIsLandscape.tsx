import { useContext } from 'react';
import { Orientation } from 'expo-screen-orientation';
import { BottomTabStackContext } from '../../components/navigation/BottomTabStack/BottomTabStack.context';

export const useIsLandscape = () => {
  const { currentScreenOrientation } = useContext(BottomTabStackContext);

  if (
    currentScreenOrientation === Orientation.LANDSCAPE_LEFT ||
    currentScreenOrientation === Orientation.LANDSCAPE_RIGHT
  ) {
    return true;
  } else {
    return false;
  }
};
