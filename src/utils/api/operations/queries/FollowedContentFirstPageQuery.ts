import { QueryOperation } from "../../../../types/models/operations/operation.types"

export const FollowedContentFirstPageQueryOperation: QueryOperation = {
  "operationName": "FollowedContentFirstPageQuery",
  "variables": {
    "gamesLimit": 12,
    "streamsLimit": 10,
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
      "sha256Hash": "9705408f6c2928a047bec1cf7a817ec6a823b27531e89b2fa90aa6b50b748e4f"
    }
  }
}