import { Linking } from "react-native"
import Image from "../../designSystem/Image/Image"
import Pressable from "../../designSystem/Pressable/Pressable"
import { PanelItemProps } from "./PanelItem.types"

const PanelItem = ({ panel }: PanelItemProps) => {
  return (
    <Pressable onPress={() => Linking.openURL(panel.linkURL)} marginBottom="l">
      <Image
        source={{ uri: panel.imageURL }}
        width="100%"
        aspectRatio={4/1}
      />
    </Pressable>
  )
}

export default PanelItem