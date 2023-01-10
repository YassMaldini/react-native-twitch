import { Consent } from "../gql/consent.types"
import { ResponseExtensions } from "../gql/extensions.types"

export interface ConsentQueryResponse extends ResponseExtensions {
  data: {
    consent: Consent
  }
}