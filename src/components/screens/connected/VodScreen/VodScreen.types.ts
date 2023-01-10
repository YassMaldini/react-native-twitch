import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CommonScreensScreenList } from "../../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types";
import { HomeStackParamsList } from "../../../navigation/HomeStack/HomeStack.types";

export type VodScreenProps = NativeStackScreenProps<
  HomeStackParamsList,
  CommonScreensScreenList.VodScreen
>;
