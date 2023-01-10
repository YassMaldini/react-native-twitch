import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { Chance } from 'chance';
import { graphqlApi } from "../../api";
import { PopularStreamsQueryResponse } from "../../../../types/models/operations/queries/PopularStreamsQuery.types";

export const POPULAR_STREAMS_QUERY_KEY = "POPULAR_STREAMS"

export const PopularStreamsQuery = async () => {
  const response = await graphqlApi.post<PopularStreamsQueryResponse>(
    'https://gql.twitch.tv/gql',
    PopularStreamsQueryOperation
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as PopularStreamsQueryResponse['data'];
}

export const PopularStreamsQueryOperation: QueryOperation = {
  "operationName": "PopularStreamsQuery",
  "variables": {
    "first": 25,
    "languages": [],
    "tags": [],
    "freeformTags": [],
    "includesFreeformTags": true,
    "sort": "RELEVANCE",
    "requestID": new Chance().guid(),
    "recommendationsContext": {
      "platform": "android"
    }
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "a8ca785f900d0159ccf081c572e56c3dffe2ee4be63f820947b5ee598594c741"
    }
  }
}