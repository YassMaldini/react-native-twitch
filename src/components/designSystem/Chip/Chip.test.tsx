import renderInProviders from '../../../utils/test/renderInProviders';
import getTheme from '../../../utils/theme/theme';
import Box from '../Box/Box';

import Chip from './Chip';
import { ChipColors } from './Chip.types';

describe('<Chip />', () => {
  const { colors } = getTheme();

  it('render string correctly', () => {
    const text = 'Test';

    const { getByTestId } = renderInProviders(<Chip>{text}</Chip>);

    expect(getByTestId('chipText')).toHaveTextContent(text);
  });

  it('render children correctly', () => {
    const children = 'children';

    const { getByTestId } = renderInProviders(
      <Chip>
        <Box testID={children} />
      </Chip>
    );

    expect(getByTestId(children)).toBeTruthy();
  });

  it('should render correct colors', () => {
    const { getByTestId } = renderInProviders(
      <Chip color={ChipColors.Primary}>
        <Box />
      </Chip>
    );

    expect(getByTestId('chip')).toHaveStyle({
      backgroundColor: colors.defaultButton,
    });
  });
});
