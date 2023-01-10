import { Game } from "../../../../types/models/gql/game.types";
import { Stream } from "../../../../types/models/gql/stream.types";
import { Video } from "../../../../types/models/gql/video.types";

export enum CommonScreensScreenList {
  VideoScreen = 'VideoScreen',
  VodScreen = 'VodScreen',
  ProfileScreen = 'ProfileScreen',
  GameScreen = 'GameScreen',
}

export type CommonScreensParamsList = {
  [CommonScreensScreenList.VideoScreen]: { stream: Stream };
  [CommonScreensScreenList.VodScreen]: { video: Video };
  [CommonScreensScreenList.ProfileScreen]: { login: string };
  [CommonScreensScreenList.GameScreen]: { game: Game };
}