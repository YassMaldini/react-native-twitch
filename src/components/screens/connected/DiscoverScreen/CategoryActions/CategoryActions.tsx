import Box from "../../../../designSystem/Box/Box"
import Button from "../../../../designSystem/Button/Button"
import Image from "../../../../designSystem/Image/Image"
import { ButtonColors, ButtonSizes } from "../../../../designSystem/Button/Button.types"

import GameImage from "../../../../../../assets/images/ic_game_controller.png"
import ESportImage from "../../../../../../assets/images/ic_navigation_esports_inactive.png"
import MusicImage from "../../../../../../assets/images/ic_music_notes.png"
import MicrophoneImage from "../../../../../../assets/images/ic_microphone_uv.png"
import PaintImage from "../../../../../../assets/images/ic_paint.png"
import { ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { DiscoverScreenProps } from "../DiscoverScreen.types"
import { DiscoverStackScreenList } from "../../../../navigation/DiscoverStack/DiscoverStack.types"
import { VerticalDirectoryList } from "../../VerticalDirectoryScreen/VerticalDirectoryScreen.types"

export default () => {
  const { navigate } = useNavigation<DiscoverScreenProps['navigation']>()
  return (
  <Box>
    <ScrollView horizontal>
      <Box marginVertical="sToM" paddingRight="sToM">
        <Box flexDirection="row">
          <Button
            onPress={() => navigate(DiscoverStackScreenList.VerticalDirectoryScreen, { type: VerticalDirectoryList.Games })}
            borderRadius='xs'
            marginLeft="sToM"
            color={ButtonColors.PrimaryHighlight}
            size={ButtonSizes.Large}
            textProps={{
              textAlign: "left"
            }}
            afterElement={
              <Image
                source={GameImage}
                width={25}
                height={25}
                marginRight="s"
              />
            }
          >
            Games
          </Button>
          <Button
            onPress={() => navigate(DiscoverStackScreenList.VerticalDirectoryScreen, { type: VerticalDirectoryList.Esports })}
            borderRadius='xs'
            marginLeft="sToM"
            color={ButtonColors.PrimaryHighlight}
            size={ButtonSizes.Large}
            textProps={{
              textAlign: "left"
            }}
            afterElement={
              <Image
                source={ESportImage}
                width={24}
                height={24}
                marginRight="s"
              />
            }
          >
            Esport
          </Button>
          <Button
            onPress={() => navigate(DiscoverStackScreenList.VerticalDirectoryScreen, { type: VerticalDirectoryList.Music })}
            borderRadius='xs'
            marginLeft="sToM"
            color={ButtonColors.PrimaryHighlight}
            size={ButtonSizes.Large}
            textProps={{
              textAlign: "left"
            }}
            afterElement={
              <Image
                source={MusicImage}
                width={24}
                height={24}
                marginRight="s"
              />
            }
          >
            Music
          </Button>
          <Button
            onPress={() => navigate(DiscoverStackScreenList.VerticalDirectoryScreen, { type: VerticalDirectoryList.IRL })}
            borderRadius='xs'
            marginLeft="sToM"
            color={ButtonColors.PrimaryHighlight}
            size={ButtonSizes.Large}
            textProps={{
              textAlign: "left"
            }}
            afterElement={
              <Image
                source={MicrophoneImage}
                width={25}
                height={25}
                marginRight="s"
              />
            }
          >
            IRL
          </Button>
          <Button
            onPress={() => navigate(DiscoverStackScreenList.VerticalDirectoryScreen, { type: VerticalDirectoryList.Creative })}
            borderRadius='xs'
            marginLeft="sToM"
            color={ButtonColors.PrimaryHighlight}
            size={ButtonSizes.Large}
            textProps={{
              textAlign: "left"
            }}
            afterElement={
              <Image
                source={PaintImage}
                width={20}
                height={20}
                marginRight="s"
              />
            }
          >
            Creative
          </Button>
        </Box>
      </Box>
    </ScrollView>
  </Box>
)}