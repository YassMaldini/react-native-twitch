import { createContext } from "react";
import { SearchScreenContextProps } from "./SearchScreen.types";

export const SearchScreenContext = createContext<SearchScreenContextProps>(
  {} as SearchScreenContextProps
);
