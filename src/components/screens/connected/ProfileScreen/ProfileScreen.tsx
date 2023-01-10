import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useMemo, useRef, useState } from "react"
import { Platform, ScrollView, StatusBar, useWindowDimensions } from "react-native"
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context"
import { useQuery } from "react-query"
import { ProfileFromChannelNameQueryResponse } from "../../../../types/models/operations/queries/ProfileFromChannelNameQuery.types"
import { ProfileFromChannelNameQuery, PROFILE_FROM_CHANNEL_NAME_QUERY_KEY } from "../../../../utils/api/operations/queries/ProfileFromChannelNameQuery"
import Loading from "../../../commons/Loading/Loading"
import SelectableTabs from "../../../commons/SelectableTabs/SelectableTabs"
import { SelectableTabsData } from "../../../commons/SelectableTabs/SelectableTabs.types"
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import Text from "../../../designSystem/Text/Text"
import { ProfileHeader } from "./ProfileHeader/ProfileHeader"
import { ProfileNav } from "./ProfileNav/ProfileNav"
import { ProfileScreenContext } from "./ProfileScreen.context"
import { ProfileScreenProps } from "./ProfileScreen.types"
import ProfileTabView from "./ProfileTabView/ProfileTabView"
import { ProfileTabs } from "./ProfileTabView/ProfileTabView.data"

const ProfileScreen = () => {

  const { params } = useRoute<ProfileScreenProps['route']>()

  const { login } = params

  const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = useSafeAreaFrame()
  const { top, bottom } = useSafeAreaInsets()

  const [DEAFAULT_HEADER_HEIGHT, BLURRED_HEADER_HEIGHT] = [125, 80]

  const [isBannerVisible, setBannerVisible] = useState<boolean>(true)
  const [selectableTabsHeight, setSelectableTabsHeight] = useState<number>(0)

  const { 
    data: profileFromChannelName, 
    isLoading, 
    error
  } = useQuery<ProfileFromChannelNameQueryResponse['data'], Error>(
    PROFILE_FROM_CHANNEL_NAME_QUERY_KEY, 
    () => ProfileFromChannelNameQuery(login)
  )

  const contextValue = {
    user : profileFromChannelName?.user
  }

  const data = Object.values(ProfileTabs).reduce(
    (acc, { title, component: Component }) => ([
      ...acc,
      {
        label: title,
        component: <Component user={profileFromChannelName?.user} />
      }
    ]),
    [] as SelectableTabsData[]
  )

  if (isLoading) return <Loading />
  if (error) return <Text>{error.message}</Text>

  return (
    <ProfileScreenContext.Provider value={contextValue}>
      <Box flex={1}>
        <ScrollView
          stickyHeaderIndices={[1, 4]}
          onScroll={(e) => {
            if (e.nativeEvent.contentOffset.y < 25 || selectableTabsHeight < 200) {
              setBannerVisible(true)
            } else {
              setBannerVisible(false)
            }
          }}
          scrollEventThrottle={16}
          // bounces={false}
          scrollEnabled={true}
          // StickyHeaderComponent={() => <Box height={top} />}
        >
          <Box 
            visible={isBannerVisible || Platform.OS === 'android'}
            width={WINDOW_WIDTH}
            height={125}
            backgroundColor="twitchPurple"
          >
            <Image
              source={{ uri: profileFromChannelName?.user.bannerImageURL || '' }}
              width={WINDOW_WIDTH}
              height={DEAFAULT_HEADER_HEIGHT}
              backgroundColor="twitchPurple"
            />
          </Box>
          <Box visible={!isBannerVisible && Platform.OS === 'ios'}>
            <Image
              source={{ uri: profileFromChannelName?.user.bannerImageURL || '' }}
              width={WINDOW_WIDTH}
              height={BLURRED_HEADER_HEIGHT}
              blurRadius={80}
              backgroundColor="twitchPurple"
            />
          </Box>
          <ProfileNav {...{ profileFromChannelName }} />
          <ProfileHeader onLayout={e => setSelectableTabsHeight(e.nativeEvent.layout.height)} {...{ profileFromChannelName }} />
          <Box height={
            Platform.OS === 'ios'
              ? (WINDOW_HEIGHT - top - bottom - BLURRED_HEADER_HEIGHT)
              : (WINDOW_HEIGHT - top - bottom - (StatusBar.currentHeight || 0))
          }>
            <Box flex={1} zIndex={0}>
              <ProfileTabView />
            </Box>
          </Box>
          {/* <SelectableTabs
            onLayout={e => setSelectableTabsHeight(e.nativeEvent.layout.height)}
            tabProps={{
              marginHorizontal: 'sToStoM'
            }}
            tabItemProps={{
              gap: 35
            }}
            screensProps={{
              user: profileFromChannelName?.user
            }}
            {...{ data }}
          /> */}
        </ScrollView>
      </Box>
    </ProfileScreenContext.Provider>
  )
}

export default ProfileScreen