import { percentage } from "../../../../../utils/numbers/percentage"
import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../designSystem/Text/Text"
import { ExtraSmallVideoListCardProps } from "./ExtraSmallVideoListCard.types"

import OptionsIcon from "../../../../../assets/vectors/options.svg"
import moment from "moment"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"
import Pressable from "../../../../designSystem/Pressable/Pressable"

const IMAGE_ASPECT_RATIO = 320 / 180
const IMAGE_HEIGHT = 62
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_ASPECT_RATIO

const ExtraSmallVideoListCard = ({ video, ...rest }: ExtraSmallVideoListCardProps) => {
  return (
    <Pressable {...rest}>
      <Box
        paddingVertical="sToM"
        paddingRight="xs"
        flexDirection="row"
      >
        <Box
          position="relative"
          backgroundColor="disabledButtonBackground"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          marginRight="sToM"
        >
          <Image
            source={{ uri: video.previewThumbnailURLMedium }}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
          <Box
            position="absolute"
            left={0}
            bottom={0}
            width={percentage(video.self.viewingHistory.position || 0, video.lengthSeconds)}
            height={4}
            backgroundColor='primaryHighlight'
          />
        </Box>
        <Box flex={1}>
          <Text
            variant="videoCardUsername"
            numberOfLines={2}
            ellipsizeMode="tail"
            marginBottom="xs"
          >
            {video.vodTitle}
          </Text>
          <Text
            color="secondaryText"
            fontSize={15}
            numberOfLines={1}
          >
            {video.game?.displayName} · {thousandFormatter2(video.vodViewCount, 1)} views · {moment(video.publishedAt).startOf('day').fromNow()}
          </Text>
        </Box>
      </Box>
    </Pressable>
  )
}

export default ExtraSmallVideoListCard