import { FlashList } from "@shopify/flash-list"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"
import Box from "../../../../designSystem/Box/Box"
import Chip from "../../../../designSystem/Chip/Chip"
import { ChipColors } from "../../../../designSystem/Chip/Chip.types"
import Image from "../../../../designSystem/Image/Image"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import Text from "../../../../designSystem/Text/Text"
import { GameScreenHeaderProps } from "./GameScreenHeader.types"

const GameScreenHeader = ({ game, ...rest }: GameScreenHeaderProps) => {
  if (!game) return null
  
  const IMAGE_WIDTH = 72

  return (
    <Pressable {...rest}>
      <Box flexDirection="row" marginBottom="m" paddingHorizontal="sToStoM">
        <Image
          source={{ uri: game.boxArtURL || '' }}
          width={IMAGE_WIDTH}
          aspectRatio={285/380}
          marginRight="mToL"
        />
        <Box 
          flex={1} 
          justifyContent="center"
        >
          <Text 
            fontSize={20} 
            fontFamily="Roobert-Bold" 
            numberOfLines={1}
            marginBottom="xxs"
          >
            {game.displayName}
          </Text>
          <Text 
            fontSize={16} 
            fontFamily="Roobert-Medium" 
            color="secondaryText"
            marginBottom="xs"
          >
            {thousandFormatter2(game.viewersCount || 0, 1)} viewers · {thousandFormatter2(game.followersCount || 0, 1)} followers
          </Text>
          <FlashList 
            data={game.gameTags}
            renderItem={({ item: tag }) => (
              <Chip key={tag.tagName} color={ChipColors.PrimaryOutline} marginRight="s">
                {tag.tagName}
              </Chip>
            )}
            estimatedItemSize={72}
            horizontal
          />
        </Box>
      </Box>
    </Pressable>
  )
}

export default GameScreenHeader