export type RequestExtensions = {
  persistedQuery: {
    version: number,
    sha256Hash: string
  }
}

export interface ResponseExtensions {
  extensions: {
    durationMilliseconds: number,
    operationName: string,
    requestID: string
  }
}