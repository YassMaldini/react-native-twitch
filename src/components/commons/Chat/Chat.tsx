import { FlashList } from "@shopify/flash-list"
import { useTheme } from "@shopify/restyle"
import { memo, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { secretsSelector } from "../../../store/authentication/authenticationReducerSelectors"
import { ParsedMessage } from "../../../utils/chat/parseChatMessage.types"
import { parseChatMessageJS } from "../../../utils/chat/parseChatMessageJS"
import { Theme } from "../../../utils/theme/theme"
import Box from "../../designSystem/Box/Box"
import Image from "../../designSystem/Image/Image"
import Pressable from "../../designSystem/Pressable/Pressable"
import Text from "../../designSystem/Text/Text"
import { ChatProps } from "./Chat.types"
import PollBitsImage from "../../../../assets/images/video/ic_poll_bits.png"
import PollCrystalBallImage from "../../../../assets/images/video/poll_crystal_ball.png"
import EmotesImage from "../../../../assets/images/video/ic_emotes.png"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import { Icons } from "../Icon/Icon"
import { CommonIcons } from "../Icon/Icon.types"
import TextInput from "../../designSystem/TextInput/TextInput"

const Chat = ({ userLogin, navigation }: ChatProps) => {

  const theme = useTheme<Theme>()

  const flashLishRef = useRef<FlashList<ParsedMessage>>(null)

  const [chatMessages, setChatMessages] = useState<ParsedMessage[] | []>([])

  const secrets = useSelector(secretsSelector);

  const ws = new WebSocket('https://irc-ws.chat.twitch.tv/');

  useEffect(() => {
    if (secrets) {
      ws.onopen = () => {
        // connection opened
        ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
        ws.send(`PASS oauth:${secrets.token}`);
        ws.send(`NICK ${secrets.username}`)
        ws.send('PONG')
        ws.send(`JOIN #${userLogin}`);
      };

      ws.onerror = (e) => {
        // an error occurred
        console.log('error', e);
      };

      ws.onclose = (e) => {
        // connection closed
        console.log('close', e);
        console.log(e.code, e.reason);
      };
    }
  }, [ws, secrets, userLogin])

  useEffect(() => {
    ws.onmessage = (e) => {
      const parsedMessage = parseChatMessageJS(e.data)
      if (parsedMessage?.tags) setChatMessages(oldArray => [...oldArray, parseChatMessageJS(e.data) as ParsedMessage])
    };
  }, [])

  useEffect(() => {
    navigation.addListener('blur', () => {
      console.log('bluuur')
      ws.close()
    })
  }, [ws, navigation])

  return (
    <Box flex={1}>
      <Box
        paddingHorizontal="m"
        paddingVertical="mToL"
        borderBottomWidth={1}
        borderBottomColor="secondaryBackground"
      >
        <Text
          fontSize={16}
          fontFamily="Roobert-SemiBold"
        >
          CHAT
        </Text>
      </Box>
      <Box flex={1} paddingVertical="sToM">
        <Box
          flex={1}
          paddingHorizontal="sToM"
          borderBottomWidth={1}
          borderBottomColor="secondaryBackground"
        >
          <FlashList
            ref={flashLishRef}
            data={chatMessages}
            renderItem={({ item, index }) => {
              return (
                <Box key={index} flexDirection="row">
                  <Text
                    style={{
                      color: item.tags?.color || theme.colors.primaryText
                    }}
                    fontFamily="Roobert-SemiBold"
                    marginRight="s"
                  >
                    {item.tags?.["display-name"] || 'nada'}
                  </Text>
                  <Text flex={1}>
                    {item.parameters || ''}
                  </Text>
                </Box>
              )
            }}
            estimatedItemSize={100}
            {...chatMessages.length > 0 && {
              onContentSizeChange: () => {
                if (flashLishRef) {
                  flashLishRef.current?.scrollToEnd({ animated: true })
                }
              }
            }}
          // onLayout={() => flashLishRef.current?.scrollToEnd({animated: true})}
          />
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
              paddingVertical="s"
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
          <Pressable width={40}>
            <SvgIcon
              icon={Icons[CommonIcons.Options]}
              width={24}
              height={24}
              color="primaryText"
              alignSelf="center"
            />
          </Pressable>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(Chat)