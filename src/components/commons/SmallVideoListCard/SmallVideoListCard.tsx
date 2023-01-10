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
import { SmallVideoListCardProps } from "./SmallVideoListCard.types"
import moment from "moment"

const IMAGE_ASPECT_RATIO = 320 / 180
const IMAGE_HEIGHT = 92
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_ASPECT_RATIO

const SmallVideoListCard = ({ video, onPress }: SmallVideoListCardProps) => {
  if (!video) return null

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
          source={{ uri: video.previewThumbnailURLMedium || '' }}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alignSelf="center"
        />
      </Box>
      <Box
        flex={1}
        height={IMAGE_HEIGHT}
        flexDirection="column"
        justifyContent="space-between"
        paddingVertical="s"
      >
        <Text
          variant="videoCardUsername"
          numberOfLines={1}
          ellipsizeMode="tail"
          fontSize={15}
          marginRight="xxs"
        >
          {video.vodTitle}
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Text fontSize={13} numberOfLines={1}>
            {video.owner.displayName}
          </Text>
            {video.owner.roles.isPartner &&
              <Image
                source={PartnerImage}
                width={20}
                height={20}
              />
            }
        </Box>
        <Text
          fontSize={13}
          lineHeight={17}
          numberOfLines={1}
          color="gray2"
        >
          {video.game?.displayName}
        </Text>
        <Text
          fontSize={13}
          lineHeight={17}
          numberOfLines={1}
          color="secondaryText"
        >
        {thousandFormatter2(video.vodViewCount || 0, 1)} views · {moment(video.publishedAt).fromNow()}
        </Text>
      </Box>
    </Pressable>
  )
}

export default SmallVideoListCard