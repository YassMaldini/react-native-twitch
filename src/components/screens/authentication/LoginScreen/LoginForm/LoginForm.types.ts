import { Dispatch } from 'redux';
import { loginWithUsernameAndPassword } from '../../../../../store/authentication/authenticationActions/authenticationActions';
import { ValidTypeFromYupSchema } from '../../../../../utils/form/helpers';
import getLoginFormSchema from './LoginForm.schema';

export type LoginFormSchema = ValidTypeFromYupSchema<typeof getLoginFormSchema>;

export interface LoginFormMutationVariables {
  username: string;
  password: string;
  dispatch: Dispatch;
}

export type LoginFormMutation = (
  variables: LoginFormMutationVariables
) => ReturnType<ReturnType<typeof loginWithUsernameAndPassword>>;
