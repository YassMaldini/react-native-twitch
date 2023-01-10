import { NavigationProp, useNavigation } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import { useContext } from "react"
import Loading from "../../../../commons/Loading/Loading"
import { NoContent } from "../../../../commons/NoContent/NoContent"
import SmallVideoListCard from "../../../../commons/SmallVideoListCard/SmallVideoListCard"
import VideoList from "../../../../commons/VideoList/VideoList"
import Box from "../../../../designSystem/Box/Box"
import { CommonScreensScreenList } from "../../../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types"
import { SearchScreenContext } from "../SearchScreen.context"

export const SearchVideosTab = () => {

  const navigation = useNavigation<NavigationProp<any>>()

  const { searchResults, isResultsMutateLoading } = useContext(SearchScreenContext)

  if (isResultsMutateLoading) return <Loading />

  if (!searchResults) return <NoContent />

  return (
    <Box flex={1}>
      <FlashList 
        data={searchResults.videos.items}
        renderItem={({ item }) => {
          return (
            <SmallVideoListCard
              video={item}
              onPress={() => {
                navigation.navigate(CommonScreensScreenList.VodScreen, { video: item })
              }}
            />
          )
        }}
        estimatedItemSize={92}
      />
    </Box>
  )
}