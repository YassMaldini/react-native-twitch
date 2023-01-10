export interface FirebaseInstallationsResponse {
  authToken: {
      expiresIn: string,
      token: string
  },
  fid: string,
  name: string,
  refreshToken: string
}