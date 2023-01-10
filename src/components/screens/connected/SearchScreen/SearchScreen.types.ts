import { Dispatch, SetStateAction } from "react";
import { UseMutateFunction } from "react-query";
import { SearchForQueryResponse } from "../../../../types/models/operations/queries/SearchForQuery.types";
import { SearchSuggestions } from "../../../../types/models/operations/queries/SearchSuggestionsQuery.types";
import { SearchForQuery } from "../../../../utils/api/operations/queries/SearchForQuery";

export interface SearchForMutationVariables {
  search: string;
}

export type SearchForMutation = (
  variables: SearchForMutationVariables
) => ReturnType<typeof SearchForQuery>;

export interface SearchScreenContextProps {
  searchResults?: SearchForQueryResponse['data']['searchFor'];
  searchSuggestions?: SearchSuggestions;
  setSearchSuggestions: Dispatch<SetStateAction<SearchSuggestions | undefined>>;
  resultsMutate: UseMutateFunction<Awaited<ReturnType<SearchForMutation>>, Error, SearchForMutationVariables, unknown>;
  isResultsMutateLoading: boolean;
  isSearchInputFocused: boolean;
  setSearchInputFocused: Dispatch<SetStateAction<boolean>>;
  submitSearch: (text: string) => void;
}