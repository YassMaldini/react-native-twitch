import { createContext } from "react";
import { GameScreenContextProps } from "./GameScreen.types";

export const GameScreenContext = createContext<GameScreenContextProps>(
  {} as GameScreenContextProps
);
