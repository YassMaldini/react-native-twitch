import Box from "../../../designSystem/Box/Box"
import Text from "../../../designSystem/Text/Text"
import Video from "react-native-video"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { secretsSelector } from "../../../../store/authentication/authenticationReducerSelectors"
import Button from "../../../designSystem/Button/Button"
import TextInput from "../../../designSystem/TextInput/TextInput"
import Image from "../../../designSystem/Image/Image"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"

import OptionsIcon from "../../../../../assets/vectors/options.svg"
import PollBitsImage from "../../../../../assets/images/video/ic_poll_bits.png"
import PollCrystalBallImage from "../../../../../assets/images/video/poll_crystal_ball.png"
import EmotesImage from "../../../../../assets/images/video/ic_emotes.png"

const TestScreen = () => {
  const secrets = useSelector(secretsSelector);

  const theme = useTheme<Theme>()

  // const ws = new WebSocket('https://irc-ws.chat.twitch.tv/');

  // useEffect(() => {
  //   if (secrets) {
  //     ws.onopen = () => {
  //       // connection opened
  //       ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
  //       // ws.send('PASS SCHMOOPIIE');
  //       // ws.send('NICK justinfan69797');
  //       // ws.send('USER justinfan69797 8 * :justinfan69797');
  //       ws.send(`PASS oauth:${secrets.token}`);
  //       ws.send('NICK yassinho00')
  //       // ws.send('USER yass_maldini 8 * :yass_maldini');
  //       ws.send('PONG')
  //       // ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
  //       // ws.send(`PASS oauth:ju8en76f00ssoku4mllk0n05mnkm3x`);
  //       // ws.send('PASS listen');
  //       ws.send('JOIN #chess');
  //       // ws.send('PASS listen');
  //       // ws.send('PONG')
  //     };

  //     ws.onmessage = (e) => {
  //       // a message was received
  //       console.log('message', e);
  //       // console.log(e.data);
  //     };

  //     ws.onerror = (e) => {
  //       // an error occurred
  //       console.log('error', e);
  //     };

  //     ws.onclose = (e) => {
  //       // connection closed
  //       console.log('close', e);
  //       console.log(e.code, e.reason);
  //     };
  //   }
  // }, [secrets])

  return (
    <Box flex={1}>
      <Box flex={1}>
        <Text>TestScreen</Text>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        paddingVertical="s"
      >
        <Pressable
          width={60}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            source={PollCrystalBallImage}
            width={24}
            height={24}
            marginRight="xs"
          />
          <Text>0</Text>
        </Pressable>
        <Box
          flex={1}
          flexDirection="row"
          alignItems="center"
          backgroundColor="highlightBackground"
          paddingRight="s"
          borderRadius="s"
        >
          <TextInput
            flex={1}
            placeholder="Send a message"
            placeholderTextColor={theme.colors.secondaryText}
            backgroundColor="highlightBackground"
            fontSize={15}
            color="primaryText"
            paddingVertical="sToStoM"
          />
          <Image
            source={PollBitsImage}
            width={24}
            height={24}
            marginRight="m"
          />
          <Image
            source={EmotesImage}
            width={24}
            height={24}
          />
        </Box>
        <Pressable width={60}>
          <SvgIcon
            icon={OptionsIcon}
            width={24}
            height={24}
            color="primaryText"
            alignSelf="center"
          />
        </Pressable>
      </Box>
      {/* <Button onPress={() => ws.close()}>
        Close connection
      </Button> */}
    </Box>
  )
}

export default TestScreen