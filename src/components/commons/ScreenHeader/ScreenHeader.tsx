import { useNavigation } from '@react-navigation/native';
import Box from '../../designSystem/Box/Box';
import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';
import LeftArrowIcon from '../../../../assets/vectors/left-arrow.svg';
import { ScreenHeaderProps } from './ScreenHeader.types';
import { ConnectedStackProps } from '../../navigation/ConnectedStack/ConnectedStack.types';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';

const ScreenHeader = ({
  showGoBackTouchable,
  showGoBackLabel,
  goBackIconColor,
  title,
  rightElement,
}: ScreenHeaderProps) => {
  const { goBack } = useNavigation<ConnectedStackProps['navigation']>();

  return (
    <Box
      testID="screenHeader"
      paddingVertical="s"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="primaryBackground">
      {showGoBackTouchable && (
        <Pressable
          testID="goBackButton"
          onPress={goBack}
          padding="s"
          flexDirection="row"
          alignItems="center">
          {/* <Image source={LeftArrowBlue} width={48} height={48} /> */}
          <SvgIcon
            testID="goBackIcon"
            icon={LeftArrowIcon}
            color={goBackIconColor}
            width={26}
            height={26}
          />
          {showGoBackLabel && (
            <Text testID="goBackLabel" marginLeft="xxs" fontSize={18} color="defaultButton">
              Back
            </Text>
          )}
        </Pressable>
      )}
      {title && (
        <Text testID="title" fontSize={18} fontFamily="Roboto-Bold">
          {title}
        </Text>
      )}
      <Box minWidth={42}>{rightElement}</Box>
    </Box>
  );
};

export default ScreenHeader;
