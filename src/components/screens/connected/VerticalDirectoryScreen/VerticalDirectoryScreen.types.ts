import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DiscoverStackParamsList, DiscoverStackScreenList } from "../../../navigation/DiscoverStack/DiscoverStack.types";

export type VerticalDirectoryScreenProps = NativeStackScreenProps<
  DiscoverStackParamsList,
  DiscoverStackScreenList.VerticalDirectoryScreen
>;

export enum VerticalDirectoryList {
  Games = "Games",
  Esports = "Esports",
  IRL = "IRL",
  Music = "Music",
  Creative = "Creative"
}