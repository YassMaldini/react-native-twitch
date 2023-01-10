import { useEffect, useRef, useState } from "react"
import { ActivityIndicator } from "react-native"
import Video from "react-native-video"
import { useStreamAccessToken } from "../../../hooks/useStreamAccessToken/useStreamAccessToken"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { StreamVideoProps } from "./StreamVideo.types"

const StreamVideo = ({ stream }: StreamVideoProps) => {
  if (!stream) return null

  const videoRef = useRef<Video>(null)
  const { data, isLoading, error } = useStreamAccessToken({ channelName: stream.streamBroadcaster.login })

  if (isLoading) return <ActivityIndicator size="large" />
  if (error) return <Text>{error.message}</Text>

  return (
    <Box>
      <Video
        ref={videoRef}
        source={{ 
          uri: `https://usher.ttvnw.net/api/channel/hls/${stream.streamBroadcaster.login}.m3u8?${encodeURI(`token=${data?.value}&sig=${data?.signature}&player_backend=Core&cache_buster=1670839163342&fast_bread=true&allow_source=true&allow_audio_only=true&autoplayed=true&mobile_cellular=true&force_preroll=false&warp=false&dt=1&dmk=Google&dmdl=sdk_gphone64_arm64&os=Android`)}`
        }}
        style={{
          aspectRatio: 16/9,
          width: '100%'
        }}
        poster={stream.streamBroadcaster.bannerImageURL as string}
        muted
        disableFocus={true}
      />
    </Box>
  )
}

export default StreamVideo