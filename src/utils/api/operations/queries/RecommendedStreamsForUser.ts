import { QueryOperation } from "../../../types/models/operations/operation.types";

export const RecommendedStreamsForUserOperation: QueryOperation = {
  operationName: "RecommendedStreamsForUser",
  variables: {
    first: 5,
    recID: "d5acc8cf-3e9d-40cb-bfd2-4951a3c56ffb",
    location: "FOLLOWING_PAGE",
    context: {
      platform: "android"
    },
    filters: {

    },
    includeAdProperties: false,
    includeAccessToken: false,
    playbackAccessTokenParams: {
      platform: "android",
      playerType: "mobile_player"
    },
    includesFreeformTags: true
  },
  extensions: {
    persistedQuery: {
      version: 1,
      sha256Hash: "14ce0318f425e2b2a361feb35c108fea0c6afd589273adfccf2acce3bb4b19be"
    }
  }
}