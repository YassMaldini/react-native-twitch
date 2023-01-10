import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { useQuery } from "react-query"
import { StreamsForGameQueryResponse } from "../../../../../../types/models/operations/queries/StreamsForGameQuery.types"
import { StreamsForGameQuery, STREAMS_FOR_GAME_QUERY_KEY } from "../../../../../../utils/api/operations/queries/StreamsForGameQuery"
import Loading from "../../../../../commons/Loading/Loading"
import StreamList from "../../../../../commons/StreamList/StreamList"
import { StreamListSize } from "../../../../../commons/StreamList/StreamList.types"
import Text from "../../../../../designSystem/Text/Text"
import { GameScreenContext } from "../../GameScreen.context"
import { GameScreenProps } from "../../GameScreen.types"

export const GameLiveChannelsTab = () => {

  const { game } = useContext(GameScreenContext)

  const navigation = useNavigation<GameScreenProps['navigation']>()

  const {
    data,
    isLoading,
    isFetching,
    error
  } = useQuery<StreamsForGameQueryResponse['data'], Error>(
    STREAMS_FOR_GAME_QUERY_KEY,
    () => StreamsForGameQuery(game.name)
  )

  if (isLoading || isFetching) return <Loading />
  if (error) return <Text>{error.message}</Text>

  return (
      <StreamList
        streamsList={data?.game.streams.edges}
        size={StreamListSize.Large}
        {...{ navigation }}
      />
  )
}