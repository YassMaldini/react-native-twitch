import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BrowseStackParamsList, BrowseStackScreenList } from "../../../navigation/BrowseStack/BrowseStack.types";

export type BrowseScreenProps = NativeStackScreenProps<
  BrowseStackParamsList,
  BrowseStackScreenList.BrowseScreen
>;