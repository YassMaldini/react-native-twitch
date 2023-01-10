import { useNavigation } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import { useContext, useEffect, useMemo } from "react"
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query"
import { channelVods } from "../../../../../../../../__mocks__/api/channelVods"
import { collections } from "../../../../../../../../__mocks__/api/collections"
import { ChannelVodsQueryResponse } from "../../../../../../../types/models/operations/queries/ChannelVodsQuery.types"
import { CollectionsQueryResponse } from "../../../../../../../types/models/operations/queries/CollectionsQuery.types"
import Loading from "../../../../../../commons/Loading/Loading"
import { NoContent } from "../../../../../../commons/NoContent/NoContent"
import OverviewList from "../../../../../../commons/OverviewList/OverviewList"
import { OverviewListTypes } from "../../../../../../commons/OverviewList/OverviewList.types"
import MediumVideoListCard from "../../../../../../commons/VideoList/VideoListCard/MediumVideoListCard/MediumVideoListCard"
import Box from "../../../../../../designSystem/Box/Box"
import Text from "../../../../../../designSystem/Text/Text"
import { ProfileScreenContext } from "../../../ProfileScreen.context"
import { ProfileScreenProps } from "../../../ProfileScreen.types"
import { ProfileVideosTabQuery, PROFILE_VIDEOS_TAB_QUERY_KEY } from "./ProfileVideosTab.query"
import { ProfileVideosTabQueryResponse } from "./ProfileVideosTab.types"

export const ProfileVideosTab = () => {

  const { user } = useContext(ProfileScreenContext)

  if (!user) return null

  const channelId = user.channelId || ''

  const navigation = useNavigation<ProfileScreenProps['navigation']>()

  const { 
    data, 
    isLoading, 
    error,
    refetch,
    isFetching,
    isRefetching
  } = useQuery<ProfileVideosTabQueryResponse, Error>(
    [PROFILE_VIDEOS_TAB_QUERY_KEY, { channelId }],
    () => ProfileVideosTabQuery(channelId)
  )

  useEffect(() => {
      refetch<{userId: string}>(
        { userId: user?.channelId || '' } as RefetchOptions & RefetchQueryFilters<{ userId: string; }>
      )
  }, [user, refetch])

  const collectionsList = useMemo(
    () => data && (data[0] as CollectionsQueryResponse).data.user.collections.edges,
    [data]
  )

  const vodArchiveList = useMemo(
    () => data && (data[1] as ChannelVodsQueryResponse).data.user.videos.edges,
    [data]
  )

  const vodHighlightList = useMemo(
    () => data && (data[2] as ChannelVodsQueryResponse).data.user.videos.edges,
    [data]
  )

  const vodPastPremiereList = useMemo(
    () => data && (data[3] as ChannelVodsQueryResponse).data.user.videos.edges,
    [data]
  )

  const vodUploadList = useMemo(
    () => data && (data[4] as ChannelVodsQueryResponse).data.user.videos.edges,
    [data]
  )

  const [
    hasCollectionsList,
    hasVodArchiveList,
    hasVodUploadList,
    hasVodHighlightList
  ] = [
    Boolean(collectionsList && collectionsList.length > 0),
    Boolean(vodArchiveList && vodArchiveList.length > 0),
    Boolean(vodUploadList && vodUploadList.length > 0),
    Boolean(vodHighlightList && vodHighlightList.length > 0)
  ]

  const isEmpty = Boolean(
    !hasCollectionsList &&
    !hasVodArchiveList &&
    !hasVodUploadList &&
    !hasVodHighlightList
  )

  if (isLoading || isFetching || isRefetching) return <Loading />
  if (error) return <Text>{error.message}</Text>
  if (isEmpty) return <NoContent />

  return (
    <Box flex={1}>
      {hasCollectionsList &&
        <OverviewList 
          title="COLLECTIONS"
          itemsList={collectionsList}
          type={OverviewListTypes.Collections}
          {...{ navigation }}
        />
      }
      {hasVodArchiveList &&
        <OverviewList 
          title="PAST BROADCASTS"
          itemsList={vodArchiveList}
          type={OverviewListTypes.VideoConnection}
          {...{ navigation }}
        />
      }
      {hasVodUploadList &&
        <OverviewList 
          title="UPLOADS"
          itemsList={vodUploadList}
          type={OverviewListTypes.VideoConnection}
          {...{ navigation }}
        />
      }
      {hasVodHighlightList &&
        <OverviewList 
          title="HIGHLIGHTS"
          itemsList={vodHighlightList}
          type={OverviewListTypes.VideoConnection}
          {...{ navigation }}
        />
      }
      {/* {vodPastPremiereList &&
        <OverviewList 
          title="PAST PREMIERE"
          itemsList={vodPastPremiereList}
          type={OverviewListTypes.VideoConnection}
          {...{ navigation }}
        />
      } */}
    </Box>
  )
}