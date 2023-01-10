import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { VideoListProps, VideoListSize } from "./VideoList.types";
import { memo } from "react";
import { VideoEdge } from "../../../types/models/gql/video.types";
import VideoListCard from "./VideoListCard/VideoListCard";
import { CommonScreensScreenList } from "../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types";

const VideoList = ({ title, listTitle, size, limit, videoList, ...rest }: VideoListProps) => {

  const navigation = useNavigation<NavigationProp<any, any>>()

  const listToRender = !limit ?
    videoList :
    videoList?.reduce(
      (acc, item) => (
        [...acc, item]
      ),
      [] as VideoEdge[]
    )
  
  const isHorizontal = Boolean(
    size === VideoListSize.MidMedium ||
    size === VideoListSize.Large
  )

  return (
    <Box flex={1} marginTop="s" marginBottom="m">
      {title && <Text variant="title" marginBottom="sToM">{title}</Text>}
      {listTitle && <Text variant="listTitle">{listTitle}</Text>}
      <FlashList
        data={listToRender}
        renderItem={({ item: { node: video }, index }) => {
          return (
            <VideoListCard
              {...rest}
              key={`streamListCard#${index}`}
              onPress={() => {
                navigation.navigate(CommonScreensScreenList.VodScreen, { video })
              }}
              {...{ video, size }}
            />
          )
        }}
        estimatedItemSize={200}
        horizontal={isHorizontal}
      />
    </Box>
  )
}

export default memo(VideoList)