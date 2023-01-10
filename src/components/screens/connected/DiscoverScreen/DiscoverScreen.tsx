import { FlashList } from "@shopify/flash-list"
import { useQuery } from "react-query"
import { Game } from "../../../../types/models/gql/game.types"
import { TextToken } from "../../../../types/models/gql/shelves.types"
import { Stream } from "../../../../types/models/gql/stream.types"
import { DiscoveryTabQuery, DISCOVER_TAB_QUERY_KEY } from "../../../../utils/api/operations/queries/DiscoveryTabQuery"
import GamesList from "../../../commons/GamesList/GamesList"
import StreamList from "../../../commons/StreamList/StreamList"
import CategoryActions from "./CategoryActions/CategoryActions"
import { GamesListSize } from "../../../commons/GamesList/GamesList.types"
import { StreamListSize } from "../../../commons/StreamList/StreamList.types"
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer"
import Loading from "../../../commons/Loading/Loading"
import NavBar from "../../../commons/NavBar/NavBar"
import { useNavigation } from "@react-navigation/native"
import { DiscoverScreenProps } from "./DiscoverScreen.types"
import { DiscoveryTabQueryResponse } from "../../../../types/models/operations/queries/DiscoveryTabQuery.types"

const DiscoverScreen = () => {
  const navigation = useNavigation<DiscoverScreenProps['navigation']>()

  const { 
    data, 
    isLoading,
    isFetching
  } = useQuery<DiscoveryTabQueryResponse['data'], Error>(
    DISCOVER_TAB_QUERY_KEY, 
    () => DiscoveryTabQuery()
  )

  if (isLoading || isFetching) return <Loading />

  return (
    <SafeAreaContainer>
      <NavBar {...{ navigation }} />
      <FlashList 
        data={data?.shelves.edges}
        renderItem={({ item, index }) => {
          const cardType = item.node.content.edges[0].node?.__typename
          if (cardType === "Stream") {
            return (
              <>
                <StreamList
                  size={StreamListSize.Medium} 
                  streamsList={item.node.content.edges as { node: Stream }[]}
                  title={index === 0 ? 'Discover' : undefined}
                  listTitle={
                    item.node.title.localizedTitleTokens.reduce(
                      (acc, tokens) => {
                        return (acc + (tokens.node as TextToken).text) as string
                      },
                      ''
                    ) || ''
                  }
                  {...{ navigation }}
                />
                {index === 0 && <CategoryActions />}
              </>
            )
          } else if (cardType === "Game") {
            return (
              <>
                <GamesList
                  size={GamesListSize.Small}
                  gamesList={item.node.content.edges as { node: Game }[]}
                  listTitle={
                    item.node.title.localizedTitleTokens.reduce(
                      (acc, tokens) => {
                        return (acc + (tokens.node as TextToken).text) as string
                      },
                      ''
                    ) || ''
                  }
                  {...{ navigation }}
                />
                {index === 0 && <CategoryActions />}
              </>
            )
          } else {
            return index === 0 ? <CategoryActions /> : <></>
          }
        }}
        estimatedItemSize={272}
      />
    </SafeAreaContainer>
  )
}

export default DiscoverScreen