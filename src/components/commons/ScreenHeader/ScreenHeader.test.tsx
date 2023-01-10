import { useNavigation } from '@react-navigation/native';
import { fireEvent } from '@testing-library/react-native';
import renderInProviders from '../../../utils/test/renderInProviders';
import getTheme from '../../../utils/theme/theme';
import Box from '../../designSystem/Box/Box';
import ScreenHeader from './ScreenHeader';

const mockedUseNavigation = useNavigation as jest.Mock<any>;

describe('ScreenHeader />', () => {
  const goBack = jest.fn();

  beforeAll(() => {
    mockedUseNavigation.mockImplementation(() => ({
      goBack,
    }));
  });

  it('should render main element', () => {
    const { getByTestId } = renderInProviders(<ScreenHeader />, {
      isHomeStack: true,
    });

    expect(getByTestId('screenHeader')).toBeTruthy();
  });

  it('should render back button', () => {
    const { getByTestId } = renderInProviders(<ScreenHeader showGoBackTouchable />, {
      isHomeStack: true,
    });

    expect(getByTestId('goBackButton')).toBeTruthy();
  });

  it('should call go back function when press back button', () => {
    const { getByTestId } = renderInProviders(<ScreenHeader showGoBackTouchable />, {
      isHomeStack: true,
    });

    fireEvent.press(getByTestId('goBackButton'));

    expect(goBack).toHaveBeenCalled();
  });

  it('should render back icon', () => {
    const { getByTestId } = renderInProviders(<ScreenHeader showGoBackTouchable />, {
      isHomeStack: true,
    });

    expect(getByTestId('goBackIcon')).toBeTruthy();
  });

  it('should render back icon with specified color', () => {
    const { colors } = getTheme();

    const { getByTestId } = renderInProviders(
      <ScreenHeader showGoBackTouchable goBackIconColor="gray1" />,
      {
        isHomeStack: true,
      }
    );

    expect(getByTestId('goBackIcon')).toHaveStyle({
      color: colors.gray1,
    });
  });

  it('should render back label', () => {
    const { getByTestId } = renderInProviders(
      <ScreenHeader showGoBackTouchable showGoBackLabel />,
      {
        isHomeStack: true,
      }
    );

    expect(getByTestId('goBackLabel')).toBeTruthy();
  });

  it('should render title', () => {
    const titleText = 'titleText';

    const { getByTestId, getByText } = renderInProviders(<ScreenHeader title={titleText} />, {
      isHomeStack: true,
    });

    expect(getByTestId('title')).toBeTruthy();
    expect(getByText(titleText)).toBeTruthy();
  });

  it('should render right element', () => {
    const { getByTestId } = renderInProviders(
      <ScreenHeader rightElement={<Box testID="rightElement" />} />,
      {
        isHomeStack: true,
      }
    );

    expect(getByTestId('rightElement')).toBeTruthy();
  });
});
