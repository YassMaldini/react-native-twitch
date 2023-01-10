import { fireEvent } from '@testing-library/react-native';
import renderInProviders from '../../../utils/test/renderInProviders';
import getTheme from '../../../utils/theme/theme';
import Box from '../Box/Box';

import Button from './Button';
import { ButtonColors } from './Button.types';

describe('<Button />', () => {
  const { colors } = getTheme();

  it('render string correctly', () => {
    const text = 'Test';
    const { getByTestId } = renderInProviders(<Button>{text}</Button>);
    expect(getByTestId('buttonText')).toHaveTextContent(text);
  });

  it('render children correctly', () => {
    const { getByTestId } = renderInProviders(
      <Button>
        <Box />
      </Button>
    );
    expect(getByTestId('buttonChildren')).toBeTruthy();
  });

  it('should render correct colors', () => {
    const { getByTestId } = renderInProviders(
      <Button color={ButtonColors.Primary}>
        <Box />
      </Button>
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: colors.defaultButton,
    });
  });

  it('should call correct function on press', () => {
    const onPress = jest.fn();

    const { getByTestId } = renderInProviders(<Button {...{ onPress }}>Press</Button>);

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should render loading', () => {
    const { getByTestId } = renderInProviders(<Button loading={true}>Test</Button>);

    expect(getByTestId('loading')).toBeTruthy();
  });
});
