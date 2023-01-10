import { Game } from "../../../../../types/models/gql/game.types";
import { PressableProps } from "../../../../designSystem/Pressable/Pressable.types";

export interface MediumGameListCardProps extends PressableProps {
  game?: Game;
}