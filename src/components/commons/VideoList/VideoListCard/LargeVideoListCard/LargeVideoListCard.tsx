import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import Text from "../../../../designSystem/Text/Text"
import { LargeVideoListCardProps } from "./LargeVideoListCard.types"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import moment from "moment"
import { VideoIndication } from "../../../VideoIndication/VideoIndication"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../../utils/theme/theme"

const LargeVideoListCard = ({ video, onPress, title }: LargeVideoListCardProps) => {
  if (!video) return null

  const theme = useTheme<Theme>()

  const videoDurationString = video.lengthSeconds < 3600 ? 
    new Date(video.lengthSeconds * 1000).toISOString().slice(11, 19).replace('00:', '') :
    new Date(video.lengthSeconds * 1000).toISOString().slice(11, 19)

  return (
    <Pressable {...{ onPress }}>
      <Box
        width={"100%"}
        marginTop="sToM"
      >
        <Box
          width={"100%"}
          aspectRatio={16 / 9}
          justifyContent="space-between"
        >
          <Image
            source={{
              uri: (
                video && video.previewThumbnailURLMedium) ?
                video.previewThumbnailURLMedium :
                ''
            }}
            width={"100%"}
            aspectRatio={16 / 9}
            style={{
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          <Box 
            flex={1} 
            padding="s" 
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <VideoIndication>
                {videoDurationString}
              </VideoIndication>
            </Box>
            <Box flexDirection="row">
              <VideoIndication>
                {`${thousandFormatter2(video.vodViewCount, 1)} views`}
              </VideoIndication>
            </Box>
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
          <Text variant="videoCardUsername" numberOfLines={1}>{video.vodTitle}</Text>
          {video.game &&
            <Text variant="videoCardText" numberOfLines={1}>{video.game?.displayName}</Text>
          }
          <Text color="secondaryText" numberOfLines={1}>
            {moment(video.publishedAt).fromNow()}
          </Text>
        </Box>
      </Box>
    </Pressable>
  )
}

export default LargeVideoListCard