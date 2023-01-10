import { useQuery } from "react-query"
import { PopularStreamsQueryResponse } from "../../../../../types/models/operations/queries/PopularStreamsQuery.types"
import { PopularStreamsQuery, POPULAR_STREAMS_QUERY_KEY } from "../../../../../utils/api/operations/queries/PopularStreamsQuery"
import Loading from "../../../../commons/Loading/Loading"
import StreamList from "../../../../commons/StreamList/StreamList"
import { StreamListSize } from "../../../../commons/StreamList/StreamList.types"
import Text from "../../../../designSystem/Text/Text"
import { useNavigation } from "@react-navigation/native"
import { BrowseScreenProps } from "../BrowseScreen.types"

const LiveChannelsBox = () => {
  const navigation = useNavigation<BrowseScreenProps['navigation']>()

  const { data, isLoading, error } = useQuery<PopularStreamsQueryResponse['data'], Error>(POPULAR_STREAMS_QUERY_KEY, () => PopularStreamsQuery())

  if (isLoading) return <Loading />
  if (error) return <Text>{error.message}</Text>
  // if (true) return <Button onPress={() => navigation.navigate(CommonScreensList.ProfileScreen, {login: 'yassinho00'})}>Profile</Button>

  return (
    <StreamList 
      streamsList={data?.streams.edges}
      size={StreamListSize.Large}
      {...{ navigation }}
    />
  )
}

export default LiveChannelsBox