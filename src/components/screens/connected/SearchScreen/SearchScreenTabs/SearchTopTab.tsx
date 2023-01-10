import { FlashList } from "@shopify/flash-list"
import { useContext } from "react"
import SmallLiveChannelListCard from "../../../../commons/SmallLiveChannelListCard/SmallLiveChannelListCard"
import SmallChannelListCard from "../../../../commons/SmallChannelListCard/SmallChannelListCard"
import Box from "../../../../designSystem/Box/Box"
import { SearchScreenContext } from "../SearchScreen.context"
import Loading from "../../../../commons/Loading/Loading"
import { NoContent } from "../../../../commons/NoContent/NoContent"
import { setPlayedMedia } from "../../../../../store/main/mainActions/mainActions"
import { useDispatch } from "react-redux"
import { Stream } from "../../../../../types/models/gql/stream.types"
import { NavigationProp, useNavigation } from "@react-navigation/native"

export const SearchTopTab = () => {

  const dispatch = useDispatch()

  const { searchResults, isResultsMutateLoading } = useContext(SearchScreenContext)

  if (isResultsMutateLoading) return <Loading />

  if (!searchResults) return <NoContent />

  return (
    <Box flex={1}>
      <FlashList 
        data={searchResults.channels.items}
        renderItem={({ item }) => {
          if (item.stream) {
            return (
              <SmallLiveChannelListCard
                user={item}
                onPress={() => {
                  console.log(item)
                  console.log(item.stream)
                  if (item.stream) {
                    setPlayedMedia({
                      ...item.stream,
                      streamBroadcaster: {
                        ...item,
                        stream: undefined
                      }
                    } as Stream)(dispatch)
                  }
                }}
              />
            )
          } else {
            return (
              <SmallChannelListCard 
                user={item}
                onPress={() => {}}
              />
            )
          }
        }}
        estimatedItemSize={92}
      />
    </Box>
  )
}