import { GameVodsQueryProps } from "../../../../types/models/operations/queries/GameVodsQuery.types";
import { QueryOperation } from "../../../../types/models/operations/operation.types";

export const GameVodsQueryOperation = ({ name, types, count = 5 }: GameVodsQueryProps): QueryOperation => ({
  "operationName": "GameVodsQuery",
  "variables": {
    "gameName": name,
    "vodCount": count,
    "types": types,
    "sortMethod": "VIEWS"
  },
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "9232c8d649f6b5e5efca4add3cc4f930211988c1c13e076be78df7814e39b804"
    }
  }
})