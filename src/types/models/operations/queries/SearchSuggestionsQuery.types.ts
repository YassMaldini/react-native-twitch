import { ResponseExtensions } from "../gql/extensions.types"
import { SearchSuggestionCategory } from "../gql/search.types"

export interface SearchSuggestionsQueryResponse extends ResponseExtensions {
  data: {
    searchSuggestions: SearchSuggestions
  }
}

export type SearchSuggestions = {
  edges: SearchSuggestionsEdge[],
  tracking: {
    modelTrackingID: string,
    responseID: string
  }
}

export type SearchSuggestionsEdge = {
  node: {
    content: SearchSuggestionCategory | null;
    matchingCharacters: {
      start: number;
      end: number;
    }
    id: string;
    text: string;
  }
}