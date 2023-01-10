import { NavigationProp, useNavigation } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import { useContext } from "react"
import SmallGameListCard from "../../../../commons/GamesList/GamesListCard/SmallGameListCard/SmallGameListCard"
import Loading from "../../../../commons/Loading/Loading"
import { NoContent } from "../../../../commons/NoContent/NoContent"
import Box from "../../../../designSystem/Box/Box"
import { CommonScreensScreenList } from "../../../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types"
import { SearchScreenContext } from "../SearchScreen.context"

export const SearchCategoriesTab = () => {

  const navigation = useNavigation<NavigationProp<any>>()

  const { searchResults, isResultsMutateLoading } = useContext(SearchScreenContext)

  if (isResultsMutateLoading) return <Loading />

  if (!searchResults) return <NoContent />

  return (
    <Box flex={1}>
      <FlashList
        data={searchResults.games.items}
        renderItem={({ item }) => {
          return (
            <SmallGameListCard
              game={item}
              onPress={() => {
                navigation.navigate(CommonScreensScreenList.GameScreen, { game: item })
               }}
            />
          )
        }}
        estimatedItemSize={92}
      />
    </Box>
  )
}