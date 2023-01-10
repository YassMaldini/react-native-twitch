import Box from "../../designSystem/Box/Box"
import Chip from "../../designSystem/Chip/Chip"
import { ChipColors } from "../../designSystem/Chip/Chip.types"
import Image from "../../designSystem/Image/Image"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import Text from "../../designSystem/Text/Text"
import OptionsIcon from "../../../../assets/vectors/options.svg"
import Pressable from "../../designSystem/Pressable/Pressable"
import { thousandFormatter2 } from "../../../utils/numbers/thousandFormatter"
import Button from "../../designSystem/Button/Button"
import { ButtonSizes } from "../../designSystem/Button/Button.types"

import FollowImage from "../../../../assets/images/dark/navigation/ic_navigation_following_inactive.png"
import PartnerImage from "../../../../assets/images/commons/ic_partner_badge.png"
import { SmallChannelListCardProps } from "./SmallChannelListCard.types"

const IMAGE_ASPECT_RATIO = 320 / 180
const IMAGE_HEIGHT = 92
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_ASPECT_RATIO

const SmallChannelListCard = ({ user, onPress }: SmallChannelListCardProps) => {
  if (!user) return null

  return (
    <Pressable
      paddingVertical="sToM"
      paddingRight="xs"
      flexDirection="row"
      {...{ onPress }}
    >
      <Box
        position="relative"
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        marginRight="sToM"
        justifyContent="center"
      >
        <Image
          source={{ uri: user.profileImageURL }}
          // width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT * 0.75}
          aspectRatio={285 / 300}
          alignSelf="center"
          borderRadius="xl"
        />
      </Box>
      <Box
        flex={1}
        height={IMAGE_HEIGHT}
        flexDirection="column"
        justifyContent="space-between"
        paddingVertical="s"
      >
        <Box>
          <Text
            variant="videoCardUsername"
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize={15}
          >
            {user.displayName}
          </Text>
          <Text
            fontSize={13}
            lineHeight={17}
            numberOfLines={1}
            color="secondaryText"
          >
            {thousandFormatter2(user.followers?.totalCount || 0, 1)} followers
          </Text>
        </Box>
        <Box flexDirection="row">
          <Button
            textProps={{
              flex: 0,
              fontSize: 13
            }}
            beforeElement={
              <Image
                source={FollowImage}
                width={13}
                height={13}
                marginRight="s"
              />
            }
            borderRadius="xs"
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Pressable>
  )
}

export default SmallChannelListCard