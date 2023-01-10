import { Dispatch, SetStateAction } from "react";
import { PressableProps } from "../../../designSystem/Pressable/Pressable.types";

export interface SelectableTabItemProps extends PressableProps {
  label: string;
  index: number;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  gap?: number;
}