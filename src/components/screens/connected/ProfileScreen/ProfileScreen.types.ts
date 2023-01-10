import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileFromChannelNameUser } from "../../../../types/models/operations/queries/ProfileFromChannelNameQuery.types";
import { CommonScreensScreenList } from "../../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types";
import { HomeStackParamsList } from "../../../navigation/HomeStack/HomeStack.types";

export type ProfileScreenProps = NativeStackScreenProps<
  HomeStackParamsList,
  CommonScreensScreenList.ProfileScreen
>;

export interface ProfileScreenContextProps {
  user?: ProfileFromChannelNameUser;
}

export interface ProfileTabProps {
  user?: ProfileFromChannelNameUser;
}