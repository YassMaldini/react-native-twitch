import * as yup from 'yup';

const getLoginFormSchema = () =>
  yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
  });

export default getLoginFormSchema;
