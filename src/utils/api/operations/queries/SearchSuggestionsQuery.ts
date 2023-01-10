import { Chance } from "chance";
import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { SearchSuggestionsQueryResponse } from "../../../../types/models/operations/queries/SearchSuggestionsQuery.types";
import { graphqlApi } from "../../api";

export const SEARCH_SUGGESTIONS_QUERY_KEY = "SEARCH_SUGGESTIONS"

export const SearchSuggestionsQuery = async (search: string) => {
  const response = await graphqlApi.post<SearchSuggestionsQueryResponse>(
    'https://gql.twitch.tv/gql',
    SearchSuggestionsQueryOperation(search)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as SearchSuggestionsQueryResponse['data'];
}

export const SearchSuggestionsQueryOperation: (search: string) => QueryOperation = (search) => ({
  "operationName": "SearchSuggestionsQuery",
  "variables": {
    "queryFragment": search,
    "requestId": new Chance().guid()
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "98b16d152729d81d10a39e36887c4ee3743c5a85e824cf5a4e7cbe20edbd584a"
    }
  }
})