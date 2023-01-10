import Pressable from "../../../designSystem/Pressable/Pressable";
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon";
import Text from "../../../designSystem/Text/Text";
import { LargeBottomModalItemProps } from "./LargeBottomModalItem.types";
import RightArrowIcon from "../../../../../assets/vectors/from_twitch_app/arrow_right.svg"
import Box from "../../../designSystem/Box/Box";
import Image from "../../../designSystem/Image/Image";

const LargeBottomModalItem = ({ children, icon, imageSource, showRightArrow, ...rest }: LargeBottomModalItemProps) => {

  const ICON_SIZE = 42

  return (
    <Pressable 
      backgroundColor="gray6"
      paddingVertical="mToL"
      paddingHorizontal="sToMtoM"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...rest}
    >
      <Box flexDirection="row" alignItems="center">
        {icon && 
          <SvgIcon 
            {...{ icon }}
            width={ICON_SIZE}
            height={ICON_SIZE}
            marginRight="m"
            color="secondaryText"
          />
        }
        {imageSource &&
          <Image
            source={imageSource}
            width={ICON_SIZE}
            height={ICON_SIZE}
            borderRadius="l"
            marginRight="m"
          />
        }
        <Text fontFamily="Roobert-SemiBold" fontSize={18}>
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

export default LargeBottomModalItem;
