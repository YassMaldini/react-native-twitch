import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { SearchForQueryResponse } from "../../../../types/models/operations/queries/SearchForQuery.types";
import { graphqlApi } from "../../api";

export const SEARCH_FOR_QUERY_KEY = "SEARCH_FOR"

export const SearchForQuery = async (search: string) => {
  const response = await graphqlApi.post<SearchForQueryResponse>(
    'https://gql.twitch.tv/gql',
    SearchForQueryOperation(search)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as SearchForQueryResponse['data'];
}

export const SearchForQueryOperation: (search: string) => QueryOperation = (search) => ({
  "operationName": "SearchForQuery",
  "variables": {
    "userQuery": search,
    "platform": "android",
    "target": null,
    "includesFreeformTags": true,
    "includesFreeformTagsInSearch": true
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "4847ed830ef6fac96da89222e50560a493029fc60209a650525b3105ebf5d33c"
    }
  }
})