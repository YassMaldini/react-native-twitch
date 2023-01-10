import GameScreen from "../../../screens/connected/GameScreen/GameScreen";
import ProfileScreen from "../../../screens/connected/ProfileScreen/ProfileScreen";
import VideoScreen from "../../../screens/connected/VideoScreen/VideoScreen";
import VodScreen from "../../../screens/connected/VodScreen/VodScreen";
import { CommonScreensScreenList } from "./CommonScreens.types";

export const CommonScreensList = Object.freeze({
  [CommonScreensScreenList.ProfileScreen]: {
    name: CommonScreensScreenList.ProfileScreen,
    component: ProfileScreen
  },
  [CommonScreensScreenList.GameScreen]: {
    name: CommonScreensScreenList.GameScreen,
    component: GameScreen
  },
  [CommonScreensScreenList.VideoScreen]: {
    name: CommonScreensScreenList.VideoScreen,
    component: VideoScreen
  },
  [CommonScreensScreenList.VodScreen]: {
    name: CommonScreensScreenList.VodScreen,
    component: VodScreen
  },
})