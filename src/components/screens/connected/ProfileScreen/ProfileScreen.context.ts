import { createContext } from "react";
import { ProfileScreenContextProps } from "./ProfileScreen.types";

export const ProfileScreenContext = createContext<ProfileScreenContextProps>(
  {} as ProfileScreenContextProps
);
