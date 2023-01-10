import Box from "../../../../../designSystem/Box/Box"
import Text from "../../../../../designSystem/Text/Text"
import { FlashList } from "@shopify/flash-list"
import { VerticalVideoListProps } from "./VerticalVideoList.types"
import { memo } from "react"
import { Stream } from "../../../../../../types/models/gql/stream.types"
import VerticalVideoListCard from "./VerticalVideoListCard/VerticalVideoListCard"
import { Video } from "../../../../../../types/models/gql/video.types"

const VerticalVideoList = ({ title, listTitle, videosList }: VerticalVideoListProps) => {
  return (
    <Box flex={1} paddingLeft="sToM" marginTop="s">
      {title && <Text variant="title" marginBottom="sToM">{title}</Text>}
      <Text variant="listTitle">{listTitle}</Text>
      <FlashList
        data={videosList}
        renderItem={({item}) => {
          const video: Video = item.node
          return <VerticalVideoListCard {...{ video }} />
        }}
        estimatedItemSize={5}
      />
    </Box>
  )
}

export default memo(VerticalVideoList)