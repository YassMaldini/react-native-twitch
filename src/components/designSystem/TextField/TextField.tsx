import Box from '../Box/Box';
import TextInput from '../TextInput/TextInput';
import { TextFieldProps } from './TextField.types';

const TextField = ({ beforeInput, afterInput, textInputProps }: TextFieldProps) => {
  return (
    <Box flexDirection="row" alignItems="center">
      {!!beforeInput && (
        <Box margin="sToM" marginRight="none">
          {beforeInput}
        </Box>
      )}
      <TextInput flex={1} paddingHorizontal="sToM" paddingVertical="sToM" {...textInputProps} />
      {!!afterInput && (
        <Box margin="sToM" marginLeft="none">
          {afterInput}
        </Box>
      )}
    </Box>
  );
};

export default TextField;
