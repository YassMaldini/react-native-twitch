import { RequestExtensions } from "../gql/extensions.types";

export interface QueryOperation {
  operationName: string;
  variables?: object;
  extensions: RequestExtensions;
}