import { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import Video from "react-native-video"
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image";
import Text from "../../../designSystem/Text/Text";
import Pressable from "../../../designSystem/Pressable/Pressable";
import Button from "../../../designSystem/Button/Button";
import { ButtonColors, ButtonSizes } from "../../../designSystem/Button/Button.types";
import { ChipColors } from "../../../designSystem/Chip/Chip.types";
import Chip from "../../../designSystem/Chip/Chip";
import { useNavigation, useRoute } from "@react-navigation/native";
import { VodScreenProps } from "./VodScreen.types";
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer";
import Chat from "../../../commons/Chat/Chat";

import ArrowDownImage from "../../../../../assets/images/video/ic_arrow_down.png"
import SettingsImage from "../../../../../assets/images/video/ic_settings.png"
import VolumeImage from "../../../../../assets/images/video/ic_vol_unmute.png"
import RotateImage from "../../../../../assets/images/video/ic_rotate.png"
import PauseImage from "../../../../../assets/images/video/ic_media_pause_dark.png"
import PlayImage from "../../../../../assets/images/video/ic_media_play_dark.png"
import { useVodAccessToken } from "../../../../hooks/useVodAccessTokenQuery/useVodAccessToken";
import Slider from "@react-native-community/slider";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../../utils/theme/theme";
import { secondsToHMS } from "../../../../utils/date/secondsToHMS";

const VodScreen = () => {
  const navigation = useNavigation<VodScreenProps["navigation"]>()
  const { params } = useRoute<VodScreenProps["route"]>()
  const { video } = params

  const theme = useTheme<Theme>()

  const videoRef = useRef<Video>(null)

  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(video.self.viewingHistory.position || 0)
  const [videoRemainingTime, setVideoRemainingTime] = useState<number>(video.lengthSeconds)

  const [isVideoActionsDisplayed, setVideoActionsDisplayed] = useState(true);
  const [isVideoPaused, setVideoPaused] = useState(false)
  const [isVideoMuted, setVideoMuted] = useState(true)

  useEffect(() => {
    const diff = videoCurrentTime > 0 ? video.lengthSeconds - videoCurrentTime : 0
    setVideoRemainingTime(diff)
    // console.log('diff', secondsToHMS(diff))
  }, [videoCurrentTime])

  const {
    data,
    isLoading,
    error
  } = useVodAccessToken({
    vodId: video.id
  })

  useEffect(() => {
    const timer = setInterval(
      () => {
        setVideoCurrentTime(value => value + 1)
      },
      1000
    )
    if (isVideoPaused) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [isVideoPaused])

  const toggleVideoActions = () => {
    setVideoActionsDisplayed(value => !value)
    let displayVideoActionsTimeout: NodeJS.Timeout | null = setTimeout(() => {
      setVideoActionsDisplayed(false)
    }, 3000)
    if (!isVideoActionsDisplayed && displayVideoActionsTimeout) {
      clearTimeout(displayVideoActionsTimeout)
      displayVideoActionsTimeout = null
    }
  }

  return (
    <SafeAreaContainer>
      <Pressable onPress={toggleVideoActions}>
        <Box
          aspectRatio={16 / 9}
          position="relative"
          justifyContent="space-between"
        >
          <Video
            ref={videoRef}
            source={{
              uri: `https://usher.ttvnw.net/vod/${video.id}.m3u8?${encodeURI(`nauth=${data?.value}&nauthsig=${data?.signature}`)}`
            }}
            style={{
              aspectRatio: 16 / 9,
              width: Dimensions.get('window').width,
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'purple'
            }}
            onLoad={() => {
              if (videoCurrentTime) {
                videoRef.current?.seek(videoCurrentTime)
              }
            }}
            resizeMode="cover"
            paused={isVideoPaused}
            muted={isVideoMuted}
          />
          <Box
            flex={1}
            visible={isVideoActionsDisplayed}
          >
            <Box
              flexDirection="row"
              justifyContent="space-between"
            >
              <Image
                source={ArrowDownImage}
                width={28}
                height={28}
                marginTop="xxxs"
                marginRight="xxxs"
              />
              <Image
                source={SettingsImage}
                width={24}
                height={24}
                marginTop="xs"
                marginRight="xs"
              />
            </Box>
            <Box
              flex={1}
              justifyContent="center"
              position="relative"
              top={20}
            >
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
            </Box>
            <Box padding="s" flexDirection="row" justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
              </Box>
              <Box
                flexDirection="row"
                alignItems="center"
                position="relative"
                top={20}
              >
                <Pressable onPress={() => setVideoMuted(value => !value)}>
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
            <Box
              flexDirection="row"
              alignItems="center"
            >
              <Text
                fontSize={18}
                fontFamily="Roobert-SemiBold"
                marginHorizontal="s"
              >
                {secondsToHMS(videoCurrentTime)}
              </Text>
              <Slider
                style={{
                  flex: 1,
                  transform: [{ scaleY: 1 }],
                }}
                thumbTintColor="transparent"
                // thumbTintColor={theme.colors.twitchPurple}
                tapToSeek
                minimumValue={0}
                maximumValue={video.lengthSeconds < 1000 ? video.lengthSeconds : 1000}
                minimumTrackTintColor={theme.colors.twitchPurple}
                maximumTrackTintColor={theme.colors.gray3}
                value={(videoCurrentTime / video.lengthSeconds) * 1000}
                onSlidingComplete={(value) => {
                  videoRef.current?.seek((video.lengthSeconds * value) / 1000)
                  setVideoCurrentTime((video.lengthSeconds * value) / 1000)
                }}
              />
              <Text
                fontSize={18}
                fontFamily="Roobert-SemiBold"
                marginHorizontal="s"
              >
                - {secondsToHMS(videoRemainingTime)}
              </Text>
            </Box>
          </Box>
        </Box>
      </Pressable>
      <Box flex={1}>
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
            source={{ uri: video.owner.profileImageURL }}
            width={32}
            height={32}
            borderRadius="l"
          />
          <Box flex={1} marginHorizontal="sToM">
            <Text variant="videoCardUsername" marginBottom="xxs" fontSize={18}>
              {video.owner.displayName}
            </Text>
            <Text variant="videoCardText" marginBottom="xxxs">
              {video.vodTitle}
            </Text>
            {video.game &&
              <Text variant="videoCardText" marginBottom="xxxs">
                {video.game.displayName}
              </Text>
            }
            <Box
              flexDirection="row"
              marginTop="xs"
            >
              {
                video.contentTags.map((tag, index) => index < 3 && (
                  <Chip key={tag.tagName} color={ChipColors.PrimaryOutline} marginRight="s">
                    {tag.tagName}
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
        <Chat userLogin={video.owner.login} {...{ navigation }} />
      </Box>
    </SafeAreaContainer>
  )
}

export default VodScreen;