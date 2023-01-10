import { Dimensions, View } from "react-native"
import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../designSystem/Text/Text"
import { MediumVideoListCardProps } from "./MediumVideoListCard.types"
import OptionsIcon from "../../../../../assets/vectors/options.svg"
import Chip from "../../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../../designSystem/Chip/Chip.types"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import moment from "moment"
import { VideoIndication } from "../../../VideoIndication/VideoIndication"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../../utils/theme/theme"
import { useEffect } from "react"

const MediumVideoListCard = ({ video, onPress, title, ...props }: MediumVideoListCardProps) => {
  if (!video) return null

  const theme = useTheme<Theme>()

  const ELEMENT_WIDTH = ((Dimensions.get('window').width - (theme.spacing.sToStoM * 2)) * 0.75)

  const videoDurationString = video.lengthSeconds < 3600 ? 
    new Date(video.lengthSeconds * 1000).toISOString().slice(11, 19).replace('00:', '') :
    new Date(video.lengthSeconds * 1000).toISOString().slice(11, 19)

  return (
    <Pressable marginRight="sToStoM" {...{ onPress }} {...props}>
      <Box
        width={ELEMENT_WIDTH}
        marginTop="sToM"
        // marginHorizontal="sToStoM"
      >
        <Box
          width={ELEMENT_WIDTH}
          aspectRatio={16 / 9}
          padding="xs"
          justifyContent="space-between"
        >
          <Image
            source={{
              uri: (
                video && video.previewThumbnailURLMedium) ?
                video.previewThumbnailURLMedium :
                ''
            }}
            width={ELEMENT_WIDTH}
            aspectRatio={16 / 9}
            style={{
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          <Box flexDirection="row">
            <VideoIndication>
              {/* {moment(video.lengthSeconds, 'seconds').format(
                video.lengthSeconds < 3600 ? 'mm:ss' : 'hh:mm:ss'
              )} */}
              {videoDurationString}
            </VideoIndication>
          </Box>
          <Box flexDirection="row">
            <VideoIndication>
              {`${thousandFormatter2(video.vodViewCount, 1)} views`}
            </VideoIndication>
          </Box>
        </Box>
        <Box paddingVertical="sToM">
          {title ?
            <Text
              fontSize={16}
              numberOfLines={1}
              color="highlightedText"
              fontFamily="Roobert-SemiBold"
            >
              {title}
            </Text> :
            <Text
              lineHeight={18}
              variant="videoCardUsername"
              numberOfLines={1}
            >
              {video.owner.displayName}
            </Text>}
          <Text variant="videoCardText" numberOfLines={1}>{video.vodTitle}</Text>
          {video.game &&
            <Text variant="videoCardText" numberOfLines={1}>{video.game?.displayName}</Text>
          }
        </Box>
      </Box>
    </Pressable>
  )
}

export default MediumVideoListCard