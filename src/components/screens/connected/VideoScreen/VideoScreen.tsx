import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Video from "react-native-video"
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image";
import Text from "../../../designSystem/Text/Text";
import moment from "moment";
import { thousandFormatter2 } from "../../../../utils/numbers/thousandFormatter";
import Pressable from "../../../designSystem/Pressable/Pressable";
import Button from "../../../designSystem/Button/Button";
import { ButtonColors, ButtonSizes } from "../../../designSystem/Button/Button.types";
import { ChipColors } from "../../../designSystem/Chip/Chip.types";
import Chip from "../../../designSystem/Chip/Chip";
import { useStreamAccessToken } from "../../../../hooks/useStreamAccessToken/useStreamAccessToken";
import { useNavigation, useRoute } from "@react-navigation/native";
import { VideoScreenProps } from "./VideoScreen.types";
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer";
import Chat from "../../../commons/Chat/Chat";

import ArrowDownImage from "../../../../../assets/images/video/ic_arrow_down.png"
import SettingsImage from "../../../../../assets/images/video/ic_settings.png"
import UserImage from "../../../../../assets/images/video/ic_user.png"
import VolumeImage from "../../../../../assets/images/video/ic_vol_unmute.png"
import RotateImage from "../../../../../assets/images/video/ic_rotate.png"
import PauseImage from "../../../../../assets/images/video/ic_media_pause_dark.png"
import PlayImage from "../../../../../assets/images/video/ic_media_play_dark.png"

const VideoScreen = () => {
  const navigation = useNavigation<VideoScreenProps["navigation"]>()
  const { params } = useRoute<VideoScreenProps["route"]>()
  const { stream } = params

  const diff = moment(new Date()).diff(new Date(stream.streamDate))

  // const [videoSize, setVideoSize] = useState<OnLoadData['naturalSize']>();
  const [videoTime, setVideoTime] = useState(diff);
  const [isVideoActionsDisplayed, setVideoActionsDisplayed] = useState(true);
  const [isVideoPaused, setVideoPaused] = useState(false)

  const { data, isLoading, error } = useStreamAccessToken({
    channelName: stream.streamBroadcaster.login || '',
    // isEnabled: playedMedia !== null,
    isEnabled: true
  })

  useEffect(() => {
    const timer = setInterval(
      () => {
        setVideoTime(value => value + 1000)
      },
      1000
    )
    return () => clearInterval(timer)
  }, [])

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
            source={{
              uri: `https://usher.ttvnw.net/api/channel/hls/${stream.streamBroadcaster.login}.m3u8?${encodeURI(`token=${data?.value}&sig=${data?.signature}&player_backend=Core&cache_buster=1670839163342&fast_bread=true&allow_source=true&allow_audio_only=true&autoplayed=true&mobile_cellular=true&force_preroll=false&warp=false&dt=1&dmk=Google&dmdl=sdk_gphone64_arm64&os=Android`)}`
            }}
            style={{
              aspectRatio: 16 / 9,
              width: Dimensions.get('window').width,
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: 'purple'
            }}
            resizeMode="cover"
            paused={isVideoPaused}
          />
          {isVideoActionsDisplayed && <>
            <Box flexDirection="row" justifyContent="space-between">
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
                  <Text>{thousandFormatter2(stream.streamViewCount, 1)}</Text>
                </Box>
              </Box>
              <Box flexDirection="row" alignItems="center">
                <Image
                  source={VolumeImage}
                  width={26}
                  height={26}
                  marginRight="m"
                />
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
            source={{ uri: stream.streamBroadcaster.profileImageURL }}
            width={32}
            height={32}
            borderRadius="l"
          />
          <Box flex={1} marginHorizontal="sToM">
            <Text variant="videoCardUsername" marginBottom="xxs" fontSize={18}>
              {stream.streamBroadcaster.displayName}
            </Text>
            <Text variant="videoCardText" marginBottom="xxxs">
              {stream.streamTitle}
            </Text>
            <Text variant="videoCardText" marginBottom="xxxs">
              {stream.game.displayName}
            </Text>
            <Box
              flexDirection="row"
              marginTop="xs"
            >
              {
                stream.freeformTags.map((tag, index) => index < 3 && (
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
        <Chat userLogin={stream.streamBroadcaster.login} {...{ navigation }} />
      </Box>
    </SafeAreaContainer>
  )
}

export default VideoScreen;