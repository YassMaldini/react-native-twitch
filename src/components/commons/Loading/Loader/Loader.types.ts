import { BoxProps } from "@shopify/restyle";
import { Theme } from "../../../../utils/theme/theme";

export interface LoaderProps extends BoxProps<Theme> {
  size?: LoaderSizes;
}

export enum LoaderSizes {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
}