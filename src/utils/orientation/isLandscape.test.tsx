import { Orientation } from 'expo-screen-orientation';

import { isLandscape } from './isLandscape';

describe('isLandscape()', () => {
  it('should return true when device is in landscape mode (left)', () => {
    expect(isLandscape(Orientation.LANDSCAPE_LEFT)).toBeTruthy();
  });
  it('should return true when device is in landscape mode (right)', () => {
    expect(isLandscape(Orientation.LANDSCAPE_RIGHT)).toBeTruthy();
  });
  it('should return false when device is in portrait mode', () => {
    expect(isLandscape(Orientation.PORTRAIT_UP)).toBeFalsy();
    expect(isLandscape(Orientation.PORTRAIT_DOWN)).toBeFalsy();
  });
});
