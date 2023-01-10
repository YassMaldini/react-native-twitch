import { useNavigation } from "@react-navigation/native"
import { useQuery } from "react-query"
import { TopGamesQueryResponse } from "../../../../../types/models/operations/queries/TopGamesQuery.types"
import { TopGamesQuery, TOP_GAMES_QUERY_KEY } from "../../../../../utils/api/operations/queries/TopGamesQuery"
import GamesList from "../../../../commons/GamesList/GamesList"
import { GamesListSize } from "../../../../commons/GamesList/GamesList.types"
import Loading from "../../../../commons/Loading/Loading"
import Text from "../../../../designSystem/Text/Text"
import { BrowseScreenProps } from "../BrowseScreen.types"

const CategoriesBox = () => {
  const navigation = useNavigation<BrowseScreenProps['navigation']>()
  
  const { data, isLoading, error } = useQuery<TopGamesQueryResponse['data'], Error>(TOP_GAMES_QUERY_KEY, () => TopGamesQuery())

  if (isLoading) return <Loading />
  if (error) return <Text>{error.message}</Text>

  return (
    <GamesList 
      gamesList={data?.games.edges}
      size={GamesListSize.Small}
      {...{ navigation }}
    />
  )
}

export default CategoriesBox