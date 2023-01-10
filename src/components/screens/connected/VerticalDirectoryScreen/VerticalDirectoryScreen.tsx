import { useNavigation, useRoute } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import { ScrollView } from "react-native"
import { useQuery } from "react-query"
import { Game } from "../../../../types/models/gql/game.types"
import { TextToken } from "../../../../types/models/gql/shelves.types"
import { Stream } from "../../../../types/models/gql/stream.types"
import { VerticalDirectoryQueryResponse } from "../../../../types/models/operations/queries/VerticalDirectoryQuery.types"
import { VerticalDirectoryQuery, VERTICAL_DIRECTORY_QUERY_KEY } from "../../../../utils/api/operations/queries/VerticalDirectoryQuery"
import GamesList from "../../../commons/GamesList/GamesList"
import { GamesListSize } from "../../../commons/GamesList/GamesList.types"
import Loading from "../../../commons/Loading/Loading"
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer"
import StreamList from "../../../commons/StreamList/StreamList"
import { StreamListSize } from "../../../commons/StreamList/StreamList.types"
import Text from "../../../designSystem/Text/Text"
import { VerticalDirectoryScreenProps } from "./VerticalDirectoryScreen.types"

const VerticalDirectoryScreen = () => {
  const navigation = useNavigation<VerticalDirectoryScreenProps['navigation']>()
  const { params } = useRoute<VerticalDirectoryScreenProps['route']>()
  const { type } = params

  const { 
    data, 
    isLoading, 
    isFetching 
  } = useQuery<VerticalDirectoryQueryResponse['data'], Error>(
    VERTICAL_DIRECTORY_QUERY_KEY, 
    () => VerticalDirectoryQuery(type)
  )

  if (isLoading || isFetching) return <Loading />

  return (
    <SafeAreaContainer>
      <ScrollView>
        <Text variant="title" paddingHorizontal="sToM">{type}</Text>
      {
        data?.verticalDirectory.shelfGroups.map(({ shelves }) => (
          <FlashList
            data={shelves}
            estimatedItemSize={200}
            renderItem={({ item, index }) => {
              const cardType = item.content.edges[0].node?.__typename
              if (cardType === "Stream") {
                return (
                  <StreamList
                    size={StreamListSize.Medium}
                    streamsList={item.content.edges as { node: Stream }[]}
                    listTitle={
                      item.title ? item.title.localizedTitleTokens.reduce(
                        (acc, tokens) => {
                          return (acc + (tokens.node as TextToken).text) as string
                        },
                        ''
                      ) || '' : ''
                    }
                    {...{ navigation }}
                  />
                )
              } else if (cardType === "Game") {
                return (
                  <GamesList
                    size={GamesListSize.Medium}
                    gamesList={item.content.edges as { node: Game }[]}
                    listTitle={
                      item.title ? item.title.localizedTitleTokens.reduce(
                        (acc, tokens) => {
                          return (acc + (tokens.node as TextToken).text) as string
                        },
                        ''
                      ) || '' : ''
                    }
                    {...{ navigation }}
                  />
                )
              } else {
                return null
              }
            }}
          />
        ))
      }
      </ScrollView>
    </SafeAreaContainer>
  )
}

export default VerticalDirectoryScreen