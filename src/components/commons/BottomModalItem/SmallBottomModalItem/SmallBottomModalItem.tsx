import Pressable from "../../../designSystem/Pressable/Pressable";
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon";
import Text from "../../../designSystem/Text/Text";
import { SmallBottomModalItemProps } from "./SmallBottomModalItem.types";

const SmallBottomModalItem = ({ children, icon, color, ...rest }: SmallBottomModalItemProps) => {

  const ICON_SIZE = 22

  return (
    <Pressable 
      backgroundColor="gray6"
      paddingVertical="s" 
      paddingHorizontal="m"
      flexDirection="row"
      alignItems="center"
      {...rest}
    >
      {icon && 
        <SvgIcon 
          {...{ icon }}
          width={ICON_SIZE}
          height={ICON_SIZE}
          marginRight="sToM"
          {...{ color }}
        />
      }
      <Text fontFamily="Roobert-Medium" fontSize={16} {...{ color }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default SmallBottomModalItem;
