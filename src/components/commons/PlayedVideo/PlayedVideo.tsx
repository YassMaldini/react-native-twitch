import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { memo, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ActivityIndicator, GestureResponderEvent, Platform, ReturnKeyType, StatusBar } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { DraxView } from "react-native-drax";
import Animated, { call, Easing, EasingNode, interpolate, useAnimatedStyle, useCode, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import RNVideo from "react-native-video";
import { useSelector } from "react-redux";
import { useStreamAccessToken } from "../../../hooks/useStreamAccessToken/useStreamAccessToken";
import { playedMediaSelector } from "../../../store/main/mainReducerSelectors";
import { Theme } from "../../../utils/theme/theme";
import Box from "../../designSystem/Box/Box"
import Button from "../../designSystem/Button/Button";
import Image from "../../designSystem/Image/Image";
import Pressable from "../../designSystem/Pressable/Pressable";
import Text from "../../designSystem/Text/Text";
import { RootContext } from "../../navigation/RootStack/RootStack.context";
import Chat from "../Chat/Chat";

import ArrowDownImage from "../../../../assets/images/video/ic_arrow_down.png"
import SettingsImage from "../../../../assets/images/video/ic_settings.png"
import UserImage from "../../../../assets/images/video/ic_user.png"
import VolumeImage from "../../../../assets/images/video/ic_vol_unmute.png"
import RotateImage from "../../../../assets/images/video/ic_rotate.png"
import PauseImage from "../../../../assets/images/video/ic_media_pause_dark.png"
import PlayImage from "../../../../assets/images/video/ic_media_play_dark.png"
import moment from "moment";
import { thousandFormatter2 } from "../../../utils/numbers/thousandFormatter";
import { useSwipe } from "../../../hooks/useSwipe/useSwipe";
import Chip from "../../designSystem/Chip/Chip";
import { ChipColors } from "../../designSystem/Chip/Chip.types";
import { ButtonColors, ButtonSizes } from "../../designSystem/Button/Button.types";

const PlayedVideo = ({ children }: { children?: ReactNode }) => {
  const playedMedia = useSelector(playedMediaSelector)

  if (!playedMedia) return null

  const { bottomBarHeight } = useContext(RootContext)

  const navigation = useNavigation()

  const BOTTOM_BAR_HEIGHT = 49

  const { top, bottom } = useSafeAreaInsets()

  const TOP_SPACING = ((Platform.OS === 'ios' ? top : (StatusBar.currentHeight || 0) + 4) || 0)

  const BOTTOM_SPACING = Platform.OS === 'ios' ? bottom + 44 : BOTTOM_BAR_HEIGHT

  const diff = moment(new Date()).diff(new Date(playedMedia.streamDate))

  const [videoTime, setVideoTime] = useState(diff);
  const [isVideoActionsDisplayed, setVideoActionsDisplayed] = useState(true);
  const [isVideoPaused, setVideoPaused] = useState(false)
  const [isVideoMuted, setVideoMuted] = useState(false)

  const { colors } = useTheme<Theme>()

  const videoRef = useRef<RNVideo>(null)
  const { data, isLoading, error } = useStreamAccessToken({
    channelName: playedMedia?.streamBroadcaster.login || '',
    isEnabled: true
  })

  // useEffect(() => {
  //   if (data) console.log(`https://usher.ttvnw.net/api/channel/hls/${playedMedia?.streamBroadcaster.login}.m3u8?${encodeURI(`token=${data?.value}&sig=${data?.signature}&player_backend=Core&cache_buster=1670839163342&fast_bread=true&allow_source=true&allow_audio_only=true&autoplayed=true&mobile_cellular=true&force_preroll=false&warp=false&dt=1&dmk=Google&dmdl=sdk_gphone64_arm64&os=Android`)}`)
  // }, [data])

  const [videoPosition, setVideoPosition] = useState<{
    bottom?: number,
    right?: number,
    top?: number,
    left?: number
  }>({
    bottom: BOTTOM_SPACING,
    right: 10,
    top: undefined,
    left: undefined
  })

  useEffect(() => {
    if (playedMedia) {
      widthAnimation.value = WINDOW_WIDTH
      heightAnimation.value = WINDOW_HEIGHT - BOTTOM_SPACING
      // positionAnimation.top.value = 0
      positionAnimation.right.value = 0
      positionAnimation.bottom.value = BOTTOM_SPACING
      // positionAnimation.left.value = 0
      setIsFullScreen(true)
    }
  }, [playedMedia, bottomBarHeight])

  const [isDragStarted, setDragStarted] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = useSafeAreaFrame()

  const widthAnimation = useSharedValue(150);
  const heightAnimation = useSharedValue(85);
  const positionAnimation = {
    // top: useSharedValue(0),
    right: useSharedValue(10),
    bottom: useSharedValue(BOTTOM_SPACING),
    // left: useSharedValue(0)
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(widthAnimation.value, {
        duration: 250,
        easing: Easing.linear
      }),
      height: withTiming(heightAnimation.value, {
        duration: 250,
        easing: Easing.linear
      }),
      right: withTiming(positionAnimation.right.value, {
        duration: 250,
        easing: Easing.linear
      }),
      bottom: withTiming(positionAnimation.bottom.value, {
        duration: 250,
        easing: Easing.linear
      })
    };
  }, [widthAnimation, heightAnimation, positionAnimation]);

  const toggleVideoActions = useCallback(
    () => {
      if (isFullScreen) {
        setVideoActionsDisplayed(value => !value)
        let displayVideoActionsTimeout: NodeJS.Timeout | null = setTimeout(() => {
          setVideoActionsDisplayed(false)
        }, 3000)
        if (!isVideoActionsDisplayed && displayVideoActionsTimeout) {
          clearTimeout(displayVideoActionsTimeout)
          displayVideoActionsTimeout = null
        }
      } else {
        widthAnimation.value = WINDOW_WIDTH
        heightAnimation.value = WINDOW_HEIGHT - BOTTOM_SPACING
        positionAnimation.right.value = 0
        positionAnimation.bottom.value = BOTTOM_SPACING
        setIsFullScreen(true)
      }
    },
    [isFullScreen, isVideoActionsDisplayed, setVideoActionsDisplayed]
  )

  const minimizeVideo = () => {
    widthAnimation.value = withSequence(
      withTiming(150, {
        duration: 250,
        easing: Easing.linear
      })
    )
    heightAnimation.value = withSequence(
      withTiming(85, {
        duration: 250,
        easing: Easing.linear
      })
    )
    positionAnimation.bottom.value = withSequence(
      withTiming(BOTTOM_SPACING, {
        duration: 250,
        easing: Easing.linear
      })
    )
    positionAnimation.right.value = withSequence(
      withTiming(10, {
        duration: 250,
        easing: Easing.linear
      })
    )
    setVideoPosition({
      top: undefined,
      right: 10,
      bottom: BOTTOM_SPACING,
      left: undefined
    })
    setIsFullScreen(false)
  }

  const { onTouchStart, onTouchEnd } = useSwipe({
    onSwipeBottom: () => minimizeVideo(),
    // rangeOffset: 6
  });

  return (
    <>
      {isDragStarted &&
        <Box flex={1}
          position={"absolute"}
          top={0}
          left={0}
          width={WINDOW_WIDTH}
          height={WINDOW_HEIGHT}>
          <DraxView
            style={[
              styles.receiver,
              {
                top: TOP_SPACING,
                left: 10
              }
            ]}
            onReceiveDragDrop={({ dragAbsolutePosition }) => {
              setVideoPosition({
                top: TOP_SPACING,
                right: undefined,
                bottom: undefined,
                left: 10
              })
              return dragAbsolutePosition
            }}
          />
          <DraxView
            style={[
              styles.receiver,
              {
                top: TOP_SPACING,
                right: 10
              }
            ]}
            onReceiveDragDrop={({ dragAbsolutePosition }) => {
              setVideoPosition({
                top: TOP_SPACING,
                right: 10,
                bottom: undefined,
                left: undefined
              })
              return dragAbsolutePosition
            }}
          />
          <DraxView
            style={[
              styles.receiver,
              {
                bottom: BOTTOM_SPACING,
                right: 10
              }
            ]}
            onReceiveDragDrop={({ dragAbsolutePosition }) => {
              setVideoPosition({
                top: undefined,
                right: 10,
                bottom: BOTTOM_SPACING,
                left: undefined
              })
              return dragAbsolutePosition
            }}
          />
          <DraxView
            style={[
              styles.receiver,
              {
                bottom: BOTTOM_SPACING,
                left: 10
              }
            ]}
            onReceiveDragDrop={({ dragAbsolutePosition }) => {
              setVideoPosition({
                top: undefined,
                right: undefined,
                bottom: BOTTOM_SPACING,
                left: 10
              })
              return dragAbsolutePosition
            }}
          />
        </Box>}
      <Animated.View
        style={[
          {
            zIndex: 1,
            position: 'absolute',
            backgroundColor: colors.secondaryBackground,
            ...videoPosition
          },
          animatedStyle
        ]}
      >
        <DraxView
          style={[
            styles.draggable,
            {
              top: videoPosition.top === 10 ? 1 : undefined,
              right: videoPosition.right === 10 ? 1 : undefined,
              bottom: videoPosition.bottom === BOTTOM_SPACING ? 1 : undefined,
              left: videoPosition.left === 10 ? 1 : undefined,
            }
          ]}
          longPressDelay={200}
          onDragStart={(e) => {
            setDragStarted(true);
          }}
          onDragDrop={() => {
            setDragStarted(false)
          }}
          draggable={!isFullScreen}
        >
          <Pressable
            backgroundColor="twitchPurple10"
          // onPress={() => {
          //   widthAnimation.value = WINDOW_WIDTH
          //   heightAnimation.value = WINDOW_HEIGHT - BOTTOM_SPACING
          //   positionAnimation.right.value = 0
          //   positionAnimation.bottom.value = BOTTOM_SPACING
          //   setIsFullScreen(true)
          // }}
          >
            {isLoading && <ActivityIndicator color="cyan" size="large" />}
            {error && <Text>{error.message}</Text>}
            {Boolean(isFullScreen) &&
              <Box
                backgroundColor="primaryBackground"
                height={videoPosition.top !== TOP_SPACING ? TOP_SPACING : 0}
              />
            }
            {Boolean(playedMedia && data && true) &&
              <Pressable
                onPress={toggleVideoActions}
                {...(
                  isFullScreen && {
                    onTouchStart,
                    onTouchEnd
                  }
                )}
              >
                <Box
                  aspectRatio={16 / 9}
                  position="relative"
                  justifyContent="space-between"
                >
                  <RNVideo
                    ref={videoRef}
                    source={{
                      uri: `https://usher.ttvnw.net/api/channel/hls/${playedMedia?.streamBroadcaster.login}.m3u8?${encodeURI(`token=${data?.value}&sig=${data?.signature}&player_backend=Core&cache_buster=1670839163342&fast_bread=true&allow_source=true&allow_audio_only=true&autoplayed=true&mobile_cellular=true&force_preroll=false&warp=false&dt=1&dmk=Google&dmdl=sdk_gphone64_arm64&os=Android`)}`
                    }}
                    style={{
                      aspectRatio: 16 / 9,
                      width: "100%",
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: 'purple'
                    }}
                    poster={playedMedia?.streamBroadcaster.bannerImageURL as string}
                    resizeMode="cover"
                    muted={false}
                    disableFocus={true}
                    paused={isVideoPaused}
                  />
                  {Boolean(isFullScreen && isVideoActionsDisplayed) && <>
                    <Box flexDirection="row" justifyContent="space-between">
                      <Pressable onPress={minimizeVideo}>
                        <Image
                          source={ArrowDownImage}
                          width={28}
                          height={28}
                          marginTop="xxxs"
                          marginRight="xxxs"
                        />
                      </Pressable>
                      <Image
                        source={SettingsImage}
                        width={24}
                        height={24}
                        marginTop="xs"
                        marginRight="xs"
                      />
                    </Box>
                    <Pressable alignSelf="center" onPress={() => setVideoPaused(value => !value)}>
                      {
                        isVideoPaused
                          ?
                          <Image
                            source={PlayImage}
                            width={52}
                            height={52}
                          />
                          :
                          <Image
                            source={PauseImage}
                            width={52}
                            height={52}
                          />
                      }
                    </Pressable>
                    <Box padding="s" flexDirection="row" justifyContent="space-between">
                      <Box flexDirection="row" alignItems="center">
                        <Box marginRight="m">
                          <Text>
                            {moment(videoTime).format('HH:mm:ss')}
                          </Text>
                        </Box>
                        <Box
                          flexDirection="row"
                          alignItems="center"
                          paddingVertical="xxxs"
                          paddingHorizontal="s"
                          borderRadius="xxs"
                          style={{ backgroundColor: '#00000080' }}
                        >
                          <Image
                            source={UserImage}
                            width={20}
                            height={20}
                          />
                          <Text>{thousandFormatter2(playedMedia?.streamViewCount || 0, 1)}</Text>
                        </Box>
                      </Box>
                      <Box flexDirection="row" alignItems="center">
                        <Pressable
                          onPress={() => setVideoMuted(value => !value)}
                        >
                          <Image
                            source={VolumeImage}
                            width={26}
                            height={26}
                            marginRight="m"
                          />
                        </Pressable>
                        <Image
                          source={RotateImage}
                          width={26}
                          height={26}
                        />
                      </Box>
                    </Box>
                  </>}
                </Box>
              </Pressable>
            }
            {/* {Boolean(playedMedia && data && true) &&
              <RNVideo
                ref={videoRef}
                source={{
                  uri: `https://usher.ttvnw.net/api/channel/hls/${playedMedia?.streamBroadcaster.login}.m3u8?${encodeURI(`token=${data?.value}&sig=${data?.signature}&player_backend=Core&cache_buster=1670839163342&fast_bread=true&allow_source=true&allow_audio_only=true&autoplayed=true&mobile_cellular=true&force_preroll=false&warp=false&dt=1&dmk=Google&dmdl=sdk_gphone64_arm64&os=Android`)}`
                }}
                style={{
                  aspectRatio: 16 / 9,
                  width: '100%'
                }}
                poster={playedMedia?.streamBroadcaster.bannerImageURL as string}
                resizeMode="cover"
                muted={false}
                disableFocus={true}
              />
            } */}
          </Pressable>
          {/* {playedMedia && <Chat stream={playedMedia} {...{ navigation }} />} */}
        </DraxView>
          <Box flex={1} visible={isFullScreen}>
            <Box height={TOP_SPACING} />
            <Box
              padding="sToM"
              flexDirection="row"
              justifyContent="space-between"
              borderBottomWidth={1}
              borderBottomColor="secondaryBackground"
              {...(
                !isVideoActionsDisplayed && {
                  visible: false
                }
              )}
            >
              <Image
                source={{ uri: playedMedia.streamBroadcaster.profileImageURL }}
                width={32}
                height={32}
                borderRadius="l"
              />
              <Box flex={1} marginHorizontal="sToM">
                <Text variant="videoCardUsername" marginBottom="xxs" fontSize={18}>
                  {playedMedia.streamBroadcaster.displayName}
                </Text>
                <Text variant="videoCardText" marginBottom="xxxs">
                  {playedMedia.streamTitle}
                </Text>
                <Text variant="videoCardText" marginBottom="xxxs">
                  {playedMedia.game.displayName}
                </Text>
                <Box
                  flexDirection="row"
                  marginTop="xs"
                >
                  {
                    playedMedia.freeformTags.map((tag, index) => index < 3 && (
                      <Chip key={tag.name} color={ChipColors.PrimaryOutline} marginRight="s">
                        {tag.name}
                      </Chip>
                    ))
                  }
                </Box>
              </Box>
              <Box>
                <Button
                  color={ButtonColors.Primary}
                  size={ButtonSizes.Small}
                  borderRadius="xs"
                  textProps={{
                    flex: 0
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Box>
            <Chat userLogin={playedMedia.streamBroadcaster.login} {...{ navigation }} />
          </Box>
      </Animated.View>
      {/* </Box> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  draggable: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: 'blue',
  },
  receiver: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.45,
    height: 250,
    backgroundColor: 'green'
  },
});

export default memo(PlayedVideo)