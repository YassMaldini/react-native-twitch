import Box from "../../../designSystem/Box/Box"
import Text from "../../../designSystem/Text/Text"
import { FlashList } from "@shopify/flash-list"
import { VerticalVideoListProps } from "./VerticalVideoList.types"
import { memo } from "react"
import { Stream } from "../../../../types/models/gql/stream.types"
import VerticalVideoListCard from "../VideoListCard/old/VerticalVideoList/VerticalVideoListCard/VerticalVideoListCard"

const VerticalVideoList = ({ title, listTitle, streamsList }: VerticalVideoListProps) => {
  return (
    <Box flex={1} paddingLeft="sToM" marginTop="s">
      {title && <Text variant="title" marginBottom="sToM">{title}</Text>}
      <Text variant="listTitle">{listTitle}</Text>
      <FlashList
        data={streamsList}
        renderItem={({item}) => {
          const stream: Stream = (item.node as { stream: Stream }).stream ? (item.node as { stream: Stream }).stream : item.node as Stream
          return <VerticalVideoListCard {...{ stream }} />
        }}
        estimatedItemSize={5}
      />
    </Box>
  )
}

export default memo(VerticalVideoList)