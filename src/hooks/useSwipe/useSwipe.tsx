import { Dimensions } from 'react-native';
import { UseSwipeProps } from './useSwipe.types';

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeTop,
  onSwipeBottom,
  rangeOffset = 4
}: UseSwipeProps) => {

  const windowWidth = Dimensions.get('window').width;

  let firstTouch = 0;

  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageX;
  }

  function onTouchEnd(e: any) {
    const positionX = e.nativeEvent.pageX;
    const positionY = e.nativeEvent.pageY;
    const range = windowWidth / rangeOffset;

    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight();
    } else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft();
    }

    if (positionY - firstTouch > range) {
      onSwipeBottom && onSwipeBottom();
    } else if (firstTouch - positionY > range) {
      onSwipeTop && onSwipeTop();
    }
  }

  return { onTouchStart, onTouchEnd };
};
