import { Game } from "../../types/models/gql/game.types";
import { Stream } from "../../types/models/gql/stream.types";
import { Video } from "../../types/models/gql/video.types";

interface MainReducerState {
  isDarkMode: boolean;
  searchHistory: string[];
  playedMedia: Stream | null;
}

export default MainReducerState;
