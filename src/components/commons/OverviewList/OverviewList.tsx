import { FlashList } from "@shopify/flash-list"
import { memo, useCallback } from "react"
import { VideoConnectionEdge } from "../../../types/models/gql/video.types"
import { CollectionsQueryEdge } from "../../../types/models/operations/queries/CollectionsQuery.types"
import Box from "../../designSystem/Box/Box"
import Pressable from "../../designSystem/Pressable/Pressable"
import Text from "../../designSystem/Text/Text"
import { CommonScreensScreenList } from "../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types"
import MediumCollectionListCard from "../CollectionsList/MediumCollectionListCard/MediumCollectionListCard"
import MediumVideoListCard from "../VideoList/VideoListCard/MediumVideoListCard/MediumVideoListCard"
import { OverviewListProps, OverviewListTypes } from "./OverviewList.types"

const OverviewList = ({ title, itemsList, type, navigation: { navigate } }: OverviewListProps) => {

  const CurrentFlashList = useCallback(
    () => {
      switch (type) {
        case OverviewListTypes.Collections:
          return (
            <FlashList
              data={itemsList as CollectionsQueryEdge[]}
              renderItem={({ item }) => (
                <MediumCollectionListCard
                  collection={item.node}
                />
              )}
              horizontal
              estimatedItemSize={194}
            />
          )
        case OverviewListTypes.VideoConnection:
          return (
            <FlashList
              data={itemsList as VideoConnectionEdge[]}
              renderItem={({ item }) => (
                <MediumVideoListCard
                  video={item.node}
                  onPress={() => {
                    navigate(CommonScreensScreenList.VodScreen, { video: item.node })
                  }}
                />
              )}
              horizontal
              estimatedItemSize={194}
            />
          )
        default:
          return <Text>No List to display</Text>
      }
    },
    [type, itemsList, navigate]
  )

  const onPress = () => {
    switch (type) {
      case OverviewListTypes.Collections:
        return navigate('CollectionsListScreen', { collectionsList: itemsList })
      case OverviewListTypes.VideoConnection:
        return navigate('VodListScreen', { title, itemsList })
    }
  }

  return (
    <Box marginBottom="m">
      <Box 
        flexDirection="row" 
        alignItems="center" 
        justifyContent="space-between"
        marginBottom="xxs"
      >
        <Text 
          fontFamily="Roobert-SemiBold" 
          fontSize={16} 
          color="secondaryText"
        >
          {title}
        </Text>
        <Pressable {...{ onPress }}>
          <Text fontFamily="Roobert-SemiBold" color="highlightedText">VIEW ALL</Text>
        </Pressable>
      </Box>
      <CurrentFlashList />
    </Box>
  )
}

export default memo(OverviewList)