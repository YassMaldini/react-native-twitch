import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { StreamsForGameQueryResponse } from "../../../../types/models/operations/queries/StreamsForGameQuery.types";
import { graphqlApi } from "../../api";

export const STREAMS_FOR_GAME_QUERY_KEY = "STREAMS_FOR_GAME"

export const StreamsForGameQuery = async (name: string) => {
  const response = await graphqlApi.post<StreamsForGameQueryResponse>(
    'https://gql.twitch.tv/gql',
    StreamsForGameQueryOperation(name)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as StreamsForGameQueryResponse['data'];
}

export const StreamsForGameQueryOperation: (name: string) => QueryOperation = (name) => ({
  "operationName": "StreamsForGameQuery",
  "variables": {
    "name": name,
    "first": 25,
    "languages": [],
    "tags": [],
    "freeformTags": [],
    "includesFreeformTags": true,
    "sort": "RELEVANCE",
    "requestID": "c218969d-6f19-41e4-857f-bbd8829d7561",
    "recommendationsContext": {
      "platform": "android"
    }
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "4845c40a7ca8bacd5c11666d0910b7a26b00bf3b3e39679a6e6bb44efcba2f8a"
    }
  }
})