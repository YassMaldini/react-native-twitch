import { LargeCollectionListCardProps } from "./LargeCollectionListCard.types"
import Pressable from "../../../designSystem/Pressable/Pressable"
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import { VideoIndication } from "../../VideoIndication/VideoIndication"
import Text from "../../../designSystem/Text/Text"
import { Theme } from "../../../../utils/theme/theme"
import { useTheme } from "@shopify/restyle"
import { Dimensions } from "react-native"

const LargeCollectionListCard = ({ collection, onPress, title, ...props }: LargeCollectionListCardProps) => {
  if (!collection) return null

  const theme = useTheme<Theme>()

  const ELEMENT_WIDTH = Dimensions.get('window').width - (theme.spacing.sToStoM * 2)

  const videoDurationString = collection.lengthSeconds < 3600 ?
    new Date(collection.lengthSeconds * 1000).toISOString().slice(11, 19).replace('00:', '') :
    new Date(collection.lengthSeconds * 1000).toISOString().slice(11, 19)

  return (
    <Pressable paddingHorizontal="sToStoM" {...{ onPress }} {...props}>
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
              uri: collection.thumbnailURL
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
              {/* {moment(collection.lengthSeconds, 'seconds').format(
                collection.lengthSeconds < 3600 ? 'mm:ss' : 'hh:mm:ss'
              )} */}
              {videoDurationString}
            </VideoIndication>
          </Box>
          <Box flexDirection="row">
            <VideoIndication>
              {`${collection.items.edges.length} video`}
            </VideoIndication>
          </Box>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Image 
            source={{ uri: collection.owner.profileImageURL }}
            width={40}
            height={40}
            borderRadius="l"
            marginRight="sToM"
          />
          <Box paddingVertical="sToM">
            <Text
              lineHeight={18}
              variant="videoCardUsername"
              numberOfLines={1}
              fontSize={17}
              marginBottom="xxxs"
            >
              {collection.owner.displayName}
            </Text>
            <Text variant="videoCardText" numberOfLines={1}>{collection.title}</Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  )
}

export default LargeCollectionListCard