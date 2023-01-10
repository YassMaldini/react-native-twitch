import { createContext } from "react";
import { RootContextProps } from "./RootStack.types";

export const RootContext = createContext<RootContextProps>(
  {} as RootContextProps
);
