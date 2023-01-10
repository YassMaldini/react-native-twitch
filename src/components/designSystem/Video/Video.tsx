import { backgroundColor, border, createRestyleComponent, layout, spacing } from '@shopify/restyle';
import { Video as ExpoVideo, AVPlaybackStatusSuccess } from 'expo-av';
import { useRef, useState } from 'react';

import { Theme } from '../../../utils/theme/theme';
import { VideoProps } from './Video.types';
import Box from '../Box/Box';
import play from '../../../../assets/images/play.png';
import Image from '../Image/Image';
import Pressable from '../Pressable/Pressable';

const Component = createRestyleComponent<VideoProps, Theme>(
  [spacing, backgroundColor, border, layout],
  ExpoVideo
);

const Video = ({ isPlayable = true, pauseEnabled = true, ...props }: VideoProps) => {
  const video = useRef<ExpoVideo>(null);
  const [status, setStatus] = useState<AVPlaybackStatusSuccess>();

  // const onPress = () => {
  //   if (video && video.current) {
  //     if (status && status.isPlaying) {
  //       video.current.pauseAsync();
  //     } else {
  //       video.current.playAsync();
  //     }
  //   }
  // };

  const onPressPlay = () => {
    if (video && video.current) video.current.playAsync();
  };

  const onPressPause = () => {
    if (video && video.current) video.current.pauseAsync();
  };

  return (
    <Box flex={1} position="relative">
      {pauseEnabled ? (
        <Pressable onPress={onPressPause}>
          <Component
            ref={video}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(status as AVPlaybackStatusSuccess)}
            {...props}
          />
        </Pressable>
      ) : (
        <Component
          ref={video}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(status as AVPlaybackStatusSuccess)}
          {...props}
        />
      )}
      {Boolean(!status || !status.isPlaying) && isPlayable && (
        <Box
          position="absolute"
          top={0}
          left={0}
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%">
          <Pressable onPress={onPressPlay}>
            <Image source={play} width={200} height={200} />
          </Pressable>
        </Box>
      )}
    </Box>
  );
};

export default Video;
