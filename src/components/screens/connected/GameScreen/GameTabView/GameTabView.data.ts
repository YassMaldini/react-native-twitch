import { SceneMap } from "react-native-tab-view"
import { GameClipsTab } from "./GameTabs/GameClipsTab"
import { GameLiveChannelsTab } from "./GameTabs/GameLiveChannelsTab"
import { GameVideosTab } from "./GameTabs/GameVideosTab/GameVideosTab"
import { GameTabsList } from "./GameTabView.types"

export const GameTabs = Object.freeze({
  [GameTabsList.LiveChannels]: {
    key: GameTabsList.LiveChannels,
    title: "Live Channels",
    component: GameLiveChannelsTab
  },
  [GameTabsList.Videos]: {
    key: GameTabsList.Videos,
    title: GameTabsList.Videos,
    component: GameVideosTab
  },
  [GameTabsList.Clips]: {
    key: GameTabsList.Clips,
    title: GameTabsList.Clips,
    component: GameClipsTab
  },
})

const sceneData = Object.values(GameTabs).reduce(
  (acc, { key, component: Component }) => ({
    ...acc,
    [key.toLocaleLowerCase() as string]: Component
  }),
  {}
)

export const renderGameScene = SceneMap(sceneData)