import { VerticalDirectoryQueriesList } from "../../../../components/screens/connected/VerticalDirectoryScreen/VerticalDirectoryScreen.data";
import { VerticalDirectoryList } from "../../../../components/screens/connected/VerticalDirectoryScreen/VerticalDirectoryScreen.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types"
import { VerticalDirectoryQueryResponse } from "../../../../types/models/operations/queries/VerticalDirectoryQuery.types";
import { graphqlApi } from "../../api";

export const VERTICAL_DIRECTORY_QUERY_KEY = "VERTICAL_DIRECTORY"

export const VerticalDirectoryQuery = async (type: VerticalDirectoryList) => {
  const response = await graphqlApi.post<VerticalDirectoryQueryResponse>(
    'https://gql.twitch.tv/gql',
    VerticalDirectoryQueryOperation(type)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as VerticalDirectoryQueryResponse['data'];
}

export const VerticalDirectoryQueryOperation: (type: VerticalDirectoryList) => QueryOperation = (type) => ({
  "operationName": "VerticalDirectoryQuery",
  "variables": {
      "id": VerticalDirectoryQueriesList[type],
      "recommendationsContext": {
          "country": "us",
          "platform": "android"
      },
      "contentMin": 1,
      "contentMax": 50,
      "includesFreeformTags": true
  },
  "extensions": {
      "persistedQuery": {
          "version": 1,
          "sha256Hash": "337399fab5bf5a70e8cc9865441d51b18a5bdc4e0f94c3a3449f16620f2c08aa"
      }
  }
})