export interface GetRootStackScreensOptions {
  isSignedIn: boolean;
  hasNetworkAccess?: boolean;
  hasFinishedSignup?: boolean;
  hasVerifiedPhone?: boolean;
  isOAuth?: boolean;
}

export type GetRootStackScreens = (options: GetRootStackScreensOptions) => JSX.Element[];
