import moment from "moment"
import { useContext, useEffect } from "react"
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query"
import { UserScheduleQueryResponse } from "../../../../../../types/models/operations/queries/UserScheduleQuery.types"
import { UserScheduleQuery, USER_SCHEDULE_QUERY_KEY } from "../../../../../../utils/api/operations/queries/UserScheduleQuery"
import Loading from "../../../../../commons/Loading/Loading"
import { NoContent } from "../../../../../commons/NoContent/NoContent"
import ScheduleList from "../../../../../commons/ScheduleList/ScheduleList"
import Box from "../../../../../designSystem/Box/Box"
import Text from "../../../../../designSystem/Text/Text"
import { ProfileScreenContext } from "../../ProfileScreen.context"

export const ProfileScheduleTab = () => {

  const { user } = useContext(ProfileScreenContext)

  if (!user) return null

  const channelId = user.channelId || ''

  const {
    data: userSchedule,
    isLoading,
    error,
    refetch,
    isRefetching
  } = useQuery<UserScheduleQueryResponse['data'], Error>(
    [USER_SCHEDULE_QUERY_KEY, { channelId }],
    () => UserScheduleQuery(channelId)
  )

  useEffect(() => {
      refetch(
        { userId: user?.channelId || '' } as 
        RefetchOptions & RefetchQueryFilters<{ userId: string; }>
      )
  }, [user, refetch])

  const isEmpty = !Boolean(
    userSchedule?.user.channel.schedule &&
    (
      userSchedule?.user.channel.schedule.nextSegment ||
      userSchedule?.user.channel.schedule.segmentList
    )
  )

  if (isLoading || isRefetching) return <Loading />
  if (error) return <Text>{error.message}</Text>
  if (isEmpty) return <NoContent />

  return (
    <Box flex={1}>
      {Boolean(userSchedule?.user.channel.schedule.nextSegment) &&
        <Text variant="title" marginBottom="l">
          {user?.displayName}'s next stream is on {moment(userSchedule?.user.channel.schedule.nextSegment.startAt).format('DD/MM [at] HH:mm')}.
        </Text>
      }
      {/* <ScheduleListCard segment={userSchedule.data.user.channel.schedule.nextSegment} /> */}
      {userSchedule?.user.channel.schedule.segmentList &&
        <ScheduleList segmentList={userSchedule?.user.channel.schedule.segmentList.edges} />
      }
    </Box>
  )
}