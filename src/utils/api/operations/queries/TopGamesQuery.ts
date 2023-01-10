import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { Chance } from 'chance';
import { graphqlApi } from "../../api";
import { TopGamesQueryResponse } from "../../../../types/models/operations/queries/TopGamesQuery.types";

export const TOP_GAMES_QUERY_KEY = "TOP_GAMES"

export const TopGamesQuery = async () => {
  const response = await graphqlApi.post<TopGamesQueryResponse>(
    'https://gql.twitch.tv/gql',
    TopGamesQueryOperation
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as TopGamesQueryResponse['data'];
}

export const TopGamesQueryOperation: QueryOperation = {
  "operationName": "TopGamesQuery",
  "variables": {
    "first": 25,
    "tags": [

    ],
    "options": {
      "recommendationsContext": {
        "platform": "android"
      },
      "requestID": new Chance().guid(),
      "sort": "RELEVANCE"
    }
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "b5ba449fc784bfe5534ec4734dfa754483f4069e49d065fc3da62a6c110d5c81"
    }
  }
}