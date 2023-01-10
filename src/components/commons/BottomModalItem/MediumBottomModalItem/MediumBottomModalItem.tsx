import Pressable from "../../../designSystem/Pressable/Pressable";
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon";
import Text from "../../../designSystem/Text/Text";
import { MediumBottomModalItemProps } from "./MediumBottomModalItem.types";
import RightArrowIcon from "../../../../../assets/vectors/from_twitch_app/arrow_right.svg"
import Box from "../../../designSystem/Box/Box";

const MediumBottomModalItem = ({ children, icon, showRightArrow, ...rest }: MediumBottomModalItemProps) => {

  const ICON_SIZE = 25

  return (
    <Pressable 
      backgroundColor="gray6"
      padding="sToMtoM"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...rest}
    >
      <Box flexDirection="row">
        {icon && 
          <SvgIcon 
            {...{ icon }}
            width={ICON_SIZE}
            height={ICON_SIZE}
            marginRight="m"
            color="secondaryText"
          />
        }
        <Text fontFamily="Roobert-Medium" fontSize={18}>
          {children}
        </Text>
      </Box>
      {showRightArrow &&
        <SvgIcon 
          icon={RightArrowIcon}
          width={ICON_SIZE}
          height={ICON_SIZE}
          color="secondaryText"
        />
      }
    </Pressable>
  );
};

export default MediumBottomModalItem;
