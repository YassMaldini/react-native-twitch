import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import Text from "../../../../designSystem/Text/Text"
import { MediumGameListCardProps } from "./MediumGameListCard.types"

const MediumGameListCard = ({ game, ...rest }: MediumGameListCardProps) => {
  if (!game) return null
  
  const IMAGE_WIDTH = 105

  return (
    <Pressable {...rest}>
      <Box width={IMAGE_WIDTH} paddingVertical="sToM" marginRight="sToM">
        <Image
          source={{ uri: game.boxArtURL || '' }}
          width={IMAGE_WIDTH}
          aspectRatio={285/380}
          marginBottom="xxs"
        />
        <Text fontSize={17} fontFamily="Roobert-Bold" numberOfLines={1}>{game.displayName}</Text>
      </Box>
    </Pressable>
  )
}

export default MediumGameListCard