import { QueryOperation } from "../../../../types/models/operations/operation.types";

export const VodAccessTokenQueryOperation: (vodId: string) => QueryOperation = (vodId) => ({
  "operationName": "VodAccessTokenQuery",
  "variables": {
    "vodId": vodId,
    "params": {
      "platform": "android",
      "playerType": "mobile_player"
    }
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "189fb182547537e1bf9a786a246a8a6201c95569289ca785919c5c43d5b3ea42"
    }
  }
})