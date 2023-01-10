export type NonTCFCookieVendor = 
{
  __typename: "NonTCFCookieVendor",
  consentStatus: string,
  cookieVendorType: string,
  features: any[] | null,
  hasUserSetConsent: true,
  isVisible: true,
  name: string,
  policyURL: string,
  purposes?: NonTCFCookieVendorPurposes[],
  specialFeatures?: any[] |  null,
  specialPurposes?: NonTCFCookieVendorSpecialPurposes[],
  cookieMaxAgeSeconds?: number
}

export enum NonTCFCookieVendorPurposes {
  STORE_ACCESS_INFO_ON_DEVICE = "STORE_ACCESS_INFO_ON_DEVICE",
  SELECT_BASIC_ADS = "SELECT_BASIC_ADS",
  CREATE_PERSONALISED_ADS_PROFILE = "CREATE_PERSONALISED_ADS_PROFILE",
  SELECT_PERSONALISED_ADS = "SELECT_PERSONALISED_ADS",
  MEASURE_AD_PERFORMANCE = "MEASURE_AD_PERFORMANCE",
  APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS = "APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS",
  DEVELOP_IMPROVE_PRODUCTS = "DEVELOP_IMPROVE_PRODUCTS"
}

export enum NonTCFCookieVendorSpecialPurposes {
  ENSURE_SECURITY_PREVENT_FRAUD_DEBUG = "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG",
  TECHNICALLY_DELIVER_ADS_CONTENT = "TECHNICALLY_DELIVER_ADS_CONTENT"
}