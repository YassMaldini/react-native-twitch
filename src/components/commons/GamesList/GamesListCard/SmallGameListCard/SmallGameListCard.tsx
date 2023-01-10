import { Dimensions } from "react-native"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"
import Box from "../../../../designSystem/Box/Box"
import Chip from "../../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../../designSystem/Chip/Chip.types"
import Image from "../../../../designSystem/Image/Image"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import Text from "../../../../designSystem/Text/Text"
import { SmallGameListCardProps } from "./SmallGameListCard.types"

const SmallGameListCard = ({ game, ...rest }: SmallGameListCardProps) => {
  if (!game) return null
  
  const IMAGE_WIDTH = 55

  return (
    <Pressable {...rest}>
      <Box flexDirection="row" marginBottom="m">
        <Image
          source={{ uri: game.boxArtURL || '' }}
          width={IMAGE_WIDTH}
          aspectRatio={285/380}
          marginRight="m"
        />
        <Box 
          flex={1} 
          justifyContent="center"
        >
          <Text fontSize={18} fontFamily="Roobert-Bold" numberOfLines={1}>{game.displayName}</Text>
          <Text fontSize={16} fontFamily="Roobert-Medium" color="secondaryText">
            {thousandFormatter2(game.viewersCount || 0, 1)} viewers
          </Text>
          <Box flexDirection="row" marginTop="xxs">
          {
            game.gameTags.map((tag, index) => index < 2 && (
              <Chip key={tag.tagName} color={ChipColors.PrimaryOutline} marginRight="s">
                {tag.tagName}
              </Chip>
            ))
          }
          </Box>
        </Box>
      </Box>
    </Pressable>
  )
}

export default SmallGameListCard