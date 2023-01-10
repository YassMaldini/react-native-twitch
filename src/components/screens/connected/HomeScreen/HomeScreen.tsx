import Box from '../../../designSystem/Box/Box';
import { memo, useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from './HomeScreen.types';
import { useQuery } from 'react-query';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import NavBar from '../../../commons/NavBar/NavBar';
import Text from '../../../designSystem/Text/Text';
import { HomeInitQuery, HOME_INIT_QUERY_KEY, ResumeWatchingVideosQuery, RESUME_WATCHING_VIDEOS_QUERY_KEY } from './HomeScreen.query';
import StreamList from '../../../commons/StreamList/StreamList';
import { StreamListSize } from '../../../commons/StreamList/StreamList.types';
import SafeAreaContainer from '../../../commons/SafeAreaContainer/SafeAreaContainer';
import VideoList from '../../../commons/VideoList/VideoList';
import { VideoListSize } from '../../../commons/VideoList/VideoList.types';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../utils/theme/theme';
import { FollowedContentFirstPageQueryResponse } from '../../../../types/models/operations/queries/FollowedContentFirstPageQuery.types';
import { RecommendedStreamsForUserResponse } from '../../../../types/models/operations/queries/RecommendedStreamsForUser.types';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps['navigation']>()

  const theme = useTheme<Theme>()

  const [refreshing, setRefreshing] = useState(false);

  const {
    data: firstQuery,
    isLoading: isFirstQueryLoading,
    error,
    refetch: refetchFirstQuery
  } = useQuery<(FollowedContentFirstPageQueryResponse | RecommendedStreamsForUserResponse)[], Error>(
    HOME_INIT_QUERY_KEY,
    () => HomeInitQuery()
  )

  const { data: viewedVideos, isLoading: isViewedVideoLoading } = useQuery(
    RESUME_WATCHING_VIDEOS_QUERY_KEY,
    () => ResumeWatchingVideosQuery(),
    {
      enabled: true,
    }
  )

  const recommendedStreamsList: RecommendedStreamsForUserResponse | undefined = useMemo(() => (
    firstQuery?.find(({ extensions }) => extensions.operationName === 'RecommendedStreamsForUser') as RecommendedStreamsForUserResponse
  ), [firstQuery])

  const followedStreamsList: FollowedContentFirstPageQueryResponse | undefined = useMemo(() => (
    firstQuery?.find(({ extensions }) => extensions.operationName === 'FollowedContentFirstPageQuery') as FollowedContentFirstPageQueryResponse
  ), [firstQuery])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetchFirstQuery().then(
      () => setRefreshing(false)
    )
  }, [setRefreshing, refetchFirstQuery]);

  if (isFirstQueryLoading || isViewedVideoLoading) return <ActivityIndicator color="red" size="large" />
  if (error) return <Text>{error.message}</Text>

  return (
    <SafeAreaContainer>
      <Box testID="home" flex={1}>
        <NavBar {...{ navigation }} />
        <ScrollView
          refreshControl={
            <RefreshControl 
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={theme.colors.secondaryText}
            />
          }
        >
          {followedStreamsList?.data.currentUser.followedLiveUsers.edges.length > 0 &&
            <StreamList
              size={StreamListSize.Small}
              title='Following'
              listTitle='Your Live Channels'
              streamsList={followedStreamsList?.data.currentUser.followedLiveUsers.edges}
              {...{ navigation }}
            />
          }
          {recommendedStreamsList?.data.recommendedStreams.edges.length > 0 &&
            <StreamList
              size={StreamListSize.Small}
              listTitle='Channels Recommended For You'
              streamsList={recommendedStreamsList?.data.recommendedStreams.edges}
              {...{ navigation }}
            />
          }
          {viewedVideos && viewedVideos.edges.length > 0 &&
            <VideoList
              size={VideoListSize.ExtraSmall}
              listTitle='Continue Watching'
              videoList={viewedVideos.edges}
            />
          }
        </ScrollView>
      </Box>
    </SafeAreaContainer>
  );
};

export default memo(HomeScreen);
