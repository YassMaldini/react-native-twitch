import { QueryOperation } from "../../../../types/models/operations/operation.types";

export const StreamAccessTokenQueryOperations: (channelName: string) => QueryOperation = (channelName) => ({
  "operationName": "StreamAccessTokenQuery",
  "variables": {
    "channelName": channelName,
    "params": {
      "platform": "android",
      "playerType": "autoplay"
    }
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "4aeb12b75899a00ed245a3bd272047407f60a15f473caaa8a8e64719b6f6a8d5"
    }
  }
})