import { LoginErrorResponse, LoginRequestData, LoginSuccessResponse } from "../../../types/api/endpoints/passport/login.types";
import { StaticGetEndpoints } from "../../../types/api/endpoints/staticEnpoints.types";
import { passportApi } from "../api";

const PASSPORT_ENDPOINTS = Object.freeze({
  login: (data: LoginRequestData) =>
    passportApi.post<LoginSuccessResponse, LoginErrorResponse>(StaticGetEndpoints.Login, data),
});

export default PASSPORT_ENDPOINTS;
