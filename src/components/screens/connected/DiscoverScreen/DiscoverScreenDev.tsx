import Box from "../../../designSystem/Box/Box"
import Button from "../../../designSystem/Button/Button"
import Image from "../../../designSystem/Image/Image"
import Text from "../../../designSystem/Text/Text"
import { ButtonColors, ButtonSizes } from "../../../designSystem/Button/Button.types"

import GameImage from "../../../../../assets/images/ic_game_controller.png"
import ESportImage from "../../../../../assets/images/ic_navigation_esports_inactive.png"
import MusicImage from "../../../../../assets/images/ic_music_notes.png"
import MicrophoneImage from "../../../../../assets/images/ic_microphone_uv.png"
import PaintImage from "../../../../../assets/images/ic_paint.png"
import { ScrollView } from "react-native"
import GamesList from "../../../commons/GamesList/GamesList"

const DiscoverScreenDev = () => {

  return (
    <Box flex={1}>
      <Text marginBottom="m">DiscoverScreenDev</Text>
      {/* <HorizontalVideoListCard /> */}
      {/* <GamesList /> */}
    </Box>
  )
}

export default DiscoverScreenDev