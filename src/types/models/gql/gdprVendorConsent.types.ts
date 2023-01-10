import { NonTCFCookieVendor } from "./nonTcfCookieVendor.types"
import { TCFCookieVendor } from "./TCFCookieVendor.types"

export type GDPRVendorConsent = {
  __typename: "GDPRVendorConsent",
  status: Array<TCFCookieVendor | NonTCFCookieVendor>
}