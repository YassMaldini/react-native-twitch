import { BoxProps } from "@shopify/restyle";
import { ReactNode } from "react";
import { ViewProps } from "react-native";
import { Theme } from "../../../utils/theme/theme";
import { SelectableTabItemProps } from "./SelectableTabItem/SelectableTabItem.types";

export type SelectableTabsProps = BoxProps<Theme> & ViewProps & {
  data: SelectableTabsData[];
  screensProps?: object;
  tabProps?: BoxProps<Theme>;
  tabItemProps?: Partial<SelectableTabItemProps>;
}

export type SelectableTabsData = {
  label: string;
  component: JSX.Element;
}