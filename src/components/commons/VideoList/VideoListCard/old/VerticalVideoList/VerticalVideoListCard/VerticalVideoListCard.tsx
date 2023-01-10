import Box from "../../../../../../designSystem/Box/Box"
import Chip from "../../../../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../../../../designSystem/Chip/Chip.types"
import Image from "../../../../../../designSystem/Image/Image"
import { SvgIcon } from "../../../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../../../designSystem/Text/Text"
import OptionsIcon from "../../../../../../assets/vectors/options.svg"
import { VerticalVideoListCardProps } from "./VerticalVideoListCard.types"
import { percentage } from "../../../../../../../utils/numbers/percentage"

const IMAGE_ASPECT_RATIO = 320 / 180
const IMAGE_HEIGHT = 62
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_ASPECT_RATIO

const VerticalVideoListCard = ({ video }: VerticalVideoListCardProps) => {
  return (
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
        <Box
          flexDirection="row"
          justifyContent="space-between"
          height={IMAGE_HEIGHT}
        >
          <Box
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Image
                source={{ uri: video.owner.profileImageURL || '' }}
                width={22}
                aspectRatio={1}
                borderRadius="l"
                marginRight="s"
              />
              <Text 
                variant="videoCardUsername" 
                alignSelf="center"
                numberOfLines={1}
                ellipsizeMode="tail"
                >
                  {video.owner.displayName}
                </Text>
            </Box>
            <Text variant="videoCardText" numberOfLines={1}>{video.vodTitle}</Text>
            <Text variant="videoCardText">{video.game?.displayName}</Text>
          </Box>
          <SvgIcon 
            icon={OptionsIcon}
            alignSelf="center"
            width={23} 
            height={23}
            color="secondaryText"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default VerticalVideoListCard