import { GDPRVendorConsent } from "./gdprVendorConsent.types"

export type Consent = {
  __typename: "Consent",
  id: string,
  isDeniedUnderage: boolean,
  privacyLawName: string,
  shouldShowDismissButton: boolean,
  shouldShowNotification: boolean,
  shouldShowSettingsPage: boolean,
  vendorConsentStatus: GDPRVendorConsent
}