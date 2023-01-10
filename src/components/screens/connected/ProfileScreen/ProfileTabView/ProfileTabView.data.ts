import { SceneMap } from "react-native-tab-view"
import { ProfileAboutTab } from "./ProfileTabs/ProfileAboutTab"
import { ProfileClipTab } from "./ProfileTabs/ProfileClipTab"
import ProfileHomeTab from "./ProfileTabs/ProfileHomeTab"
import { ProfileScheduleTab } from "./ProfileTabs/ProfileScheduleTab"
import { ProfileVideosTab } from "./ProfileTabs/ProfileVideosTab/ProfileVideosTab"
import { ProfileTabsList } from "./ProfileTabView.types"

export const ProfileTabs = Object.freeze({
  [ProfileTabsList.Home]: {
    key: ProfileTabsList.Home,
    title: ProfileTabsList.Home,
    component: ProfileHomeTab
  },
  [ProfileTabsList.About]: {
    key: ProfileTabsList.About,
    title: ProfileTabsList.About,
    component: ProfileAboutTab
  },
  [ProfileTabsList.Schedule]: {
    key: ProfileTabsList.Schedule,
    title: ProfileTabsList.Schedule,
    component: ProfileScheduleTab
  },
  [ProfileTabsList.Videos]: {
    key: ProfileTabsList.Videos,
    title: ProfileTabsList.Videos,
    component: ProfileVideosTab
  },
  [ProfileTabsList.Clip]: {
    key: ProfileTabsList.Clip,
    title: ProfileTabsList.Clip,
    component: ProfileClipTab
  },
  // [ProfileTabsList.Chat]: {
  //   key: ProfileTabsList.Chat,
  //   title: ProfileTabsList.Chat,
  //   component: ProfileClipTab
  // }
})

const sceneData = Object.values(ProfileTabs).reduce(
  (acc, { key, component: Component }) => ({
    ...acc,
    [key.toLocaleLowerCase() as string]: Component
  }),
  {}
)

export const renderProfileScene = SceneMap(sceneData)