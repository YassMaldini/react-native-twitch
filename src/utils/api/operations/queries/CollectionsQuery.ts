import { CollectionsQueryProps, CollectionsQueryResponse } from "../../../../types/models/operations/queries/CollectionsQuery.types";
import { graphqlApi } from "../../api";

export const COLLECTIONS_QUERY_KEY = "COLLECTIONS"

export const CollectionsQuery = async ({
  channelId,
  collectionsCount = 5,
  itemCount = 10
}: CollectionsQueryProps) => {
  const response = await graphqlApi.post<CollectionsQueryResponse>(
    'https://gql.twitch.tv/gql',
    CollectionsQueryOperation({ channelId, collectionsCount, itemCount })
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as CollectionsQueryResponse['data'];
}

export const CollectionsQueryOperation = ({ channelId, collectionsCount = 5, itemCount = 10}: CollectionsQueryProps) => 
({
  "operationName": "CollectionsQuery",
  "variables": {
    "channelId": channelId,
    "collectionsCount": collectionsCount,
    "options": {
      "includeEmpty": false
    },
    "itemCount": itemCount
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "229b9dd0a73e6021669b654d49adb714558315803caa86caffbccd9fc8f1d3c8"
    }
  }
})