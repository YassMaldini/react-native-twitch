export type TCFCookieVendor = {
  __typename: "TCFCookieVendor",
  consentStatus: string,
  cookieVendorType: string,
  features: TCFCookieVendorFeatures[],
  hasUserSetConsent: boolean,
  isVisible: boolean,
  name: string,
  policyURL: string,
  purposes: TCFCookieVendorPurposes[],
  specialFeatures: any | null,
  specialPurposes: TCFCookieVendorSpecialPurposes[],
  cookieMaxAgeSeconds: number
}

export enum TCFCookieVendorFeatures {
  MATCH_COMBINE_OFFLINE_DATA_SOURCES = "MATCH_COMBINE_OFFLINE_DATA_SOURCES",
  LINK_DIFFERENT_DEVICES = "LINK_DIFFERENT_DEVICES",
  RECEIVE_USE_AUTO_SENT_DEVICE_CHARACTERISTICS_FOR_IDENTIFICATION = "RECEIVE_USE_AUTO_SENT_DEVICE_CHARACTERISTICS_FOR_IDENTIFICATION"
}

export enum TCFCookieVendorPurposes {
  STORE_ACCESS_INFO_ON_DEVICE = "STORE_ACCESS_INFO_ON_DEVICE",
  MEASURE_AD_PERFORMANCE = "MEASURE_AD_PERFORMANCE",
  MEASURE_CONTENT_PERFORMANCE = "MEASURE_CONTENT_PERFORMANCE",
  APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS = "APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS",
  DEVELOP_IMPROVE_PRODUCTS = "DEVELOP_IMPROVE_PRODUCTS"
}

export enum TCFCookieVendorSpecialPurposes {
  ENSURE_SECURITY_PREVENT_FRAUD_DEBUG = "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG"
}