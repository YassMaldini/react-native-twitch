import { FlashList } from "@shopify/flash-list"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { CommonScreensScreenList } from "../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types"
import { GamesListProps, GamesListSize } from "./GamesList.types"
import GamesListCard from "./GamesListCard/GamesListCard"

const GamesList = ({ listTitle, gamesList, size, navigation }: GamesListProps) => {
  return (
    <Box flex={1} paddingLeft="sToM" marginTop="s">
      {listTitle && <Text variant="listTitle" marginBottom="sToM">{listTitle}</Text>}
      <FlashList
        data={gamesList}
        renderItem={({ item: { node: game } }) => {
          return (
            <GamesListCard
              game={game} 
              onPress={() => {
                navigation.navigate(CommonScreensScreenList.GameScreen, { game })
              }}
              {...{ size }} 
            />
          )
        }}
        estimatedItemSize={5}
        horizontal={Boolean(size !== GamesListSize.Small)}
      />
    </Box>
  )
}

export default GamesList