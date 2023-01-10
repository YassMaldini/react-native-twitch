import { Dimensions } from "react-native"
import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../designSystem/Text/Text"
import { MediumStreamListCardProps } from "./MediumStreamListCard.types"
import OptionsIcon from "../../../../../../assets/vectors/options.svg"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import { Icons } from "../../../Icon/Icon"
import { CommonIcons } from "../../../Icon/Icon.types"

const MediumStreamListCard = ({ stream, optionsIconProps, ...rest }: MediumStreamListCardProps) => {
  if (!stream) return null

  return (
    <Pressable {...rest}>
      <Box
        width={Dimensions.get('window').width * 0.65}
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
          width={Dimensions.get('window').width * 0.65}
          aspectRatio={16 / 9}
        />
        <Box
          flexDirection="row"
          paddingVertical="sToM"
          paddingLeft="sToM"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Image
            source={{ uri: stream.streamBroadcaster.profileImageURL || '' }}
            width={30}
            aspectRatio={1}
            borderRadius="l"
            marginRight="s"
          />
          <Box flex={1}>
            <Text
              lineHeight={18}
              variant="videoCardUsername"
              numberOfLines={1}
            >
              {stream.streamBroadcaster.displayName}
            </Text>
            <Text variant="videoCardText" numberOfLines={1}>{stream.streamTitle}</Text>
            {stream.game && <Text variant="videoCardText" numberOfLines={1}>{stream.game.displayName}</Text>}
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

export default MediumStreamListCard