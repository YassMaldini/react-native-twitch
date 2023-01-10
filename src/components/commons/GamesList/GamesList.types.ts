import { NavigationProp } from "@react-navigation/native";
import { Game } from "../../../types/models/gql/game.types";
import { PressableProps } from "../../designSystem/Pressable/Pressable.types";

export interface GamesListProps {
  title?: string;
  listTitle?: string;
  gamesList?: GameNode[];
  size: GamesListSize;
  navigation: NavigationProp<any,any>;
}

export type GameNode = {
  node: Game
}

export enum GamesListSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}