import { FlashList } from "@shopify/flash-list"
import { isLoading } from "expo-font"
import { useContext, useEffect, useMemo } from "react"
import { ActivityIndicator } from "react-native"
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query"
import { profilePanel } from "../../../../../../../__mocks__/api/profielPanel"
import { DefaultPanel } from "../../../../../../types/models/gql/panel.types"
import { ProfilePanelsQueryResponse } from "../../../../../../types/models/operations/queries/ProfilePanelsQuery.types"
import { ProfilePanelsQuery, PROFILE_PANELS_QUERY_KEY } from "../../../../../../utils/api/operations/queries/ProfilePanelsQuery"
import Loading from "../../../../../commons/Loading/Loading"
import { NoContent } from "../../../../../commons/NoContent/NoContent"
import PanelItem from "../../../../../commons/PanelItem/PanelItem"
import Box from "../../../../../designSystem/Box/Box"
import Text from "../../../../../designSystem/Text/Text"
import { ProfileScreenContext } from "../../ProfileScreen.context"

export const ProfileAboutTab = () => {

  const { user } = useContext(ProfileScreenContext)

  if (!user) return null

  const channelId = user.channelId || ''

  const {
    data: profilePanel,
    isLoading,
    error,
    refetch,
    isFetching,
    isRefetching
  } = useQuery<ProfilePanelsQueryResponse['data'], Error>(
    [PROFILE_PANELS_QUERY_KEY, { channelId }],
    () => ProfilePanelsQuery(channelId),
    {
      enabled: false
    }
  )

  useEffect(() => {
    refetch<{channelId: string}>({ channelId: user?.channelId || '' } as RefetchOptions & RefetchQueryFilters<{ channelId: string; }>)
  }, [user, profilePanel, refetch])

  const isEmpty = profilePanel?.user.panels.length === 0

  if (isLoading || isFetching || isRefetching) return <Loading />
  if (error) return <Text>{error.message}</Text>
  if (!profilePanel) return <Text>No results</Text>
  if (isEmpty) return <NoContent />
  
  return (
    <Box flex={1}>
      <FlashList 
        data={profilePanel.user.panels}
        renderItem={({ item, index }) => {
          const isDefaultPanel = item.__typename === "DefaultPanel"
          if (isDefaultPanel) {
            return <PanelItem key={index} panel={item as DefaultPanel} />
          } else {
            return null
          }
        }}
        estimatedItemSize={80}
      />
    </Box>
  )
}