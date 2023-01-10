import { loginWithUsernameAndPassword } from "../../../../../store/authentication/authenticationActions/authenticationActions";
import { CLIENT_ID } from "../../../../../utils/api/api";
import { LoginFormMutationVariables } from "./LoginForm.types";

export const loginMutation = ({ username, password, dispatch }: LoginFormMutationVariables) =>
  loginWithUsernameAndPassword({
    client_id: CLIENT_ID,
    force_twitchguard: false,
    password: password,
    undelete_user: false,
    username: username
  })(dispatch)