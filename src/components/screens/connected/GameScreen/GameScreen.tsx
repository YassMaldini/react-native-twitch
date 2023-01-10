import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer"
import Box from "../../../designSystem/Box/Box"
import { GameScreenNavBar } from "./GameScreenNavBar/GameScreenNavBar"
import GameScreenHeader from "./GameScreenHeader/GameScreenHeader"
import { useRoute } from "@react-navigation/native"
import { GameScreenProps } from "./GameScreen.types"
import { ScrollView } from "react-native"
import { GameScreenContext } from "./GameScreen.context"
import GameTabView from "./GameTabView/GameTabView"
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context"
import { useMemo, useState } from "react"

const GameScreen = () => {
  const { params } = useRoute<GameScreenProps['route']>()
  const { game } = params

  const { height: WINDOW_HEIGHT } = useSafeAreaFrame()
  const { top, bottom } = useSafeAreaInsets()

  const [navBarHeight, setNavBarHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)

  const contextValue = useMemo(
    () => ({ 
      game,
      navBarHeight,
      headerHeight
    }),
    [
      game,
      navBarHeight,
      headerHeight
    ]
  )

  return (
    <SafeAreaContainer>
      <GameScreenContext.Provider value={contextValue}>
        <ScrollView 
          stickyHeaderIndices={[2]}
        >
          <GameScreenNavBar onLayout={e => setNavBarHeight(e.nativeEvent.layout.height)} />
          <GameScreenHeader onLayout={e => setHeaderHeight(e.nativeEvent.layout.height)} {...{ game }} />
          <Box height={WINDOW_HEIGHT - top - bottom - navBarHeight - headerHeight}>
            <Box flex={1}>
              <GameTabView />
            </Box>
          </Box>
        </ScrollView>
      </GameScreenContext.Provider>
    </SafeAreaContainer>
  )
}

export default GameScreen