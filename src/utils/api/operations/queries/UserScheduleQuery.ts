import { QueryOperation } from "../../../../types/models/operations/operation.types";
import { UserScheduleQueryResponse } from "../../../../types/models/operations/queries/UserScheduleQuery.types";
import { graphqlApi } from "../../api";

export const USER_SCHEDULE_QUERY_KEY = "USER_SCHEDULE"

export const UserScheduleQuery = async (channelId: string) => {
  const response = await graphqlApi.post<UserScheduleQueryResponse>(
    'https://gql.twitch.tv/gql',
    UserScheduleQueryOperation(channelId)
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data as UserScheduleQueryResponse['data'];
}

export const UserScheduleQueryOperation: (channelId: string) => QueryOperation = (channelId) => ({
  "operationName": "UserScheduleQuery",
  "variables": {
    "user": channelId
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "a1f73ac0b121570ccf9dc27fa34a760d9b190429adb7d3667a90989bf123dcb2"
    }
  }
})