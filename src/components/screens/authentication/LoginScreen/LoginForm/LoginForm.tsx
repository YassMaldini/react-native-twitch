import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from '@shopify/restyle';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Theme } from '../../../../../utils/theme/theme';
import Box from '../../../../designSystem/Box/Box';
import Text from '../../../../designSystem/Text/Text';
import TextInput from '../../../../designSystem/TextInput/TextInput';
import Button from '../../../../designSystem/Button/Button';
import { LoginFormMutation, LoginFormMutationVariables, LoginFormSchema } from './LoginForm.types';
import getLoginFormSchema from './LoginForm.schema';
import { loginMutation } from './LoginForm.actions';

const LoginForm = () => {
  const theme = useTheme<Theme>();
  const { t } = useTranslation('authentication', { keyPrefix: 'signIn' });
  const dispatch = useDispatch();

  const formProps = useForm<LoginFormSchema>({
    resolver: yupResolver(getLoginFormSchema()),
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = formProps;

  const {
    mutate,
    isLoading,
    error: mutationError,
  } = useMutation<
    Awaited<ReturnType<LoginFormMutation>>,
    Error,
    LoginFormMutationVariables
  >(loginMutation, {
    onSuccess: async (response) => console.log('success response', response),
    onError: async (error) => {
      console.log('error', error)
      console.log('error.message', error.message)
    },
  });

  const onSubmit = handleSubmit((data) => mutate({ ...data, dispatch }));

  return (
    <Box marginHorizontal="l">
      <Controller
        name="username"
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            placeholder={t('form.placeholder.username')}
            placeholderTextColor={theme.colors.secondaryText}
            color="primaryText"
            backgroundColor="highlightBackground"
            marginBottom="m"
            paddingVertical="sToM"
            {...{ value }}
          />
        )}
        {...{ control }}
      />
      <Controller
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            secureTextEntry
            onChangeText={onChange}
            placeholder={t('form.placeholder.password')}
            placeholderTextColor={theme.colors.secondaryText}
            color="primaryText"
            backgroundColor="highlightBackground"
            marginBottom="m"
            paddingVertical="sToM"
            {...{ value }}
          />
        )}
        {...{ control }}
      />
      {mutationError && <Text>{mutationError.message}</Text>}
      <Button onPress={onSubmit} loading={isLoading} disabled={!isValid}>
        Log in
      </Button>
    </Box>
  );
};

export default LoginForm;
