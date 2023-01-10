import { Game } from "./game.types";

export type SearchSuggestionCategory = {
  __typename: "SearchSuggestionCategory";
  id: string;
  boxArtURL: string;
  game?: Game;
}