import { DiscoveryTabQueryResponse } from "../../../../types/models/operations/queries/DiscoveryTabQuery.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { graphqlApi } from "../../api";

export const DISCOVER_TAB_QUERY_KEY = "DISCOVER_TAB"

export const DiscoveryTabQuery = async () => {
  const response = await graphqlApi.post<DiscoveryTabQueryResponse>(
    'https://gql.twitch.tv/gql',
    DiscoveryTabQueryOperation
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as DiscoveryTabQueryResponse['data'];
}

export const DiscoveryTabQueryOperation: QueryOperation = {
  "operationName": "DiscoveryTabQuery",
  "variables": {
    "requestId": "3ec3e678-bb5b-43d5-95a0-b97d79b219e7",
    "language": "en-us",
    "langWeightedCCU": true,
    "includesFreeformTags": true,
    "includeAdProperties": false,
    "includeAccessToken": false,
    "playbackAccessTokenParams": {
      "platform": "android",
      "playerType": "mobile_player"
    }
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "1cad500b8cb78ffe4fa887dfad24a0f0895830ba972e13cff16eef84ef522e5c"
    }
  }
}