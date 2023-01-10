import { ReactNode } from "react";
import { SafeAreaViewProps } from "react-native-safe-area-context";

export interface SafeAreaContainerProps extends SafeAreaViewProps {
  children: ReactNode;
}