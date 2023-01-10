import Box from "../../../../designSystem/Box/Box"
import Chip from "../../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../../designSystem/Chip/Chip.types"
import Image from "../../../../designSystem/Image/Image"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../designSystem/Text/Text"
import { SmallStreamListCardProps } from "./SmallStreamListCard.types"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import { Icons } from "../../../Icon/Icon"
import { CommonIcons } from "../../../Icon/Icon.types"
import { FlashList } from "@shopify/flash-list"

const IMAGE_ASPECT_RATIO = 320 / 180
const IMAGE_HEIGHT = 62
const IMAGE_WIDTH = IMAGE_HEIGHT * IMAGE_ASPECT_RATIO

const SmallStreamListCard = ({ stream, optionsIconProps, ...rest }: SmallStreamListCardProps) => {

  // const { setPlayedMedia } = useContext(RootContext)

  if (!stream) return null

  return (
    <Pressable
      paddingVertical="sToM"
      paddingRight="xs"
      flexDirection="row"
      {...rest}
    >
      <Box 
        position="relative" 
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        marginRight="sToM"
      >
        <Image
          source={{ uri: stream.previewImageURLMedium || '' }}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
        <Box
          position="absolute"
          left={2}
          bottom={2}
        >
          <Text fontSize={12}>{stream.streamViewCount}</Text>
        </Box>
      </Box>
      <Box flex={1}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Image
                source={{ uri: stream.streamBroadcaster.profileImageURL || '' }}
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
                  {stream.streamBroadcaster.displayName}
                </Text>
            </Box>
            <Text lineHeight={22} variant="videoCardText" numberOfLines={1}>{stream.streamTitle}</Text>
            <Text lineHeight={19} variant="videoCardText" numberOfLines={1}>{stream.game.displayName}</Text>
          </Box>
          <Pressable 
            justifyContent="center" 
            {...optionsIconProps?.pressable}
            onPress={(e) => {
              if (optionsIconProps?.pressable?.onPress) {
                optionsIconProps?.pressable?.onPress(e, stream.streamBroadcaster)
              }
            }}
          >
            <SvgIcon
              icon={Icons[CommonIcons.Options]}
              width={22}
              height={22}
              color="secondaryText"
              {...optionsIconProps?.icon}
            />
          </Pressable>
        </Box>
        {stream.streamTags.length > 0 &&
          <Box 
            flexDirection="row"
            marginTop="xxs"
          >
            <FlashList 
              data={stream.freeformTags}
              renderItem={({ item }) => (
                <Chip key={item.name} color={ChipColors.PrimaryOutline} marginRight="s">
                  {item.name}
                </Chip>
              )}
              estimatedItemSize={76}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </Box>
        }
      </Box>
    </Pressable>
  )
}

export default SmallStreamListCard