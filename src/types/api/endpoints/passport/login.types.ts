export interface LoginRequestData {
  client_id: string,
  force_twitchguard: boolean,
  password: string,
  undelete_user: boolean,
  username: string
}

export type LoginSuccessResponse = {
  access_token: string,
  redirect_path: string
}

export type LoginErrorResponse = {
  captcha_proof: string,
  error: string,
  error_code: number,
  error_description: string,
  obscured_email: string
}