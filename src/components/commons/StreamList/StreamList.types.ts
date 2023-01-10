import { NavigationProp } from "@react-navigation/native";
import { FlashListProps } from "@shopify/flash-list";
import { Dispatch, SetStateAction } from "react";
import { GestureResponderEvent } from "react-native";
import { number } from "yup";
import { Stream } from "../../../types/models/gql/stream.types";
import { User } from "../../../types/models/gql/user.types";
import { PressableProps } from "../../designSystem/Pressable/Pressable.types";
import { SvgIconProps } from "../../designSystem/SvgIcon/SvgIcon.types";
import { StreamListCardProps } from "./StreamListCard/StreamListCard.types";

export interface StreamListProps extends PressableProps {
  title?: string;
  listTitle?: string;
  size: StreamListSize;
  streamsList?: Array<
    {
      node: Stream,
      trackingID?: string
    } |
    {
      node: {
        stream: Stream
      },
      trackingID?: string
    }
  >;
  optionsIconProps?: OptionsIconsProps;
  flashListProps?: Partial<FlashListProps<any>>;
  navigation: NavigationProp<any,any>;
  // onItemLongPress?: ((index: number) => void);
}

export type OptionsIconsProps = {
  pressable?: OptionsIconsPressableProps;
  icon?: SvgIconProps;
}

export type OptionsIconsPressableProps = Omit<PressableProps, 'onPress'> & {
  onPress?: ((event: GestureResponderEvent, user?: User) => void) | null
}

export enum StreamListSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}