import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../designSystem/Text/Text"
import { SmallUserListCardProps } from "./SmallUserListCard.types"
import { Dimensions } from "react-native"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../../utils/theme/theme"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"

import OptionsIcon from "../../../../../../assets/vectors/options.svg"

const SmallUserListCard = ({ user }: SmallUserListCardProps) => {
  const theme = useTheme<Theme>()

  const ELEMENT_WIDTH = (Dimensions.get('window').width / 2) - theme.spacing.sToM
  const ELEMENT_HEIGHT = 30

  return (
    <Box
      width={ELEMENT_WIDTH}
      height={ELEMENT_HEIGHT}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="m"
    >
      <Box flexDirection="row" alignItems="center">
        <Box
        {...(user.stream && {
          padding: "xxxs",
          backgroundColor: "twitchPurple",
          borderRadius: "xl"
        })}
        marginRight="sToM"
        >
          <Image
            source={{ uri: user.profileImageURL }}
            width={ELEMENT_HEIGHT}
            height={ELEMENT_HEIGHT}
            borderRadius="xl"
          />
        </Box>
        <Box width={ELEMENT_WIDTH - ELEMENT_HEIGHT - 30}>
          <Text 
            fontSize={16} 
            fontFamily="Roobert-SemiBold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {user.displayName}
          </Text>
          <Text fontSize={15} color="secondaryText">
            {user.stream ? 
              `${thousandFormatter2((user.stream as { viewersCount: number; }).viewersCount || 0, 1)} viewers` : 
              "Offline"
            }
          </Text>
        </Box>
      </Box>
      <Pressable>
        <SvgIcon
          icon={OptionsIcon}
          width={18}
          height={18}
          color="secondaryText"
        />
      </Pressable>
    </Box>
  )
}

export default SmallUserListCard