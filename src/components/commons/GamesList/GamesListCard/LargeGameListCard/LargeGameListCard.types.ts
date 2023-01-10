import { Game } from "../../../../../types/models/gql/game.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";

export interface LargeGameListCardProps extends PressableProps {
  game?: Game;
}