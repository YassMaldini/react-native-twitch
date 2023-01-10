import moment from "moment"
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import Text from "../../../designSystem/Text/Text"
import { ScheduleListCardProps } from "./ScheduleListCard.types"

const ScheduleListCard = ({ segment }: ScheduleListCardProps) => {
  if (!segment || segment.categories.length === 0) return null
  
  const IMAGE_WIDTH = 52

  return (
    <Box flexDirection="row" marginBottom="m">
      <Image
        source={{ uri: segment.categories[0].boxArtURL || '' }}
        width={IMAGE_WIDTH}
        aspectRatio={3/4}
        marginRight="m"
      />
      <Box 
        flex={1} 
        justifyContent="center"
      >
        <Text fontSize={18} fontFamily="Roobert-Bold" numberOfLines={1}>{segment.categories[0].displayName}</Text>
        <Text fontSize={15} fontFamily="Roobert-Medium" color="secondaryText">
          {segment.title}
        </Text>
        <Text fontSize={15} fontFamily="Roobert-Medium" color="secondaryText">
          {moment(segment.startAt).format('HH:mm')} - {moment(segment.endAt).format('HH:mm')}
        </Text>
      </Box>
    </Box>
  )
}

export default ScheduleListCard