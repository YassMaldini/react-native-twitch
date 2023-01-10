export interface UseSwipeProps {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeTop?: () => void;
  onSwipeBottom?: () => void;
  rangeOffset?: number;
}