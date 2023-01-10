import { useEffect } from 'react';
import Box from '../../../designSystem/Box/Box';
import Button from '../../../designSystem/Button/Button';
import Text from '../../../designSystem/Text/Text';
import LoginForm from './LoginForm/LoginForm';
import LoginWebView from './LoginWebView/LoginWebView';

const LoginScreen = () => {
  return (
    <Box flex={1}>
      <LoginWebView />
      {/* <LoginForm /> */}
    </Box>
  );
};

export default LoginScreen;
