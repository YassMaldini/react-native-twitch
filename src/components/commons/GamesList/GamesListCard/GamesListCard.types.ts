import { Game } from "../../../../types/models/gql/game.types";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";
import { GamesListSize } from "../GamesList.types";

export interface GameListCardProps extends PressableProps {
  game: Game;
  size: GamesListSize;
}