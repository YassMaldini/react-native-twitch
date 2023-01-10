import { FlashList } from "@shopify/flash-list"
import moment from "moment"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { ScheduleListProps } from "./ScheduleList.types"
import ScheduleListCard from "./ScheduleListCard/ScheduleListCard"

const ScheduleList = ({ segmentList }: ScheduleListProps) => {
  return (
    <Box flex={1} marginBottom="l">
      <FlashList 
        data={segmentList}
        renderItem={({ item, index }) => (
          <Box key={`scheduleCard#${index}`}>
            <Text variant="listTitle" marginBottom="sToM">{moment(item.node.startAt).format("dddd DD MMMM")}</Text>
            <ScheduleListCard segment={item.node} />
          </Box>
        )}
        estimatedItemSize={120}
      />
    </Box>
  )
}

export default ScheduleList