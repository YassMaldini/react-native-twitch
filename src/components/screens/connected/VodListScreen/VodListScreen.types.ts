import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamsList, HomeStackScreenList } from "../../../navigation/HomeStack/HomeStack.types";

export type VodListScreenProps = NativeStackScreenProps<
  HomeStackParamsList,
  HomeStackScreenList.VodListScreen
>;