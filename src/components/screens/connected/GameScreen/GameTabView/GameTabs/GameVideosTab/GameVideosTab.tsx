import { useNavigation } from "@react-navigation/native"
import { useTheme } from "@shopify/restyle"
import { useContext, useEffect, useMemo } from "react"
import { ScrollView } from "react-native"
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query"
import { GameVodsQueryResponse } from "../../../../../../../types/models/operations/queries/GameVodsQuery.types"
import { Theme } from "../../../../../../../utils/theme/theme"
import Loading from "../../../../../../commons/Loading/Loading"
import { NoContent } from "../../../../../../commons/NoContent/NoContent"
import OverviewList from "../../../../../../commons/OverviewList/OverviewList"
import { OverviewListTypes } from "../../../../../../commons/OverviewList/OverviewList.types"
import Text from "../../../../../../designSystem/Text/Text"
import { GameScreenContext } from "../../../GameScreen.context"
import { GameScreenProps } from "../../../GameScreen.types"
import { GameVideosTabQuery, GAME_VIDEOS_TAB_QUERY_KEY } from "./GameVideosTab.query"

export const GameVideosTab = () => {

  const { game } = useContext(GameScreenContext)

  if (!game) return null

  const name = game.name || ''

  const theme = useTheme<Theme>()

  const navigation = useNavigation<GameScreenProps['navigation']>()

  const { 
    data, 
    isLoading, 
    error,
    refetch,
    isFetching,
    isRefetching
  } = useQuery<GameVodsQueryResponse[], Error>(
    [GAME_VIDEOS_TAB_QUERY_KEY, { name }],
    () => GameVideosTabQuery(name)
  )

  useEffect(() => {
      refetch<{name: string}>(
        { name: game.name || '' } as RefetchOptions & RefetchQueryFilters<{ name: string }>
      )
  }, [game, refetch])

  const vodArchiveList = useMemo(
    () => data && (data[0] as GameVodsQueryResponse).data.game.videos.edges,
    [data]
  )

  const vodHighlightList = useMemo(
    () => data && (data[1] as GameVodsQueryResponse).data.game.videos.edges,
    [data]
  )

  const vodPastPremiereList = useMemo(
    () => data && (data[2] as GameVodsQueryResponse).data.game.videos.edges,
    [data]
  )

  const vodUploadList = useMemo(
    () => data && (data[3] as GameVodsQueryResponse).data.game.videos.edges,
    [data]
  )

  const [
    hasVodArchiveList,
    hasVodUploadList,
    hasVodHighlightList
  ] = [
    Boolean(vodArchiveList && vodArchiveList.length > 0),
    Boolean(vodUploadList && vodUploadList.length > 0),
    Boolean(vodHighlightList && vodHighlightList.length > 0)
  ]

  const isEmpty = Boolean(
    !hasVodArchiveList &&
    !hasVodUploadList &&
    !hasVodHighlightList
  )

  if (isLoading || isFetching || isRefetching) return <Loading />
  if (error) return <Text>{error.message}</Text>
  if (isEmpty) return <NoContent />

  return (
    <ScrollView contentContainerStyle={{ padding: theme.spacing.sToStoM }}>
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
    </ScrollView>
  )
}