import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DiscoverStackParamsList, DiscoverStackScreenList } from "../../../navigation/DiscoverStack/DiscoverStack.types";

export type DiscoverScreenProps = NativeStackScreenProps<
  DiscoverStackParamsList,
  DiscoverStackScreenList.DiscoverScreen
>;
