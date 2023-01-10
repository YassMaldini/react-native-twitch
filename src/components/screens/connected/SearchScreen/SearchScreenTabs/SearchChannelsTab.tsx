import { FlashList } from "@shopify/flash-list"
import { useContext } from "react"
import Loading from "../../../../commons/Loading/Loading"
import { NoContent } from "../../../../commons/NoContent/NoContent"
import SmallChannelListCard from "../../../../commons/SmallChannelListCard/SmallChannelListCard"
import Box from "../../../../designSystem/Box/Box"
import { SearchScreenContext } from "../SearchScreen.context"

export const SearchChannelsTab = () => {

  const { searchResults, isResultsMutateLoading } = useContext(SearchScreenContext)

  if (isResultsMutateLoading) return <Loading />

  if (!searchResults) return <NoContent />

  return (
    <Box flex={1}>
      <FlashList
        data={searchResults.channels.items}
        renderItem={({ item }) => {
          return (
            <SmallChannelListCard
              user={item}
              onPress={() => {

              }}
            />
          )
        }}
        estimatedItemSize={92}
      />
    </Box>
  )
}