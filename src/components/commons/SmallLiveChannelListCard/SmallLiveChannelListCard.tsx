import Box from "../../designSystem/Box/Box"
import Chip from "../../designSystem/Chip/Chip"
import { ChipColors } from "../../designSystem/Chip/Chip.types"
import Image from "../../designSystem/Image/Image"
import Text from "../../designSystem/Text/Text"
import Pressable from "../../designSystem/Pressable/Pressable"
import { thousandFormatter2 } from "../../../utils/numbers/thousandFormatter"
import PartnerImage from "../../../../assets/images/commons/ic_partner_badge.png"
import { SmallLiveChannelListCardProps } from "./SmallLiveChannelListCard.types"

const IMAGE_ASPECT_RATIO = 320 / 180
const IMAGE_HEIGHT = 92
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_ASPECT_RATIO

const SmallLiveChannelListCard = ({ user, onPress }: SmallLiveChannelListCardProps) => {
  if (!user || !user.stream) return null

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
      >
        <Image
          source={{ uri: user.stream.previewImageURLMedium }}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
      </Box>
      <Box
        flex={1}
        height={IMAGE_HEIGHT}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <Text
            variant="videoCardUsername"
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize={15}
            marginRight="xxs"
          >
            {user.displayName}
          </Text>
          {user.roles.isPartner &&
            <Image
              source={PartnerImage}
              width={20}
              height={20}
            />
          }
        </Box>
        {user.stream && <>
          <Text fontSize={13} numberOfLines={1}>
            {user.stream.game?.displayName}
          </Text>
          <Text
            fontSize={13}
            lineHeight={17}
            numberOfLines={1}
            color="gray2"
          >
            {thousandFormatter2(user.stream.streamViewCount || 0, 1)} viewers
          </Text>
          <Text
            fontSize={13}
            lineHeight={17}
            numberOfLines={1}
            color="secondaryText"
          >
            {user.stream.streamTitle}
          </Text>
        </>}
        <Box
          flexDirection="row"
          marginTop="xs"
        >
          {
            user.stream && user.stream.freeformTags?.map((tag, index) => index < 3 && (
              <Chip key={tag.name} color={ChipColors.PrimaryOutline} marginRight="s">
                {tag.name}
              </Chip>
            ))
          }
        </Box>
      </Box>
    </Pressable>
  )
}

export default SmallLiveChannelListCard