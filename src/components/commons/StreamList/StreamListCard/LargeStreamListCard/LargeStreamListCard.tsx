import { Dimensions } from "react-native"
import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../designSystem/Text/Text"
import { LargeStreamListCardProps } from "./LargeStreamListCard.types"
import OptionsIcon from "../../../../../../assets/vectors/options.svg"
import Chip from "../../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../../designSystem/Chip/Chip.types"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import { Icons } from "../../../Icon/Icon"
import { CommonIcons } from "../../../Icon/Icon.types"

const LargeStreamListCard = ({ stream, optionsIconProps, ...rest }: LargeStreamListCardProps) => {
  if (!stream) return null

  return (
    <Pressable {...rest}>
      <Box
        width={Dimensions.get('window').width}
        marginTop="sToM"
        marginRight="sToM"
      >
        <Image
          source={{
            uri: (
              stream && stream.previewImageURLMedium) ?
              stream.previewImageURLMedium :
              ''
          }}
          width={Dimensions.get('window').width}
          aspectRatio={16 / 9}
        />
        <Box
          flexDirection="row"
          paddingVertical="sToM"
          padding="sToM"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Image
            source={{ uri: stream.streamBroadcaster.profileImageURL || '' }}
            width={40}
            aspectRatio={1}
            borderRadius="l"
            marginRight="sToStoM"
          />
          <Box flex={1}>
            <Box>
              <Text
                lineHeight={18}
                variant="videoCardUsername"
                numberOfLines={1}
              >
                {stream.streamBroadcaster.displayName}
              </Text>
              <Text variant="videoCardText" numberOfLines={1}>{stream.streamTitle}</Text>
              <Text variant="videoCardText" numberOfLines={1}>{stream.game.displayName}</Text>
            </Box>
            <Box
              flexDirection="row"
              marginTop="xs"
            >
              {
                stream.freeformTags.map((tag, index) => index < 3 && (
                  <Chip key={tag.name} color={ChipColors.PrimaryOutline} marginRight="s">
                    {tag.name}
                  </Chip>
                ))
              }
            </Box>
          </Box>
          <Pressable 
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
      </Box>
    </Pressable>
  )
}

export default LargeStreamListCard