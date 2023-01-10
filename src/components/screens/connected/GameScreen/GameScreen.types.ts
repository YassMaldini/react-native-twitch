import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Game } from "../../../../types/models/gql/game.types";
import { BrowseStackParamsList, BrowseStackScreenList } from "../../../navigation/BrowseStack/BrowseStack.types";
import { CommonScreensScreenList } from "../../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types";

export type GameScreenProps = NativeStackScreenProps<
  BrowseStackParamsList,
  CommonScreensScreenList.GameScreen
>;

export interface GameScreenContextProps {
  game: Game;
  navBarHeight: number;
  headerHeight: number;
}