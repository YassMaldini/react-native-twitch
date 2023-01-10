import { BoxProps } from "@shopify/restyle";
import { ViewProps } from "react-native";
import { ProfileFromChannelNameQueryResponse } from "../../../../../types/models/operations/queries/ProfileFromChannelNameQuery.types";
import { Theme } from "../../../../../utils/theme/theme";

export type ProfileHeaderProps = BoxProps<Theme> & ViewProps & {
  profileFromChannelName?: ProfileFromChannelNameQueryResponse['data'];
}