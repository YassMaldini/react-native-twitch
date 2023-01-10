import { useContext, useEffect } from "react"
import LargeVideoListCard from "../../../../../commons/VideoList/VideoListCard/LargeVideoListCard/LargeVideoListCard"
import MidMediumVideoListCard from "../../../../../commons/VideoList/VideoListCard/MidMediumVideoListCard/MidMediumVideoListCard"
import Box from "../../../../../designSystem/Box/Box"
import Text from "../../../../../designSystem/Text/Text"
import { ProfileScreenContext } from "../../ProfileScreen.context"
import SmallUserListCard from "../../../../../commons/UsersList/UserListCard/SmallUserListCard/SmallUserListCard"
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query"
import { ProfileFromHomeQuery, PROFILE_FROM_HOME_QUERY_KEY } from "../../../../../../utils/api/operations/queries/ProfileHomeQuery"
import { ScrollView } from "react-native"
import { ProfileHomeQueryResponse } from "../../../../../../types/models/operations/queries/ProfileHomeQuery.types"
import GamesList from "../../../../../commons/GamesList/GamesList"
import { GamesListSize } from "../../../../../commons/GamesList/GamesList.types"
import VideoList from "../../../../../commons/VideoList/VideoList"
import { VideoListSize } from "../../../../../commons/VideoList/VideoList.types"
import { NoContent } from "../../../../../commons/NoContent/NoContent"
import Loading from "../../../../../commons/Loading/Loading"
import { ProfileScreenProps, ProfileTabProps } from "../../ProfileScreen.types"
import { useNavigation } from "@react-navigation/native"

const ProfileHomeTab = ({ user: ush }: ProfileTabProps) => {

  const navigation = useNavigation<ProfileScreenProps['navigation']>()

  const { user } = useContext(ProfileScreenContext)

  if (!user) return null

  const userId = user?.channelId || ''

  const {
    data: profileHome,
    isLoading,
    error,
    refetch,
    isRefetching
  } = useQuery<ProfileHomeQueryResponse['data'], Error>(
    [PROFILE_FROM_HOME_QUERY_KEY, {userId}],
    () => ProfileFromHomeQuery(userId)
  )

  useEffect(() => {
    refetch<{userId: string}>({ userId: user?.channelId || '' } as RefetchOptions & RefetchQueryFilters<{ userId: string; }>)
  }, [user, refetch])

  const isEmpty = Boolean(
    profileHome?.user.pastBroadcasts.edges.length === 0 && 
    profileHome?.user.channel.home.shelves.categoryShelf.edges.length === 0
  )

  if (isEmpty || !profileHome) return <NoContent />

  const channel = profileHome.user.channel
  const pastBroadcast = profileHome.user.pastBroadcasts
  const categories = profileHome.user.channel.home.shelves.categoryShelf

  const trailerVideo = channel.trailer.video

  if (isLoading || isRefetching) return <Loading />
  if (error) return <Text>{error.message}</Text>

  return (
    <ScrollView scrollEnabled={true} nestedScrollEnabled={true}>
      {trailerVideo ?
        <LargeVideoListCard
          title="Channel trailer"
          video={trailerVideo}
          onPress={() => { }}
        /> :
        (
          pastBroadcast.edges.length > 0 ?
            <LargeVideoListCard
              title="Past broadcast"
              video={pastBroadcast.edges[0].node}
              onPress={() => { }}
            /> :
            <></>
        )
      }
      {pastBroadcast.edges[0 + Number(!Boolean(trailerVideo))] && 
        <Box flexDirection="row" marginBottom="m">
          <MidMediumVideoListCard
            title="Past broadcast"
            video={pastBroadcast.edges[0 + Number(!Boolean(trailerVideo))].node}
            onPress={() => { }}
            marginRight="sToM"
          />
          {pastBroadcast.edges[1 + Number(!Boolean(trailerVideo))] &&
            <MidMediumVideoListCard
              title="Past broadcast"
              video={pastBroadcast.edges[1 + Number(!Boolean(trailerVideo))].node}
              onPress={() => { }}
            />
          }
        </Box>
      }
      {pastBroadcast.edges.length > 0 && 
        <VideoList
          listTitle="Recent broadcast"
          videoList={pastBroadcast.edges}
          size={VideoListSize.ExtraSmall}
          limit={3}
        />
      }
      {categories.edges.length > 0 &&
        <GamesList
          listTitle={`${user?.displayName}'s Streams by Category`}
          gamesList={categories.edges}
          size={GamesListSize.Medium}
          {...{ navigation }}
        />
      }
      {profileHome.user.channel.home.shelves.streamerShelf.edges.length > 0 &&
        <Box>
          <Text variant="listTitle" marginBottom="m">
            {user?.displayName} Suggest These Streamers
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            {profileHome.user.channel.home.shelves.streamerShelf.edges.map(({ node: user }, index) => index < 6 && (
              <SmallUserListCard key={index} {...{ user }} />
            ))}
          </Box>
        </Box>
      }
    </ScrollView>
  )
}

export default ProfileHomeTab